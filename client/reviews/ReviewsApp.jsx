import React, { Component } from 'react';
import dummyData from './dummyData.js';
import ReviewList from './ReviewList.jsx';
import OneReview from './OneReview.jsx';
import RatingSum from './RatingSum.jsx';
import AddReview from './AddReview.jsx';
import { Grid } from '@material-ui/core';


class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: dummyData,
      showReviews: 0,
      addButton: false
    };

    //binding of methods
    this.getReview = this.getReview.bind(this);
    this.addReview = this.addReview.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    // this.handleReviews = this.handleReviews.bind(this);

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

  handleAdd(event) {
    this.setState({addButton: true})
  }

  // handleReviews() {
  //   console.log("you clicked the button")
  //   this.setState({
  //     showReviews:
  //       this.state.showReviews >= this.state.product.length ?
  //         this.state.showReviews : this.state.showReviews + 1
  //   })
  // }

  render() {

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={2}>
            Ratings and Reviews
        <RatingSum ratings={this.state.product} />
          </Grid>
          <Grid item xs={6}>
            {/* This is are being sorted by relevance */}
            <ReviewList reviews={this.state.product} count={this.state.showReviews}/>
          </Grid>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={5}>

          </Grid>
          <Grid item xs={2}>
            {/* When the button is clicked, the rest of the reviews display */}
            <button id="reviewButtons">MORE REVIEWS</button>
          </Grid>
          <Grid item xs={2}>
            {/* when button clicked make a modal popup */}
            <button id="reviewButtons" onClick={this.handleAdd}>ADD A REVIEW +</button>
          </Grid>
          <Grid>
            {this.state.addButton === true ? <AddReview /> : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ReviewsApp;