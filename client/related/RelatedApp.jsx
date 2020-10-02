import React from 'react';

// import components
// import Comparison from './widgets/Comparison.jsx';
import OutfitList from './OutfitList.jsx';
import ProductCard from './ProductCard.jsx';
import RelatedList from './RelatedList.jsx';

// TODO: replace dummy data with a call to the Products API
import dummy from './dummy_data.js';

// import styles, etc.
// import 'fontsource-roboto'; <--- may add back in later since its standard for MaterialUI

class RelatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: dummy.productDummyList[0],
      productRating: dummy.dummyRatings.results[0].rating,
      productImage: dummy.styleDummy.results[0].photos.url,
      customerOutfit: []
    };
  }

  // TODO: build skeleton for my app component
  // TODO: add methods for my get requests to the Products API and for updating customer's outfit data

  render () {

    return (
      <div>
        {/* <p>Related Products, Outfit and Comparison</p> */}
        <RelatedList current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage}/>
        <br></br>
        <OutfitList current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} outfit={this.state.customerOutfit}/>
        <br></br>
        <br></br>
        {/* <Comparison /> */}
        {/* TODO: add other components */}
      </div>
    );
  }
}

export default RelatedApp;