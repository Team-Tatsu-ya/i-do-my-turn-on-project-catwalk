import React from 'react';
// import Grid from '@material-ui/core/Grid';

const Pitch = (props) => (
  <div id="pitch">
    <div id="slogan">{props.currentProduct.slogan}</div>
    <div id="desc">{props.currentProduct.description}</div>
  </div>
);

export default Pitch;