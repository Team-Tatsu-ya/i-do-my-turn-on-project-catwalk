import React, { Component } from 'react';
import dummyData from './dummyData.js';
import ReviewList from './ReviewList.jsx';
import OneReview from './OneReview.jsx';
import RatingSum from './RatingSum.jsx';
import { Grid } from '@material-ui/core';


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
        <Grid container spacing={2}>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={3}>
            Ratings and Reviews
        <RatingSum ratings={this.state.product} />
          </Grid>
          <Grid item xs={5}>
            {/* This is are being sorted by relevance */}
            <ReviewList reviews={this.state.product} />
          </Grid>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={5}>

          </Grid>
          <Grid item xs={2}>
            {/* When the button is clicked, the rest of the reviews display */}
            <button id="reviewButtons">More Reviews</button>
          </Grid>
          <Grid item xs={2}>
            {/* when button clicked make a modal popup */}
            <button id="reviewButtons">Add a Review +</button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ReviewsApp;

//render to the correct ElementId under here
// reactDOM.render(<ReviewsApp />, document.getElementById('app'));