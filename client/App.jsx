import React from 'react';
// import DetailsApp from './details/DetailsApp.jsx';
// import RelatedApp from './related/RelatedApp.jsx';
// import ReviewsApp from './reviews/ReviewsApp.jsx';

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
        {/* <div id="details">
          <DetailsApp />
        </div>
        <div id="related">
          <RelatedApp />
        </div>
        <div id="reviews">
          <ReviewsApp />
        </div> */}
      </div>
    );
  }
}

export default App;