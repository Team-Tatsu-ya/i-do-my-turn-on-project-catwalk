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
      current: this.props.current,
      selected: this.props.selected,
      outfit: this.props.outfit,
      // remove: this.props.remove
    };

    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(product) {
    // TODO: add onClick functionality that removes product from outfit

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


