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

const data = [
  { year: '1 star', population: 2.525 },
  { year: '2 stars', population: 3.018 },
  { year: '3 stars', population: 3.682 },
  { year: '4 stars', population: 4.440 },
  { year: '5 stars', population: 5.310 }
];

// [{rating: "", total: , numberOfReviews: }]

const dummy = {
  1: 0,
  2: 1,
  3: 1,
  4: 2,
  5: 10
}

//make a variable with the total number of reviews: that will be the grey bar in the bottom
// getTotalReviews() {
//   var values = Object.values(dummy);
//   for(var i = 0; i < values.length; i++) {
//     var total += values[i];
//   }
//   return total;
// }



export default class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          rotated
          height={180}
        >
          <div>%percent that recommends this product</div>
          <ArgumentAxis />

          <BarSeries
            name="reviews"
            valueField="population"
            argumentField="year"
            barWidth={.2}
            color="green"
          />
          <BarSeries
            name="total"
            barWidth={.2}
            color="grey"
          />
          {/* <Stack/> */}
          {/* <Title text="World population" /> */}
          <Animation />
        </Chart>
      </Paper>
    );
  }
}