import React from 'react';
import ReviewsApp from './reviews/ReviewsApp.jsx';
import RelatedApp from './related/RelatedApp.jsx';
import Details from './details/DetailsApp.jsx';
import Typography from '@material-ui/core/Typography';
import dummy from './related/dummy_data.js';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 15,
      currentProduct: {},
      currentProductStyle: {},
      customerOutfit: {},
      currentRatingData: {},
      currentRating: 5
    };

    this.getCurrentProduct = this.getCurrentProduct.bind(this);
    this.getCurrentStyles = this.getCurrentStyles.bind(this);
    // this.getCurrentReviewMeta = this.getCurrentReviewMeta.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    // this.calculateRating = this.calculateRating.bind(this);
  }

  componentDidMount() {
    this.getCurrentProduct(this.state.currentId);
    this.getCurrentStyles(this.state.currentId);
    // this.getCurrentReviewMeta();
  }

  // TODO: Shared methods here for API requests

  // Get all products

  // Get one product (for general info about product), save in currentProduct
  getCurrentProduct(id) {
    Axios.get(`http://18.224.37.110/products/${id}`)
      .then(res => {
        this.setState({currentProduct: res.data});
        console.log('getCurrentProduct successful!', this.state.currentProduct);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Get one product style (for styles and photos), save in currentProductStyle
  getCurrentStyles(id) {
    Axios.get(`http://18.224.37.110/products/${id}/styles`)
      .then(res => {
        this.setState({currentProductStyle: res.data});
        console.log('getCurrentStyles successful!', this.state.currentProductStyle);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // NEED TO DETERMINE EXACT ROUTE FOR REVIEW METADATA REQUEST AS API DOCS ARE INCOMPLETE
  // Get product review metadata (for star rating), save in currentRatingData
  // Callback: call calculateRating(this.state.currentRatingData);
  // getCurrentReviewMeta() {
  //   Axios.get(`http://18.224.37.110/reviews/meta/${this.state.currentId}`)
  //     .then(res => {
  //       this.setState({currentRatingData: res.data.ratings}, () => {
  //         this.calculateRating(this.state.currentRatingData);
  //         console.log('getCurrentReviewMeta successful!', this.state.currentRatingData);
  //       });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  // calculateRating(ratings) {
  //   var avgRating = 0;
  //   var total = 0;
  //   for (var rating in this.state.currentRatingData) {
  //     avgRating += this.state.currentRatingData[rating] * rating;
  //     total += this.state.currentRatingData[rating];
  //   }

  //   avgRating = avgRating / total;
  //   this.setState({currentRating: avgRating});
  // }

  addToOutfit() {
    this.setState({currentProduct: dummy.dummyProduct, currentProductStyle: dummy.styleDummy, currentRating: 5}, () => {
      var newOutfit = {};
      Object.assign(newOutfit, this.state.customerOutfit);

      var productToAdd = [];
      productToAdd.push(this.state.currentProduct);
      productToAdd.push(this.state.currentProductStyle.results[0].photos);
      productToAdd.push(this.state.currentRating);

      newOutfit[this.state.currentProduct.id] = productToAdd;
      this.setState({customerOutfit: newOutfit}, () => { console.log('App state after add: ', this.state); });
    });
  }

  removeFromOutfit(id) {
    var newOutfit = {};
    Object.assign(newOutfit, this.state.customerOutfit);

    newOutfit[this.state.currentProduct.id] = undefined;
    this.setState({customerOutfit: newOutfit});
  }


  render () {
    if (Object.keys(this.state.currentProduct).length > 0 && Object.keys(this.state.currentProductStyle).length > 0) {
      return (
        <div>
          <Typography id="title">
            Maruchan Instant Duds
          </Typography>
          <br></br>
          <div id="details">
            <Details />
          </div>
          <div id="related">
            <RelatedApp
              outfit={this.state.customerOutfit}
              current={this.state.currentProduct}
              currentStyle={this.state.currentProductStyle.results[0].photos}
              currentRating={this.state.currentRating}
              add={this.addToOutfit}
              remove={this.removeFromOutfit}
              // calculateRating={this.calculateRating}
              // getProduct={this.getCurrentProduct}
              // getStyle={this.getCurrentStyles}
              // getRating={this.getCurrentReviewMeta}
            />
          </div>
          <div id="reviews">
            <ReviewsApp />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;