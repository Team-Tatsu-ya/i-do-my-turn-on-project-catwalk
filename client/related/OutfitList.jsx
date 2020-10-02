import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';
import range from 'lodash/range';
import dummy from './dummy_data.js';
import Typography from '@material-ui/core/Typography';

export default class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'outfit',
      customer: 0,
      outfitProducts: this.props.outfit,
      currentProduct: this.props.current,
      productRating: this.props.stars,
      productImage: this.props.image,
      activeItemIndex: 0
    };
  }

  componentDidMount() {
    this.setState({
      relatedProducts: [],
      activeItemIndex: 1
    });
    setTimeout(() => {
      this.setState({outfitProducts: [
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="outfit1"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="outfit2"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="outfit3"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="outfit4"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="outfit5"/>,
      ]});
    }, 100);
  }

  // TODO: methods to pull in customer's unique outfit data

  changeActiveItem(activeItemIndex) {
    this.setState({activeItemIndex: activeItemIndex});
  }

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    return (
      <div>
        <Typography color="textSecondary" style={headerStyle} key="outfit-header" gutterBottom>
          YOUR OUTFIT
        </Typography>
        <br></br>
        <ItemsCarousel
          // enablePlaceholder
          // numberOfPlaceholderItems={4}
          // minimumPlaceholderTime={1000}
          // placeholderItem={<div style={{height: 400, background: '#EBEBEB'}}>Placeholder</div>}

          numberOfCards={4}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}

          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={this.state.activeItemIndex}
          activePosition={'center'}

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevon={false}
        >
          {this.state.outfitProducts}
        </ItemsCarousel>
        <br></br>
      </div>
    );
  }
}