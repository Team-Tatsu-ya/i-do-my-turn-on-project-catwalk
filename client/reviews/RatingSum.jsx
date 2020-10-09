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
  // console.log('This is the ratings dummyData', props.ratings.results);
  // console.log("this is the whole thing", props.ratings2);
  const classes = useStyles();

  var total = 0;
  var rate = 0;
  console.log("this is the obj you are trying to use", props.ratings);

  for (var key in props.ratings) {
    total += props.ratings[key];
    rate += props.ratings[key] * key;
  }

  var average = Math.round((rate / total) * 10) / 10;

  // const sum = props.ratings.map(oneRating => oneRating.rating).reduce((a, b) => a + b, 0);
  // const average = Math.round((sum / props.ratings.length) * 10) / 10;

  return (
    <div>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={3} className={classes.font}>
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