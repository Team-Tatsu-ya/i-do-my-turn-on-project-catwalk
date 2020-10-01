import React from 'react';
import StarRating from './StarRating.jsx';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';
// import Comparison from './Comparison.jsx';

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: 0,
      product: this.props.current,
      list: 'related',
      showComparison: false
    };

  }

  // componentDidMount () {

  // }

  render() {
    if (this.state.list === 'related') {
      var button = (
        <StarButton show={this.state.showComparison} current={this.state.mainProduct} selected={this.state.product} />
      );
    } else {
      button = (
        <XButton />
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
      fontSize: 13
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
      width: 195,
      height: 195
    };

    return (
      <Card className="productCard" variant="outlined" style={productCardStyle}>
        <CardContent>
          <div style={imageButtonStyle}>
            <IconButton list={this.state.list} style={buttonStyle}>
              {button}
            </IconButton>
            <img src="https://i5.walmartimages.com/asr/112eb075-76cb-4e22-9024-8705b28ed68c_1.db544800fcbb66a69ac23cd555ec102f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="" style={imageStyle} />
          </div>
          <Typography className="productCardCategory" color="textSecondary" style={productCategoryStyle} gutterBottom>
            {this.state.product.category.toUpperCase()}
          </Typography>
          <Typography className="productCardName" variant="h6" component="h2" style={productNameStyle}>
            <b>{this.state.product.name}</b>
          </Typography>
          <Typography className="productCardPrice" color="textSecondary" style={productPriceStyle}>
            ${this.state.product.default_price}
          </Typography>
          <StarRating stars={this.props.stars} />
        </CardContent>
      </Card>
    );
  }
}





/*
COPY OF CODE IN CASE I MESS EVERYTHING UP

import React from 'react';
import StarRating from './StarRating.jsx';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    minHeight: 300,
    maxHeight: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  category: {
    fontSize: 10,
  },
  name: {
    fontSize: 13
  },
  price: {
    fontSize: 10,
    marginBottom: 8,
  },
});


export default function ProductCard (props) {
  const product = props.current;
  const classes = useStyles();
  const list = 'related';

  // TODO: create some kind of if statement that toggles list between related and outfit

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <StarButton list={list}/>
        <img src="https://i5.walmartimages.com/asr/112eb075-76cb-4e22-9024-8705b28ed68c_1.db544800fcbb66a69ac23cd555ec102f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" width="195" height="195" alt="" />
        <Typography className={classes.category} color="textSecondary" gutterBottom>
          {product.category.toUpperCase()}
        </Typography>
        <Typography className={classes.name} variant="h6" component="h2">
          <b>{product.name}</b>
        </Typography>
        <Typography className={classes.price} color="textSecondary">
          ${product.default_price}
        </Typography>
        <StarRating stars={props.stars} />
      </CardContent>
    </Card>
  );

}

*/