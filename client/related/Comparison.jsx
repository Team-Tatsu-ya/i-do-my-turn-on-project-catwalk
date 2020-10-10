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
      selected: this.props.selected,
      charObj: {}
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createCharObject = this.createCharObject.bind(this);
  }

  componentDidMount() {
    this.createCharObject();
  }

  handleClose () {
    this.props.close();
  }

  // TODO: method to make modal close on click outside modal, still working on this
  handleClick (e) {
    if (e.target !== this) {
      this.handleClose();
    }
  }

  createCharObject() {
    var newObj = {};

    this.state.current.info.features.map(char => {
      newObj[char.feature] = {current: char.value};
    });

    this.state.selected.info.features.map(char => {
      if (newObj[char.feature] === undefined) {
        newObj[char.feature] = {selected: char.value};
      } else {
        newObj[char.feature].selected = char.value;
      }

    });

    this.setState({charObj: newObj});
  }

  render () {
    const modalStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      alignContent: 'center',
      textAlign: 'center'
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

    const characteristicList = Object.keys(this.state.charObj).map(feature => {
      var currentVal = this.state.charObj[feature].current;
      if (currentVal === true) {
        currentVal = (<CheckIcon/>);
      } else if (currentVal === 'null') {
        currentVal = '';
      } else {
        currentVal = (
          <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
            {this.state.charObj[feature].current}
          </Typography>
        );
      }

      var selectedVal = this.state.charObj[feature].selected;
      if (selectedVal === true) {
        selectedVal = (<CheckIcon/>);
      } else if (selectedVal === 'null') {
        selectedVal = '';
      } else {
        selectedVal = (
          <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
            {this.state.charObj[feature].selected}
          </Typography>
        );
      }

      return (
        <tr key={feature}>
          <td>
            {currentVal}
          </td>
          <td>
            <Typography color="textSecondary" style={characteristicStyle} gutterBottom>
              {feature}
            </Typography>
          </td>
          <td>
            {selectedVal}
          </td>
        </tr>
      );
    });

    const body = (
      <div style={paper}>
        <CancelIcon style={buttonStyle} size="small" onClick={this.props.close}/>
        <Typography color="textSecondary" style={headerStyle} gutterBottom>
          COMPARING
        </Typography>

        <table>
          <thead>
            <tr key="header-row">
              <th>
                <Typography variant="h6" style={nameStyle} color="textSecondary" component="h2">
                  <b>{this.state.current.info.name}</b>
                </Typography>
              </th>
              <th></th>
              <th>
                <Typography variant="h6" component="h2" color="textSecondary" style={nameStyle}>
                  <b>{this.state.selected.info.name}</b>
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {characteristicList}
          </tbody>
        </table>
      </div>
    );

    if (this.props.show === true && Object.keys(this.state.current).length === 4 && Object.keys(this.state.selected).length === 4) {
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