import React, { Component } from 'react';
import dummyData from './dummyData.js';
import ReviewList from './ReviewList.jsx';
import OneReview from './OneReview.jsx';
import RatingSum from './RatingSum.jsx';


// .button {
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// }


class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: dummyData,
      number: 0
    };

    //binding of methods
    this.getReview = this.getReview.bind(this);
    this.addReview = this.addReview.bind(this);
    this.getsRestReviews = this.getsRestReviews.bind(this);

  }

  componentDidMount() {

  }

  //post a review
  addReview() {
    axios.post()
    .then()
    .catch()
  }
  //get a review
  getReview() {
    axios.get()
    .then()
    .catch()
  }

  getsRestReviews() {

  }

  render() {

    return (
      <div>
        Ratings and Reviews
        <RatingSum ratings={this.state.product}/>
        {/* This is are being sorted by relevance */}
        <ReviewList reviews={this.state.product} />
        {/* When the button is clicked, the rest of the reviews display */}
        <button>More Reviews</button>
        {/* when button clicked make a modal popup */}
        <button>Add a Review</button>
      </div>
    );
  }
}

export default ReviewsApp;

//render to the correct ElementId under here
// reactDOM.render(<ReviewsApp />, document.getElementById('app'));