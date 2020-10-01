import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

// Instructions for creating modal window: https://material-ui.com/components/modal/

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
  }

  // TODO: methods for pulling in characteristics data for both products

  handleOpen () {
    this.setState({show: true});
  }

  handleClose () {
    this.setState({show: false});
    console.log('modal show in state after click: ', this.state.show);
  }

  render () {
    const modalStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      width: 500,
      background: '#FFFFFF',
      // border: '1px solid #808080',
      // transition: 'easeOut',
      // transform: 'scale(1)',
      visibility: 'visible'
    };

    const paper = {
      position: 'fixed',
      background: '#FFFFFF',
      width: 'auto',
      height: 'auto',
      border: '0.5px solid #808080',
      top: '50%',
      left: '50%',
      padding: 15
      // transform: translate(-50%, -50%)
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
      // edge: -10
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
                  {/* need to align left */}
                  <b>Current Product Name</b>
                </Typography>
              </th>
              <th></th>
              <th>
                <Typography variant="h6" component="h2" color="textSecondary" style={nameStyle}>
                  <b>Selected Product Name</b>
                </Typography>
              </th>
            </tr>
          </thead>
          {/* need to map over join table of characteristics of both products and create a table row with each characteristic in column 2 */}
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
            {/* columns 1 and 3 will note characteristics for each product (true will render <CheckIcon/> and values will display) */}
          </tbody>
        </table>
      </div>
    );

    if (this.props.show === true) {
      return (
        <div style={modalStyle}>
          <Modal
            show={this.state.show}
            open={this.handleOpen}
            onClose={this.handleClose}>
            {body}
          </Modal>
        </div>
      );
    } else if (this.props.show === false) {
      return (null);
    }
  }
}