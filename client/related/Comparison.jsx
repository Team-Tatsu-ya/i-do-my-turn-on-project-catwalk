import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

export default class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      current: this.props.current,
      selected: this.props.selected
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // TODO: methods for pulling in characteristics data for both products

  handleOpen () {
    this.setState({show: true});
  }

  handleClose () {
    this.setState({show: false});
  }

  // method to make modal close on click outside modal, still working on this
  handleClick (e) {
    if (e.target !== this) {
      this.handleClose();
    }
  }

  // TODO: map over join table of characteristics of both products and create a table row with each characteristic in column 2

  // TODO: make columns 1 and 3 render <CheckIcon/> for true or values associated with each characteristic

  render () {
    const modalStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const paper = {
      position: 'fixed',
      background: '#FFFFFF',
      width: 'auto',
      height: 'auto',
      border: '0.5px solid #808080',
      padding: 15
    };

    const headerStyle = {
      fontSize: 10
    };

    const nameStyle = {
      fontSize: 13
    };

    const characteristicStyle = {
      fontSize: 11,
      alignContent: 'center'
    };

    const checkStyle = {
      alignContent: 'center',
      textAlign: 'center',
      color: '#808080'
    };

    const buttonStyle = {
      position: 'absolute',
      zIndex: 1,
      right: 0,
      paddingRight: 8,
      paddingBottom: 8,
      color: '#DCDCDC',
    };

    const body = (
      <div style={paper}>
        <CancelIcon style={buttonStyle} size="small" onClick={this.props.close}/>
        <Typography color="textSecondary" style={headerStyle} gutterBottom>
          COMPARING
        </Typography>

        <table>
          <thead>
            <tr>
              <th>
                <Typography variant="h6" style={nameStyle} color="textSecondary" component="h2">
                  <b>{this.state.current.name}</b>
                </Typography>
              </th>
              <th></th>
              <th>
                <Typography variant="h6" component="h2" color="textSecondary" style={nameStyle}>
                  <b>{this.state.current.name}</b>
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CheckIcon style={checkStyle} /></td>
              <td>
                <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
                  Characteristic 1
                </Typography>
              </td>
              <td><CheckIcon style={checkStyle} /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
                  Characteristic 2
                </Typography>
              </td>
              <td><CheckIcon style={checkStyle} /></td>
            </tr>
            <tr>
              <td><CheckIcon style={checkStyle} /></td>
              <td>
                <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
                  Characteristic 3
                </Typography>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    if (this.props.show === true) {
      return (
        <div>
          <Modal
            open={true}
            onClose={this.handleClose}
            onClick={this.handleClick}
            style={modalStyle}>
            {body}
          </Modal>
        </div>
      );
    } else if (this.props.show === false) {
      return (null);
    }
  }
}