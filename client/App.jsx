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
      customerOutfit: []
    };
  }

  // Shared methods here for API requests

  // Get all products

  // Get one product

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
          <RelatedApp />
        </div>
        <div id="reviews">
          <ReviewsApp />
        </div>
      </div>
    );
  }
}

export default App;