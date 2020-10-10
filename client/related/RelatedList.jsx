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
      apiUrl: 'http://3.137.191.193',
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
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRating = this.getRating.bind(this);
    this.requestProductInfo = this.requestProductInfo.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
  }

  componentDidMount() {
    this.changeActiveItem(1);
    this.getRelatedProducts(this.state.current.id);
  }

  getRelatedProducts(id) {
    Axios.get(`${this.state.apiUrl}/products/${id}/related`)
      .then(res => {
        this.setState({relatedProducts: res.data});
        this.requestProductInfo(id);
      })
      .catch(err => {
        console.error(err);
        // err.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getProduct(id) {
    Axios.get(`${this.state.apiUrl}/products/${id}`)
      .then(res => {
        var newInfo = {};
        Object.assign(newInfo, this.state.relatedProductInfo);
        newInfo[id] = {};
        newInfo[id].id = id;
        newInfo[id].info = res.data;
        this.setState({relatedProductInfo: newInfo});
        this.getStyles(id);
      })
      .catch(err => {
        console.error(err);
        // err.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getStyles(id) {
    Axios.get(`${this.state.apiUrl}/products/${id}/styles`)
      .then(res => {
        var newInfo = {};
        Object.assign(newInfo, this.state.relatedProductInfo);
        newInfo[id].photos = res.data.results[0];
        this.setState({relatedProductInfo: newInfo});
        this.getRating(id);
      })
      .catch(err => {
        console.error(err);
        // err.sendStatus(400);   <--- we need something to end the promise
      });
  }

  getRating(id) {
    Axios.get(`${this.state.apiUrl}/reviews/meta/?product_id=${id}`)
      .then(res => {
        var ratingData = {};
        var newInfo = {};
        Object.assign(newInfo, this.state.relatedProductInfo);
        ratingData = res.data.ratings;

        var avgRating = 0;
        var total = 0;
        for (var rating in ratingData) {
          avgRating += ratingData[rating] * rating;
          total += ratingData[rating];
        }

        avgRating = Math.floor((avgRating / total) * 10) / 10;
        newInfo[id].rating = avgRating;

        this.setState({relatedProductInfo: newInfo});
        this.createCards();
      })
      .catch(err => {
        console.error(err);
        // err.sendStatus(400);   <--- we need something to end the promise
      });
  }

  requestProductInfo() {
    for (var i = 0; i < this.state.relatedProducts.length; i++) {
      var id = this.state.relatedProducts[i];
      this.getProduct(id);
    }
  }

  changeProduct(value) {
    this.props.change(value);
  }

  createCards() {
    var newCards = [];

    if (Object.keys(this.state.relatedProductInfo).length > 0) {
      for (var id in this.state.relatedProductInfo) {
        newCards.push((
          <ProductCard
            current={this.state.current}
            selected={this.state.relatedProductInfo[id]}
            outfit={this.state.outfit}
            add={this.props.add}
            remove={this.props.remove}
            change={this.props.change}
            value={parseInt(id)}
            // onClick={this.changeProduct}
            list={'related'}
            key={'related' + id}
          />
        ));
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
            key={this.state.current.id}
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