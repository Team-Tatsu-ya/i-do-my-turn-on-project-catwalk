import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Stack } from '@devexpress/dx-react-chart';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { rating: '1 star', total: , numberOfReviews: },
//   { rating: '2 star', total: , numberOfReviews: },
//   { rating: '3 star', total: , numberOfReviews: },
//   { rating: '4 star', total: , numberOfReviews: },
//   { rating: '5 star', total: , numberOfReviews: }
// ];

// var arrayOfobj = [
//   {2: 2, 3: 6, 4: 4}
// ];
// [{rating: "", total: , numberOfReviews: }]



//make a variable with the total number of reviews: that will be the grey bar in the bottom
// getTotalReviews() {
//   var values = Object.values(props.ratings);
//   for(var i = 0; i < values.length; i++) {
//     var total += values[i];
//   }
//   return total;
// }



const RatingBreakdown = (props) => {
  console.log("this is ratings in ratingbreakdown", props.ratings);
  console.log("this is the recommend data in rating breakdown", props.recommend);

  var arrayOfRatings = [props.ratings];
  console.log('****', arrayOfRatings);


  var totalRecommend = 0;

  for (var key in props.recommend) {
    totalRecommend += props.recommend[key];

  }

  var yesRecommend = Math.round((props.recommend[1] / totalRecommend) * 10) * 10;


    return (

    <div>
    {props.recommend[1] === undefined ? <div>{'0% of reviews recommend this product'}</div> :  <div>{yesRecommend}{'% of reviews recommend this product'}</div>}
    </div>
    //   <Paper>
    //     <Chart
    //       data={arrayOfRatings}
    //       rotated
    //       height={180}
    //     >
    //       <div>{yesRecommend}% percent that recommends this product</div>
    //       <ArgumentAxis />

    //       <BarSeries
    //         name="reviews"
    //         valueField="rating"
    //         argumentField="numberOfReviews"
    //         barWidth={.2}
    //         color="green"
    //       />
    //       <BarSeries
    //         name="total"
    //         valueField="rating"
    //         argumentField="total"
    //         barWidth={.2}
    //         color="grey"
    //       />
    //       <Animation />
    //       <Stack
    //         stacks={[
    //           { series: ['total', 'reviews'] },
    //         ]}
    //       />
    //     </Chart>
    //   </Paper>
    // );
    )

}

export default RatingBreakdown;