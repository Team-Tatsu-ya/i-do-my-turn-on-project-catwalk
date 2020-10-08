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
    this.getCurrentReviewMeta = this.getCurrentReviewMeta.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.calculateRating = this.calculateRating.bind(this);
  }

  componentDidMount() {
    this.getCurrentProduct(this.state.currentId);
    this.getCurrentStyles(this.state.currentId);
    this.getCurrentReviewMeta(this.state.currentId);
  }

  // Get all products?

  getCurrentProduct(id) {
    Axios.get(`http://18.224.37.110/products/${id}`)
      .then(res => {
        this.setState({currentProduct: res.data});
        console.log('getCurrentProduct successful!', this.state.currentProduct);
        // res.sendStatus(200);
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);
      });
  }

  getCurrentStyles(id) {
    Axios.get(`http://18.224.37.110/products/${id}/styles`)
      .then(res => {
        this.setState({currentProductStyle: res.data});
        console.log('getCurrentStyles successful!', this.state.currentProductStyle);
        // res.sendStatus(200);
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);
      });
  }

  getCurrentReviewMeta() {
    Axios.get(`http://18.224.37.110/reviews/meta/?product_id=${this.state.currentId}`)
      .then(res => {
        this.setState({currentRatingData: res.data.ratings}, () => {
          this.calculateRating(this.state.currentRatingData);
          console.log('getCurrentReviewMeta successful!', this.state.currentRatingData);
          // res.sendStatus(200);
        });
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);
      });
  }

  calculateRating(ratings) {
    var avgRating = 0;
    var total = 0;
    for (var rating in this.state.currentRatingData) {
      avgRating += this.state.currentRatingData[rating] * rating;
      total += this.state.currentRatingData[rating];
    }

    avgRating = Math.floor((avgRating / total) * 10) / 10;
    this.setState({currentRating: avgRating});
  }

  addToOutfit() {
    var newOutfit = {};
    Object.assign(newOutfit, this.state.customerOutfit);

    var productToAdd = {};
    productToAdd.id = this.state.currentId;
    productToAdd.info = this.state.currentProduct;
    productToAdd.photos = this.state.currentProductStyle.results[0].photos[0];
    productToAdd.rating = this.state.currentRating;

    newOutfit[this.state.currentId] = productToAdd;
    this.setState({customerOutfit: newOutfit}, console.log('App state after adding to outfit: ', this.state));
  }

  removeFromOutfit(id) {
    var newOutfit = {};
    Object.assign(newOutfit, this.state.customerOutfit);

    newOutfit[id] = undefined;
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
            <Details currentId={this.state.currentId}/>
          </div>
          <div id="related">
            <RelatedApp
              outfit={this.state.customerOutfit}
              currentId={this.state.currentId}
              current={this.state.currentProduct}
              currentStyle={this.state.currentProductStyle.results[0].photos[0]}
              currentRating={this.state.currentRating}
              add={this.addToOutfit}
              remove={this.removeFromOutfit}
            />
          </div>
          <div id="reviews">
            <ReviewsApp currentId={this.state.currentId}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;