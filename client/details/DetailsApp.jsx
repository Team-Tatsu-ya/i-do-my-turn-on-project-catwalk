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
      currentQty: 1,
      currentSku: '1',
      cart: [],
      cartValue: 0,
      size: 'select size',
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
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.calculateCartValue = this.calculateCartValue.bind(this);
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

  handleQtyChange(event) {
    if (this.state.currentQty !== event.target.value) {
      var newSku = event.target.value;
      this.setState({
        currentQty: newQty
      });
    }
  }

  handleAddToCart() {
    var newCart = [... this.state.cart];
    var newItem = {
      product: this.state.currentProduct,
      style: this.state.currentStyle,
      quantity: this.state.currentQty,
      size: this.state.currentSku,
    };
    newCart.push(newItem);
    var newCartValue = this.calculateCartValue(newCart);
    this.setState({
      cart: newCart,
      cartValue: newCartValue
    });
  }

  calculateCartValue(cart) {
    var grandTotal = 0;
    for (var i = 0; i < cart.length; i++) {
      var itemTotal = cart[i].style.original_price;
      grandTotal += itemTotal;
    }
    return grandTotal;
  }

  componentDidMount() {
    axios
      .get(`http://3.137.191.193/products/${this.props.currentId}/styles`)
      .then((res) => {
        var currentStyles = res.data;
        this.setState({
          currentStyles: res.data.results,
          currentStyle: res.data.results[0],
        });
        axios
          .get(`http://3.137.191.193/products/${this.props.currentId}`)
          .then((res) => {
            var currentProduct = res.data;
            this.setState({ currentProduct });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <div>
        {console.log(this.props.currentRating)}
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
                      <Heading currentProduct={this.state.currentProduct} currentRating={this.props.currentRating} />
                    </div>
                    <div id="styleselect">
                      <StyleSelect
                        currentProduct={this.state.currentProduct}
                        currentStyles={this.state.currentStyles}
                        currentStyle={this.state.currentStyle}
                        currentQty={this.state.currentQty}
                        currentSize={this.state.currentSize}
                        quantities={this.state.quantities}
                        currentSku={this.state.currentSku}
                        handleQtyChange={this.handleQtyChange}
                        handleStyleChange={this.handleStyleChange}
                        handleSizeChange={this.handleSizeChange}
                        handleAddToCart={this.handleAddToCart}
                        calculateCartValue={this.calculateCartValue}
                        size={this.state.size}
                        addToOutfit={this.state.addToOutfit}
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
