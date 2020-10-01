import React from 'react';
import ReviewsApp from './reviews/ReviewsApp.jsx';
import RelatedApp from './related/RelatedApp.jsx';
import Details from './details/DetailsApp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    };
  }

  // Shared methods here for API requests

  render () {
    return (
      <div>
        <h1>App rendering</h1>
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