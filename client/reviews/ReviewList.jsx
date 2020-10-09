import React from 'react';
import OneReview from './OneReview.jsx';

const ReviewList = (props) => {
  // console.log('this is what you are trying to map over', props.reviews.results);
  console.log('this is the reviews2 props' , props.reviews);
  return (
    <div>
      {props.reviews.map((individualReview, i) => {
        return <OneReview key={i} individual={individualReview} />;
      })}
    </div>
  );
};

export default ReviewList;