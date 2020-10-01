import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  nameDate: {
    float: 'right'
  },
  response: {
    background: 'lightgray',
    'font-weight': 'normal'
  },
  bold: {
    'font-weight': 'bold'
  }
}));

const OneReview = (props) => {
  const classes = useStyles();

  return (
    <div>
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
          {props.individual.reviewer_name}, {props.individual.date}
        </Grid>
        <Grid item xs={12} className={classes.bold}>
          {props.individual.body}
        </Grid>
        <Grid item xs={12} className={classes.response}>
          {props.individual.response !== "" ? <><h3>Response:</h3><h4>{props.individual.response}</h4></> : null}
        </Grid>
        {/* <Grid item xs={4}>
          Helpful counter and report
        </Grid> */}
      </Grid>
      <hr className={"solid"}></hr>
    </div>
  );
};

export default OneReview;




// const OneReview = (props) => {
//   return (
//     <div>
//       <Rating
//         name="simple-controlled"
//         value={props.individual.rating}
//         precision={0.25}
//         readOnly
//       />
//       <h3>{props.individual.summary}</h3>
//       <h6 style={{float: 'right'}}>{props.individual.date}</h6>
//       <h6 style={{float: 'right'}}>{props.individual.reviewer_name}</h6>
//       <h4>{props.individual.body}</h4>
//       {props.individual.response !== "" ? <><h3>Response</h3><h4>{props.individual.response}</h4></> : null}
//       <hr className="solid"></hr>
//     </div>
//   );
// };

// export default OneReview;