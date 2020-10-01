import React from 'react';
import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function StarRating(props) {
  // const [value, setValue] = React.useState(2);
  var value = props.stars;

  return (
    <div>
      <Box component="fieldset" mb={0} borderColor="transparent" p={0}>
        {/* <Typography component="legend">Read only</Typography> */}
        <Rating name="read-only" value={value} readOnly size="small" precision={0.25} p={0}/>
      </Box>
    </div>
  );
}
