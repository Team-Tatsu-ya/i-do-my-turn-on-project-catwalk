import React from 'react';
import OneReview from './OneReview.jsx';

const ReviewList = (props) => {
  console.log('this is what you are trying to map over', props);
  return (
    <div>
      {props.reviews.results.map((individualReview, i) => {
        return <OneReview key={i} individual={individualReview} />;
      })}
    </div>
  );
};

export default ReviewList;