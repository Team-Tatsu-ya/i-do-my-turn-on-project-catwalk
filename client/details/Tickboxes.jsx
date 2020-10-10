import React from 'react';
// import Grid from '@material-ui/core/Grid';

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