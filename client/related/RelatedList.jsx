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
      relatedProductInfo: {},
      relatedProductCards: [],
      activeItemIndex: 0
    };

    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      relatedProducts: [],
      activeItemIndex: 1
    });
    this.displayDummy();
  }

  displayDummy() {
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


  // TODO: request list of related products from API & add to state at relatedProducts


  // TODO: make 3 API requests for each related product ID (product info, product style and review metadata), save each object in an array in relatedProductInfo at the key of its product ID

  // requestProductInfo() {
  //   for (var i = 0; i < this.state.relatedProducts.length; i++) {
  //     var productArray = [];
  //     // request product info from API and push to productArray
  //     // request product style from API and push to productArray
  //     // request review metadata from API and push to productArray

  //     var newObject = {};
  //     Object.assign(newObject, this.state.relatedProductInfo);
  //     newObject[this.state.relatedProducts[i]] = productArray;
  //     this.setState({relatedProductInfo: newObject})
  //   }
  // }


  // TODO: use this method to map each related product to a product card in carousel

  // createCards() {
  //   var newCards = [];

  //   Object.keys(this.state.relatedProductInfo).map((id) => {
  //     var ratingObject = this.state.relatedProductInfo[id][2].ratings;
  //     var rating = ratingObject[1] + ratingObject[2] * 2 + ratingObject[3] * 3 + ratingObject[4] * 4 + ratingObject[5] * 5;
  //     newCards.push(
  //       <ProductCard
  //         current={this.state.currentProduct}
  //         selected={this.state.relatedProductInfo[id]}
  //         stars={rating}
  //         image={this.state.relatedProductInfo[id][1].results[0].photos[0].thumbnail_url}
  //         list={this.state.list}
  //         key={'related' + id}
  //       />);
  //   });

  //   this.setState({relatedProductCards: newCards});
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
        >
          {this.state.relatedProducts}
        </ItemsCarousel>
        <br></br>
      </div>
    );
  }
}