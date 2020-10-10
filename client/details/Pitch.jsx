import React from 'react';

const Pitch = (props) => (
  <div id="pitch">
    <div id="slogan">{props.currentProduct.slogan}</div>
    <div id="desc">{props.currentProduct.description}</div>
  </div>
);

export default Pitch;