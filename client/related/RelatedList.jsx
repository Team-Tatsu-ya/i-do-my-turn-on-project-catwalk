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
      type: 'related',
      currentProduct: this.props.current,
      productRating: this.props.stars,
      productImage: this.props.image,
      relatedProducts: [],
      // children: [],
      activeItemIndex: 0
    };

    // this.createCards = this.createCards.bind(this);
  }

  componentDidMount() {
    this.setState({
      relatedProducts: [],
      activeItemIndex: 1
    });
    setTimeout(() => {
      this.setState({relatedProducts: [
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="related1"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="related2"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="related3"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="related4"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} key="related5"/>,
      ]});
    }, 100);
  }

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

  // TODO: methods that pull in data from related products

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    return (
      <div>
        <Typography color="textSecondary" style={headerStyle} key="related-header" gutterBottom>
          RELATED PRODUCTS
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
          {this.state.relatedProducts}
        </ItemsCarousel>
        <br></br>
      </div>
    );
  }
}