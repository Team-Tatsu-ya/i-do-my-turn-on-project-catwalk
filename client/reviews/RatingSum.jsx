import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  font: {
    'font-size': '50px',
    'font-weight': 'bold'
  }
}));


const RatingSum = (props) => {
  // console.log('This is the ratings', props.ratings.results);
  const classes = useStyles();

  const sum = props.ratings.results.map(oneRating => oneRating.rating).reduce((a, b) => a + b, 0);
  const average = sum / props.ratings.results.length;

  return (
    <div>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2} className={classes.font}>
          {average}
        </Grid>
        <Grid item xs={2}>
          <Rating
            name="simple-controlled"
            value={average}
            precision={0.25}
            readOnly
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingSum;
{/* <div>
  <Grid container spacing={2} className={classes.grid}>
    <Grid item xs={2} className={classes.font}>
      {average}
    </Grid>
    <Grid item xs={2}>
      <Rating
        name="simple-controlled"
        value={average}
        precision={0.25}
        readOnly
      />
    </Grid>
  </Grid>
</div> */}


{/* <div>
      <div className={classes.font}>{average}</div>
      <Rating
        name="simple-controlled"
        value={average}
        precision={0.25}
        readOnly
      />
    </div> */}