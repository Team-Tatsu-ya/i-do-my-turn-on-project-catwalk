import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function StarRating(props) {
  var value = props.stars;

  return (
    <div>
      <Box component="fieldset" mb={0} borderColor="transparent" p={0}>
        <Rating name="read-only" value={value} readOnly size="small" precision={0.25} p={0}/>
      </Box>
    </div>
  );
}
