import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import range from 'lodash/range';
import dummy from './dummy_data.js';
import Typography from '@material-ui/core/Typography';

export default class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 'outfit',
      customer: 0,
      outfitProducts: this.props.outfit,
      currentProduct: this.props.current,
      productRating: this.props.stars,
      productImage: this.props.image,
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
      this.setState({outfitProducts: [
        <AddToOutfitCard current={this.state.currentProduct} outfit={this.state.outfitProducts} list={this.state.list} key="add-to-outfit"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} outfit={this.state.outfitProducts} key="outfit1"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} outfit={this.state.outfitProducts} key="outfit2"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} outfit={this.state.outfitProducts} key="outfit3"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} outfit={this.state.outfitProducts} key="outfit4"/>,
        <ProductCard current={this.state.currentProduct} stars={this.state.productRating} image={this.state.productImage} list={this.state.list} outfit={this.state.outfitProducts} key="outfit5"/>,
      ]});
    }, 100);
  }

  // TODO: use this method to pull in customer's unique outfit data and map each product to a product card in carousel

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

    return (
      <div>
        <Typography color="textSecondary" style={headerStyle} key="outfit-header" gutterBottom>
          YOUR OUTFIT
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
        >
          {this.state.outfitProducts}
        </ItemsCarousel>
        <br></br>
      </div>
    );
  }
}