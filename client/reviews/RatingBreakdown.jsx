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

// var arrayOfRatings = [
//   {2: 2, 3: 6, 4: 4}
// ];
// [{rating: "", total: , numberOfReviews: }]

const RatingBreakdown = (props) => {
  console.log("this is ratings props for GRAPH", props.ratings);
  console.log("this is the recommend data in rating breakdown", props.recommend);

  var arrayOfRatings = [props.ratings];
  console.log('****', arrayOfRatings);

  const getYesRecommend = () => {
    var totalRecommend = 0;
    for (var key in props.recommend) {
      totalRecommend += props.recommend[key];
    }
    var yesRecommend = Math.round((props.recommend[1] / totalRecommend) * 100);
    return yesRecommend;
  };

  //make a variable with the total number of reviews: that will be the grey bar in the bottom
  const getTotalReviews = () => {
    var total = 0;
    var values = Object.values(props.ratings);
    for(var i = 0; i < values.length; i++) {
      total += values[i];
    }
    return total;
  };

  var tt = getTotalReviews();

  console.log("this is the total TT",tt)

  var data = [
    { ratingStar: '1 star', rating: !arrayOfRatings[0][1] ? 0 : arrayOfRatings[0][1], totalReviews: !arrayOfRatings[0][1] ? tt - 0 : tt - arrayOfRatings[0][1]},
    { ratingStar: '2 star', rating: !arrayOfRatings[0][2] ? 0 : arrayOfRatings[0][2], totalReviews: !arrayOfRatings[0][2] ? tt - 0 : tt - arrayOfRatings[0][2]},
    { ratingStar: '3 star', rating: !arrayOfRatings[0][3] ? 0 : arrayOfRatings[0][3], totalReviews: !arrayOfRatings[0][3] ? tt - 0 : tt - arrayOfRatings[0][3]},
    { ratingStar: '4 star', rating: !arrayOfRatings[0][4] ? 0 : arrayOfRatings[0][4], totalReviews: !arrayOfRatings[0][4] ? tt - 0 : tt - arrayOfRatings[0][4]},
    { ratingStar: '5 star', rating: !arrayOfRatings[0][5] ? 0 : arrayOfRatings[0][5], totalReviews: !arrayOfRatings[0][5] ? tt - 0 : tt - arrayOfRatings[0][5]}
  ];

  console.log("THIS IS THE DATA FOR GRAPH" , data);


    return (

    // <div>
    // {props.recommend[1] === undefined ? <div>{'0% of reviews recommend this product'}</div> :  <div>{getYesRecommend()}{'% of reviews recommend this product'}</div>}
    //  </div>

      <Paper>
        <Chart
          data={data}
          rotated
          height={180}
        >
          <div>{getYesRecommend()}% percent that recommends this product</div>


          <BarSeries
            name="reviews"
            valueField="ratingStar"
            argumentField="rating"
            barWidth={.2}
            color="green"
          />
          <BarSeries
            name="total"
            valueField="ratingStar"
            argumentField="totalReviews"
            barWidth={.2}
            color="grey"
          />
          {/* <Animation /> */}
          <Stack
            stacks={[
              { series: ['reviews', 'total'] },
            ]}
          />
        </Chart>
          </Paper>
    );
};

export default RatingBreakdown;