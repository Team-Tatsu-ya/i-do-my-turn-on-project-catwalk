import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';
import range from 'lodash/range';
import dummy from './dummy_data.js';
import Typography from '@material-ui/core/Typography';

export default class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 'related',
      currentProduct: this.props.current,
      productRating: this.props.stars,
      productImage: this.props.image,
      relatedProducts: [],
      activeItemIndex: 0
    };

    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      relatedProducts: [],
      activeItemIndex: 1
    });
    setTimeout(() => {
      this.setState({relatedProducts: [
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} key="related1"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} key="related2"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} key="related3"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} key="related4"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} key="related5"/>,
      ]});
    }, 100);
  }

  // TODO: use this method to pull in data from related products and map each product to a product card in carousel

  // createCards(n) {
  //   range(n).map((i) => {
  //     (<div key={i} style={{ height: 200, background: '#EBEBEB' }}>
  //       {i}
  //     </div>);
  //   });
  // }

  changeActiveItem(activeItemIndex) {
    this.setState({activeItemIndex: activeItemIndex});
  }

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    const carouselStyle = {
      // TODO: fix carousel so width is fixed and cards don't overlap on window resize
    };

    return (
      <div>
        <Typography color="textSecondary" style={headerStyle} key="related-header" gutterBottom>
          RELATED PRODUCTS
        </Typography>
        <br></br>
        <ItemsCarousel
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

          style={carouselStyle}
        >
          {this.state.relatedProducts}
        </ItemsCarousel>
        <br></br>
      </div>
    );
  }
}