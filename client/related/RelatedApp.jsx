import React from 'react';

// import components
// import Comparison from './widgets/Comparison.jsx';
// import OutfitList from './widgets/OutfitList.jsx';
import ProductCard from './widgets/ProductCard.jsx';
// import RelatedList from './widgets/RelatedList.jsx';

// TODO: replace dummy data with a call to the Products API
import dummy from './widgets/dummy_data.js';

// import styles, etc.
// import 'fontsource-roboto'; <--- may add back in later since its standard for MaterialUI

class RelatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: dummy.productDummyList[0],
      productRating: dummy.dummyRatings.results[0].rating
    };
  }

  // TODO: build skeleton for my app component
  // TODO: add methods for my get requests to the Products API and for updating customer's outfit data

  render () {
    return (
      <div>
        <p>Related Products, Outfit and Comparison</p>
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating}/>
        <br></br>
        <br></br>
        <br></br>
        {/* <Comparison /> */}
        {/* TODO: add other components */}
      </div>
    );
  }
}

export default RelatedApp;