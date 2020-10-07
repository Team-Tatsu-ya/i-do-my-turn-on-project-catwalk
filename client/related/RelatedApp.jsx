import React from 'react';
import Grid from '@material-ui/core/Grid';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';
import dummy from './dummy_data.js';

class RelatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: [this.props.current, this.props.currentStyle, this.props.currentRating],
      // currentProduct: [],
      customerOutfit: this.props.outfit
    };

    // this.displayDummy = this.displayDummy.bind(this);
  }

  // TODO: add methods for my get requests to the Products API and for updating customer's outfit data (probably pulling from App's state)
  componentDidMount() {
  //   this.displayDummy();
    this.viewState();
  }

  viewState() {
    console.log('RelatedApp state: ', this.state);
  }

  // displayDummy() {
  //   // var ratings = dummy.dummyRatingsMeta.ratings;
  //   // var newRating = this.props.calculateRating(ratings);

  //   this.setState({
  //     currentProduct: [dummy.dummyProduct, dummy.styleDummy, 5]
  //   });
  // }

  render () {
    var spacing = 2;

    if (Object.keys(this.state.currentProduct).length > 0) {
      return (
        <div>
          <br></br>
          <div id='relatedlist'>
            <RelatedList
              position='center'
              current={this.state.currentProduct}
              outfit={this.state.customerOutfit}
              add={this.props.add}
              remove={this.props.remove}
              // calculateRating={this.props.calculateRating}
              // getProduct={this.props.getProduct}
              // getStyle={this.props.getStyle}
              // getRating={this.props.getRating}
            />
          </div>

          <br></br>
          <div id='outfitlist'>
            <OutfitList
              position='center'
              current={this.state.currentProduct}
              outfit={this.state.customerOutfit}
              add={this.props.add}
              remove={this.props.remove}
            />
          </div>
          <br></br>
          <br></br>
        </div>

      );
    } else {
      return null;
    }
  }
}

export default RelatedApp;