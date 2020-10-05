import React from 'react';
import Grid from '@material-ui/core/Grid';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';
import dummy from './dummy_data.js';
// import 'fontsource-roboto'; <--- may add back in later

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

  // TODO: add methods for my get requests to the Products API and for updating customer's outfit data (probably pulling from App's state)

  // TODO: remove references to dummy data

  render () {
    var spacing = 2;

    return (
      <div>
        <br></br>
        <div id='relatedlist'>
          <RelatedList
            position='center'
            current={this.state.currentProduct}
            stars={this.state.productRating}
            image={this.state.productImage}
          />
        </div>

        <br></br>
        <div id='outfitlist'>
          <OutfitList
            position='center'
            current={this.state.currentProduct}
            stars={this.state.productRating}
            image={this.state.productImage}
            outfit={this.state.customerOutfit}
          />
        </div>
        <br></br>
        <br></br>
      </div>

    );
  }
}

export default RelatedApp;