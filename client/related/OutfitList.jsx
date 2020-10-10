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
      current: this.props.current,
      outfit: this.props.outfit,
      outfitProducts: [],
      activeItemIndex: 0,
    };

    this.changeActiveItem = this.changeActiveItem.bind(this);
    this.createCards = this.createCards.bind(this);
  }

  componentDidMount() {
    this.changeActiveItem(1);
    this.createCards();
  }

  createCards() {
    var productArray = [];
    productArray.push((
      <AddToOutfitCard
        outfit={this.props.outfit}
        current={this.state.current}
        add={this.props.add}
        key="add-to-outfit"
      />
    ));

    if (Object.keys(this.state.outfit).length > 0) {
      for (var id in this.state.outfit) {
        if (this.state.outfit[id] !== undefined) {
          productArray.push((
            <ProductCard
              current={this.state.current}
              selected={this.state.outfit[id]}
              outfit={this.props.outfit}
              add={this.props.add}
              remove={this.props.remove}
              change={this.props.change}
              list={'outfit'}
              key={'outfit' + id}
            />
          ));
        }
      }
    }

    this.setState({outfitProducts: productArray});
  }


  changeActiveItem(activeItemIndex) {
    this.setState({activeItemIndex: activeItemIndex});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {outfit: nextProps.outfit};
  }

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    if (this.state.outfitProducts.length >= 1) {
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
            key={Object.keys(this.state.outfit) || 'empty-outfit'}
          >
            {this.state.outfitProducts}
          </ItemsCarousel>
          <br></br>
        </div>
      );
    } else {
      return null;
    }
  }
}