import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  nameDate: {
    float: 'right'
  },
  bold: {
    'font-weight': 'bold'
  },
  grey: {
    background: 'lightgrey'
  },
  size: {
    'font-size': '12px'
  }
}));

const OneReview = (props) => {
  const classes = useStyles();

  return (
    <div id="robotoFont">
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={4}>
          <Rating
            name="simple-controlled"
            value={props.individual.rating}
            precision={0.25}
            readOnly
            />
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4} className={classes.nameDate}>
          {props.individual.reviewer_name}, {moment(props.individual.date).format("LL")}
        </Grid>
        <Grid item xs={12} className={classes.bold}>
          {props.individual.body}
        </Grid>
        <Grid item xs={12}>
          <div className={classes.grey}>
            {!props.individual.response ? null : <><h3>Response:</h3><h4>{props.individual.response}</h4></>}
          </div>
        </Grid>
        <Grid item xs={4} className={classes.size}>
          <p>Helpful? <u>Yes</u> ({props.individual.helpfulness}) |  <u>Report</u></p>
        </Grid>
      </Grid>
      <hr className={"solid"}></hr>
    </div>
  );
};

export default OneReview;