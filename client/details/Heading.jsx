import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Heading = (props) => (
  <div>
    <div id="stars">☆☆☆☆☆ <u>Read all reviews</u></div>
    <div id="category">{props.currentProduct.category}</div>
    <div id="title">{props.currentProduct.name}</div>
  </div>
);

export default Heading;