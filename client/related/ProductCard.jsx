import React from 'react';
import StarRating from './StarRating.jsx';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: this.props.current,
      product: this.props.current,                  // will replace with this.props.selected
      productImage: this.props.image,
      list: this.props.list,
      rating: this.props.stars,
      showComparison: false,
    };

  }

  componentDidMount () {
    // TODO: dynamically render product image and remove this line of code
    this.setState({productImage: 'https://cdn.shopify.com/s/files/1/0955/4488/products/camo_jacket_2_1200x1200.png?v=1569062599'});
  }

  render() {
    if (this.state.list === 'related') {
      var button = (
        <StarButton show={this.state.showComparison} current={this.state.mainProduct} selected={this.state.product} />
      );
    } else {
      button = (
        <XButton selected={this.state.product} outfit={this.props.outfit}/>
      );
    }

    const productCardStyle = {
      minWidth: 200,
      maxWidth: 200,
      minHeight: 300,
      maxHeight: 315
    };

    const productCategoryStyle = {
      fontSize: 10,
    };

    const productNameStyle = {
      fontSize: 13,
      fontColor: '#525252'
    };

    const productPriceStyle = {
      fontSize: 10,
      marginBottom: 8,
    };

    const imageButtonStyle = {
      position: 'relative'
    };

    const buttonStyle = {
      position: 'absolute',
      zIndex: 1,
      right: 0,
    };

    const imageStyle = {
      position: 'relative',
      width: '100%',
      paddingLeft: -5
    };

    return (
      <Card className="productCard" variant="outlined" style={productCardStyle}>
        <CardContent>
          <div style={imageButtonStyle}>
            <IconButton list={this.state.list} style={buttonStyle}>
              {button}
            </IconButton>
            <img src={this.state.productImage} alt="" style={imageStyle} />
          </div>
          <Typography className="productCardCategory" color="textSecondary" style={productCategoryStyle} gutterBottom>
            {this.state.product.category.toUpperCase()}
            {/* {this.state.product[0].category.toUpperCase()}    <--- after refactor of related list */}
          </Typography>
          <Typography className="productCardName" variant="h6" component="h2" style={productNameStyle}>
            <b>{this.state.product.name}</b>
            {/* <b>{this.state.product[0].name}</b>    <--- after refactor of related list */}
          </Typography>
          <Typography className="productCardPrice" color="textSecondary" style={productPriceStyle}>
            ${this.state.product.default_price}
            {/* ${this.state.product[0].default_price}    <--- after refactor of related list */}
          </Typography>
          <StarRating stars={this.props.stars} />
        </CardContent>
      </Card>
    );
  }
}