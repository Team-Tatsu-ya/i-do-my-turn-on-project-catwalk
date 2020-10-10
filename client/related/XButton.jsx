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

  removeProduct() {
    this.props.remove(this.state.selected.id);
    // Need to figure out how to re-render outfit list after removing product
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


