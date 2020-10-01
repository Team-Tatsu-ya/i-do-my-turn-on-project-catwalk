import React from 'react';
import Comparison from './Comparison.jsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
// import { positions } from '@material-ui/system';



export default class StarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      current: this.props.current,
      selected: this.props.selected
    };

    this.showModal = this.showModal.bind(this);
  }


  showModal(e) {
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  // TODO: add onClick functionality that opens comparison modal window
  // onClick={() => { this.showModal(); }} ?

  render() {
    const buttonStyle = {
      edge: -10
    };

    return (
      <div>
        <div>
          <StarBorderRoundedIcon style={buttonStyle} size="small" onClick={this.showModal}/>
        </div>
        <Comparison show={this.state.show} current={this.state.current} selected={this.state.selected} />
      </div>
    );
  }
}

