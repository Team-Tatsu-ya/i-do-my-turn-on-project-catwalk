import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';
import range from 'lodash/range';
import dummy from './dummy_data.js';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

export default class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 'related',
      current: this.props.current,
      outfit: this.props.outfit,
      relatedProducts: [],
      relatedProductInfo: {},
      relatedProductCards: [],
      activeItemIndex: 0
    };

    this.changeActiveItem = this.changeActiveItem.bind(this);
    this.createCards = this.createCards.bind(this);
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts(this.state.current[0].id);
    // this.setState({
    //   relatedProducts: [],
    //   activeItemIndex: 1
    // }, () => {
    //   // TODO: remove and replace with createCards() when API setup is complete
    //   this.displayDummy();
    //   // console.log('State in RelatedList: ', this.state);
    // });

  }

  // displayDummy() {
  //   setTimeout(() => {
  //     this.setState({relatedProductCards: [
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="related1"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="related2"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="related3"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="related4"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="related5"
  //       />
  //     ]});
  //   }, 100);
  // }


  // TODO: request list of related products from API & add to state at relatedProducts
  getRelatedProducts(id) {
    console.log('current in relatedProducts:', this.state.current);
    Axios.get(`http://18.224.37.110/products/${id}/related`)
      .then(res => {
        this.setState({relatedProducts: res.data});
        console.log('getRelatedProducts successful!', this.state.relatedProducts);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // TODO: make 3 API requests for each related product ID (product info, product style and review metadata), save each object in an array in relatedProductInfo at the key of its product ID

  // requestProductInfo() {
  //   var relatedObject = {};

  //   for (var i = 0; i < this.state.relatedProducts.length; i++) {
  //     var id = this.state.relatedProducts[i];
  //     var productArray = [];
  //     // this.props.getProduct(id);
  //     // push response object to productArray
  //     // this.props.getStyle(id);
  //     // push response.results[0].photos to productArray
  //     // this.props.getRating(id);
  //     // this.props.calculateRating(response.ratings)
  //     // push rating to productArray

  //     relatedObject[id] = productArray;
  //   }

  //   this.setState({relatedProductInfo: relatedObject});
  // }


  // TODO: use this method to map each related product to a product card in carousel

  createCards() {
    var newCards = [];

    if (this.state.outfit.length > 0) {
      for (var id in this.state.relatedProductInfo) {
        newCards.push(
          <ProductCard
            current={this.state.current}
            selected={this.state.relatedProductInfo[id]}
            outfit={this.state.outfit}
            add={this.props.add}
            remove={this.props.remove}
            list={this.state.list}
            key={'related' + id}
          />
        );
      }

      this.setState({relatedProductCards: newCards});
    }
  }

  changeActiveItem(activeItemIndex) {
    this.setState({activeItemIndex: activeItemIndex});
  }

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    if (Object.keys(this.state.current).length > 0) {
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
            {this.state.relatedProductCards}
          </ItemsCarousel>
          <br></br>
        </div>
      );
    } else {
      return null;
    }
  }
}