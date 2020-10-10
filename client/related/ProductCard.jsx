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
      current: this.props.current,
      selected: this.props.selected,
      outfit: this.props.outfit,
      list: this.props.list,
      showComparison: false,
    };

    // this.viewState = this.viewState.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
  }

  componentDidMount() {
    // this.viewState();
  }

  // TODO: remove this after app is finalized
  // viewState() {
  //   console.log('ProductCard state: ', this.state);
  // }

  changeProduct(newId) {
    this.props.change(this.state.selected.id);
  }

  render() {
    if (this.state.list === 'related') {
      var button = (
        <StarButton show={this.state.showComparison} current={this.state.current} selected={this.state.selected} />
      );
    } else {
      button = (
        <XButton selected={this.state.selected} outfit={this.state.outfit} remove={this.props.remove}/>
      );
    }

    const productCardStyle = {
      minWidth: 200,
      maxWidth: 200,
      height: 315
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
      height: 195,
      paddingLeft: -5,
      objectFit: 'cover',
      objectPosition: 'bottom'
    };

    if (this.state.selected && Object.keys(this.state.selected).length === 4) {
      if (this.state.selected.id === 2) {
        var imageUrl = 'https://149354000.v2.pressablecdn.com/wp-content/uploads/2020/08/104900630_3168377346542044_7756744666053666797_o.jpg';
      } else {
        imageUrl = this.state.selected.photos.photos[0].url;
      }

      return (
        <Card className="productCard" variant="outlined" style={productCardStyle}>
          <CardContent>
            <div style={imageButtonStyle}>
              <IconButton style={buttonStyle}>
                {button}
              </IconButton>
              <div onClick={this.changeProduct}>
                <img src={imageUrl} alt={this.state.selected.info.name} style={imageStyle} value={this.state.selected.id} />
              </div>
            </div>
            <Typography className="productCardCategory" color="textSecondary" style={productCategoryStyle} gutterBottom>
              {this.state.selected.info.category.toUpperCase()}
            </Typography>
            <Typography className="productCardName" variant="h6" component="h2" style={productNameStyle} onClick={this.changeProduct}>
              <b>{this.state.selected.info.name}</b>
            </Typography>
            <Typography className="productCardPrice" color="textSecondary" style={productPriceStyle}>
              ${this.state.selected.info.default_price}
            </Typography>
            <StarRating rating={this.state.selected.rating} />
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  }
}