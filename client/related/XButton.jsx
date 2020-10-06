import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
  xButton: {
    edge: -10
  }
});

export default class XButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      outfit: this.props.outfit,
    };

    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(product) {
    var outfit = this.state.outfit;
    for (var i = 0; i < outfit.length; i++) {
      if (outfit[i] === this.state.selected) {
        var newOutfit = outfit.slice();
        outfit.splice(i, 1);
        this.setState({outfit: newOutfit});
      }
    }
    console.log('Outfit after removing: ', outfit);
  }

  render() {
    const buttonStyle = {
      edge: -10
    };

    return (
      <div>
        <HighlightOffIcon style={buttonStyle} size="small" onClick={this.removeProduct}/>
      </div>
    );
  }
}


