import React from 'react';
import NavBar from './NavBar.jsx';
import ReviewsApp from './reviews/ReviewsApp.jsx';
import RelatedApp from './related/RelatedApp.jsx';
import Details from './details/DetailsApp.jsx';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: 'http://3.137.191.193',
      allProducts: [],
      allProductNames: [],
      currentId: 9,
      currentProduct: {},
      currentProductStyle: {},
      customerOutfit: {},
      outfitArray: [],
      currentRatingData: {},
      currentRating: 5
    };

    this.getAllProducts = this.getAllProducts.bind(this);
    this.getCurrentProduct = this.getCurrentProduct.bind(this);
    this.getCurrentStyles = this.getCurrentStyles.bind(this);
    this.getCurrentReviewMeta = this.getCurrentReviewMeta.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.calculateRating = this.calculateRating.bind(this);
    this.changeId = this.changeId.bind(this);
    this.searchProductNames = this.searchProductNames.bind(this);
  }

  componentDidMount() {
    this.getCurrentProduct(this.state.currentId);
    this.getCurrentStyles(this.state.currentId);
    this.getCurrentReviewMeta(this.state.currentId);
    this.getAllProducts();
  }

  // Get all products request for search bar
  getAllProducts() {
    Axios.get(`${this.state.apiUrl}/products/?page=1?count=50`)
      .then(res => {
        this.setState({allProducts: res.data});
        console.log('getAllProducts successful!', this.state.allProducts);
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getCurrentProduct(id) {
    Axios.get(`${this.state.apiUrl}/products/${id}`)
      .then(res => {
        this.setState({currentProduct: res.data});
        console.log('getCurrentProduct successful!', this.state.currentProduct);
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getCurrentStyles(id) {
    Axios.get(`${this.state.apiUrl}/products/${id}/styles`)
      .then(res => {
        this.setState({currentProductStyle: res.data});
        console.log('getCurrentStyles successful!', this.state.currentProductStyle);
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getCurrentReviewMeta(id) {
    Axios.get(`${this.state.apiUrl}/reviews/meta/?product_id=${id}`)
      .then(res => {
        this.setState({currentRatingData: res.data.ratings}, () => {
          this.calculateRating(this.state.currentRatingData);
          console.log('getCurrentReviewMeta successful!', this.state.currentRatingData);
        });
      })
      .catch(err => {
        console.error(err);
        // res.sendStatus(400);   <--- we need something to end the promise
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

  searchProductNames(input) {
    var productList = this.state.allProducts;
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].name.startsWith(input)) {
        this.changeId(productList[i].id);
      }
    }
  }

  addToOutfit() {
    var newOutfit = {};
    Object.assign(newOutfit, this.state.customerOutfit);

    var productToAdd = {};
    productToAdd.id = this.state.currentId;
    productToAdd.info = this.state.currentProduct;
    productToAdd.photos = this.state.currentProductStyle.results[0];
    productToAdd.rating = this.state.currentRating;

    newOutfit[this.state.currentId] = productToAdd;
    this.setState({customerOutfit: newOutfit}, () => {
      console.log('App state after adding: ', this.state);
    });
  }

  removeFromOutfit(id) {
    var newOutfit = {};
    Object.assign(newOutfit, this.state.customerOutfit);

    delete newOutfit[id];
    this.setState({customerOutfit: newOutfit}, () => { console.log('App state after removing from outfit: ', this.state); });
  }

  changeId(id) {
    this.setState({currentId: id}, () => {
      this.getCurrentProduct(id);
      this.getCurrentStyles(id);
      this.getCurrentReviewMeta(id);
    });
    console.log('Id has been changed: ', this.state.currentProduct);
  }

  render () {
    if (Object.keys(this.state.currentProduct).length > 0 && Object.keys(this.state.currentProductStyle).length > 0) {
      var newKey = this.state.currentProductStyle.product_id;

      return (
        <div>
          <NavBar search={this.searchProductNames}/>
          <br></br>
          <div id="details">
            <Details currentId={this.state.currentId} key={'details-app' + newKey} currentRating={this.state.currentRating} addToOutfit={this.state.addToOutfit}/>
          </div>
          <div id="related">
            <RelatedApp
              outfit={this.state.customerOutfit}
              currentId={this.state.currentId}
              current={this.state.currentProduct}
              currentStyle={this.state.currentProductStyle.results[0]}
              currentRating={this.state.currentRating}
              add={this.addToOutfit}
              remove={this.removeFromOutfit}
              change={this.changeId}
              key={'related-app' + newKey}
            />
          </div>
          <div id="reviews">
            <ReviewsApp currentId={this.state.currentId} key={'reviews-app' + newKey}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;