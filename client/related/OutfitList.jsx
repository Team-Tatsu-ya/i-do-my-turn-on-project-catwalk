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
      current: this.props.current,
      outfit: this.props.outfit,
      outfitProducts: [],
      activeItemIndex: 0
    };

    this.changeActiveItem = this.changeActiveItem.bind(this);
    this.createCards = this.createCards.bind(this);
  }

  componentDidMount() {
    this.changeActiveItem(1);
    this.createCards();
  }

  // displayDummy() {
  //   setTimeout(() => {
  //     this.setState({outfitProducts: [
  //       <AddToOutfitCard
  //         outfit={this.state.outfit}
  //         current={this.state.current}
  //         add={this.props.add}
  //         key="add-to-outfit"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="outfit1"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="outfit2"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="outfit3"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="outfit4"
  //       />,
  //       <ProductCard
  //         current={this.state.current}
  //         selected={this.state.current}
  //         outfit={this.state.outfit}
  //         add={this.props.add}
  //         remove={this.props.remove}
  //         list={this.state.list}
  //         key="outfit5"
  //       />
  //     ]});
  //   }, 0);
  // }

  // TODO: use this method to pull in customer's unique outfit data and map each product to a product card in carousel
  createCards() {
    var productArray = [];
    productArray.push(
      <AddToOutfitCard
        outfit={this.state.outfit}
        current={this.state.current}
        add={this.props.add}
        key="add-to-outfit"
      />
    );

    if (this.state.outfit.length > 0) {
      for (var id in this.state.outfit) {
        productArray.push(
          <ProductCard
            current={this.state.current}
            selected={this.state.outfit[id]}
            outfit={this.state.outfit}
            add={this.props.add}
            remove={this.props.remove}
            list={this.state.list}
            key={'outfit' + id}
          />
        );
      }
    }

    this.setState({outfitProducts: productArray});
  }


  changeActiveItem(activeItemIndex) {
    this.setState({activeItemIndex: activeItemIndex});
  }

  render () {
    const headerStyle = {
      fontSize: 12,
      paddingLeft: 30
    };

    if (this.state.current.length > 1) {
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
    } else {
      return null;
    }
  }
}