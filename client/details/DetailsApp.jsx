import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";

import Gallery from "./Gallery.jsx";
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
        thumbnail_url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
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
        thumbnail_url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
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
    1: {size: 'XS', quantity: 10},
    2: {size: 'S', quantity: 12},
    3: {size: 'M', quantity: 9},
    4: {size: 'L', quantity: 11},
    5: {size: 'XL', quantity: 16},
  },
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyles: sampleStyles,
      currentStyle: sampleStyle,
      currentSku: '1',
      cart: [],
      size: 'select size',
      // currentPicUrl:
      //   "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      // pics: [
      //   "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      //   "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
      //   "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
      //   "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      //   "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      // ],
      // thumbnails: [
      //   "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //   "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //   "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      //   "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      //   "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      // ],
      // currentPic: 0,
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
    // this.getPictures = this.getPictures.bind(this);
    // this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    // this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleStyleChange(style) {
    var newStyle = style;
    this.setState({
      currentStyle: newStyle,
    });
  }

  handleSizeChange(event) {
    if (this.state.size !== event.target.value) {
      var newSku = event.target.value;
      this.setState({
        currentSku: newSku,
        currentSize: this.state.currentStyle.skus[event.target.value].size
      });
    }
  }

  componentDidMount() {
    axios
      .get(`http://18.224.37.110/products/1/styles`)
      .then((res) => {
        var currentStyles = res.data;
        this.setState({
          currentStyles: res.data.results,
          currentStyle: res.data.results[0],
        });
        axios
          .get(`http://18.224.37.110/products/1`)
          .then((res) => {
            var currentProduct = res.data;
            this.setState({ currentProduct });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // getPictures() {
  //   console.log('hello world');
  //   var pics = [];
  //   var thumbnails = [];
  //   if (this.state.currentStyles) {
  //     for (var i = 0; i < this.state.currentStyles.length; i++) {
  //       if (this.state.currentStyles[i].photos) {
  //         for (var k = 0; k < this.state.currentStyles[i].photos.length; i++) {
  //           pics.push(this.state.currentStyles[i].photos[k].url);
  //           thumbnails.push(this.state.currentStyles[i].photos[k].thumbnail_url);
  //         }
  //       }
  //     }
  //   }
  //   this.setState({
  //     pics: pics,
  //     thumbnails: thumbnails,
  //   });
  // }

  // handleLeftArrowClick() {
  //   var index = this.state.currentPic;
  //   if (this.state.currentPic === 0) {
  //     var newIndex = this.state.pics.length - 1;
  //     this.setState({
  //       currentPic: newIndex,
  //       currentPicUrl: this.state.pics[newIndex],
  //     });
  //   } else {
  //     var newIndex = index - 1;
  //     this.setState({
  //       currentPic: newIndex,
  //       currentPicUrl: this.state.pics[newIndex],
  //     });
  //   }
  // }

  // handleRightArrowClick() {
  //   var index = this.state.currentPic;
  //   if (this.state.currentPic === this.state.pics.length - 1) {
  //     var newIndex = 0;
  //     this.setState({
  //       currentPic: newIndex,
  //       currentPicUrl: this.state.pics[newIndex],
  //     });
  //   } else {
  //     var newIndex = index + 1;
  //     this.setState({
  //       currentPic: newIndex,
  //       currentPicUrl: this.state.pics[newIndex],
  //     });
  //   }
  // }


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
              <Grid item xs={8}>
                <div id="gallery">
                  <Paper elevation={0}>
                    <Gallery
                      // handleLeftArrowClick={this.handleLeftArrowClick}
                      // handleRightArrowClick={this.handleRightArrowClick}
                      // pics={this.state.pics}
                      // thumbnails={this.state.thumbnails}
                      // currentPicUrl={this.state.currentPicUrl}
                      currentStyles={this.state.currentStyles}
                    />
                  </Paper>
                </div>
              </Grid>
              <Grid
                container
                item
                xs={4}
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
                        tinyImage="https://www.thesprucepets.com/thmb/6xUaoRttXiA5XVTrsjWIwLsbNo8=/2248x2248/smart/filters:no_upscale()/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg"
                        currentProduct={this.state.currentProduct}
                        currentStyles={this.state.currentStyles}
                        currentStyle={this.state.currentStyle}
                        currentSize={this.state.currentSize}
                        quantities={this.state.quantities}
                        currentSku={this.state.currentSku}
                        // currentQty={this.state.currentStyle.skus[this.state.currentSku].quantity}
                        handleStyleChange={this.handleStyleChange}
                        handleSizeChange={this.handleSizeChange}
                        size={this.state.size}
                        // sizes={Object.keys(this.state.currentStyle.skus)}
                        // changeStyle={this.changeStyle}
                        // thumbnails={this.state.thumbnails}
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
                alignItems="flex-start"
                spacing={5}
              >
                <Grid item xs={8}>
                  <div id="pitch">
                    <Paper elevation={0}>
                      <Pitch currentProduct={this.state.currentProduct} />
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs={4}>
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
