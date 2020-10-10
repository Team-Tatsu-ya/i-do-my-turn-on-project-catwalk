import React from 'react';
import Grid from '@material-ui/core/Grid';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';
import dummy from './dummy_data.js';

class RelatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        id: this.props.currentId,
        info: this.props.current,
        photos: this.props.currentStyle,
        rating: this.props.currentRating
      },
      outfit: this.props.outfit
    };

    this.viewState = this.viewState.bind(this);
  }

  componentDidMount() {
    this.viewState();
  }

  // TODO: remove when app is finalized
  viewState() {
    console.log('RelatedApp state: ', this.state);
  }

  render () {
    var spacing = 2;

    if (Object.keys(this.state.currentProduct).length === 4) {
      return (
        <div>
          <br></br>
          <div id='relatedlist'>
            <RelatedList
              position='center'
              current={this.state.currentProduct}
              outfit={this.props.outfit}
              add={this.props.add}
              remove={this.props.remove}
              calculateRating={this.props.calculateRating}
              change={this.props.change}
              key={this.state.currentProduct.id}
            />
          </div>

          <br></br>
          <div id='outfitlist'>
            <OutfitList
              position='center'
              current={this.state.currentProduct}
              outfit={this.props.outfit}
              add={this.props.add}
              remove={this.props.remove}
              change={this.props.change}
              key={Object.keys(this.props.outfit) || 'empty-outfit'}
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