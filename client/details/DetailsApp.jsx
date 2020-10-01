import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Heading from "./Heading.jsx";
import StyleSelect from "./StyleSelect.jsx";
import Pitch from "./Pitch.jsx";
import Tickboxes from "./Tickboxes.jsx";

var sampleData = {
  id: 11,
  name: "Air Minis 250",
  slogan: "Full court support",
  description:
    "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  category: "Basketball Shoes",
  default_price: "0",
  features: [
    {
      feature: "Sole",
      value: "Rubber",
    },
    {
      feature: "Material",
      value: "FullControlSkin",
    },
  ],
};

var sampleStyles = [
  {
    style_id: 1,
    name: "Forest Green & Black",
    original_price: "140",
    sale_price: "0",
    "default?": 1,
    photos: [
      {
        thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        url: "urlplaceholder/style_1_photo_number.jpg",
      },
      {
        thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        url: "urlplaceholder/style_1_photo_number.jpg",
      },
      // ...
    ],
    skus: {
      XS: 8,
      S: 16,
      M: 17,
      L: 10,
      XL: 15,
    },
  },

  {
    style_id: 2,
    name: "Desert Brown & Tan",
    original_price: "140",
    sale_price: "0",
    "default?": 0,
    photos: [
      {
        thumbnail_url: "urlplaceholder/style_2_photo_number_thumbnail.jpg",
        url: "urlplaceholder/style_2_photo_number.jpg",
      },
    ],
    skus: {
      S: 16,
      XS: 8,
      M: 17,
      L: 10,
      XL: 15,
      XXL: 6,
    },
  },
];

var sampleStyle = {
  style_id: 1,
  name: "Forest Green & Black",
  original_price: "140",
  sale_price: "0",
  "default?": 1,
  photos: [
    {
      thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      url: "urlplaceholder/style_1_photo_number.jpg",
    },
    {
      thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      url: "urlplaceholder/style_1_photo_number.jpg",
    },
    // ...
  ],
  skus: {
    XS: 8,
    S: 16,
    M: 17,
    L: 10,
    XL: 15,
  },
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyles: sampleStyles,
      currentStyle: sampleStyle,
      currentSize: "XS",
      quantities: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
    };
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <div>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
              spacing={8}
            >
              <Grid item xs={8} spacing={0}>
                <div id="gallery">
                  <Paper elevation={0}>
                    <img
                      src="https://i.imgur.com/Q2xzpwJ.png"
                      id="placeholderpic"
                    ></img>
                  </Paper>
                </div>
              </Grid>
              <Grid
                container
                item
                xs={4}
                spacing={0}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <div id="overview">
                  <Paper elevation={0}>
                    <div id="heading">
                      <Heading currentProduct={this.state.currentProduct} />
                    </div>
                    <div id="styleselect">
                      <StyleSelect
                        currentProduct={this.state.currentProduct}
                        currentStyles={this.state.currentStyles}
                        currentStyle={this.state.currentStyle}
                        currentSize={this.state.currentSize}
                        quantities={this.state.quantities}
                        sizes={["XS", "S", "M", "L", "XL"]}
                      />
                    </div>
                  </Paper>
                </div>
              </Grid>
            </Grid>

            <div id="deets">
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs={8} spacing={1}>
                  <div id="pitch">
                    <Paper elevation={0}>
                      <Pitch currentProduct={this.state.currentProduct} />
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs={4} spacing={1}>
                  <div id="tickboxes">
                    <Paper elevation={0}>
                      <Tickboxes currentProduct={this.state.currentProduct} />
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Details;