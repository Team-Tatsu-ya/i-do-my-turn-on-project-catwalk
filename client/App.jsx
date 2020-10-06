import React from 'react';
import ReviewsApp from './reviews/ReviewsApp.jsx';
import RelatedApp from './related/RelatedApp.jsx';
import Details from './details/DetailsApp.jsx';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      currentProductStyle: {},
      customerOutfit: [],
      currentRatingData: {},
      currentRating: 5
    };
  }

  // Shared methods here for API requests

  // Get all products

  // Get one product (for general info about product)

  // Get one product style (for styles and photos)

  // Get product review metadata (for star rating)

  // Need a function here to calculate star rating of current product based on currentRatingData

  render () {
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
            currentStyle={this.state.currentProductStyle}
            currentRating={this.state.currentRating}
          />
        </div>
        <div id="reviews">
          <ReviewsApp />
        </div>
      </div>
    );
  }
}

export default App;