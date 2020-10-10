import React from 'react';

const Tickboxes = (props) => (
  <div>
    {props.currentProduct.features.map((feature) => {
      return (
        <div id="checked">✓ {feature.feature}: {feature.value}</div>
      );
    })}
  </div>
);

export default Tickboxes;