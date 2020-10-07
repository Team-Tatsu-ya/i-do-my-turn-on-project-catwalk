import React from 'react';
import XButton from './XButton.jsx';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export default class AddToOutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
      outfit: this.props.outfit
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    this.props.add();
    console.log('Outfit after adding: ', this.state.outfit);
  }

  render() {
    const outfitCardStyle = {
      minWidth: 200,
      maxWidth: 200,
      minHeight: 300,
      maxHeight: 315,
      backgroundColor: '#EBEBEB'
    };

    const addContentStyle = {
      verticalAlign: 'middle',
      padding: 35,
    };

    const addHeaderStyle = {
      fontSize: 18,
      fontColor: '#525252',
      textAlign: 'center',
    };

    const buttonStyle = {
      position: 'relative',
      left: '20%',
      fontSize: 50
    };

    if (this.state.current.length > 0) {
      return (
        <Card className="productCard" variant="outlined" style={outfitCardStyle}>
          <CardContent>
            <div id="add-to-outfit" style={addContentStyle}>
              <Typography className="productCardName" variant="h6" component="h2" style={addHeaderStyle}>
                <b>ADD TO OUTFIT</b>
              </Typography>
              <div>
                <IconButton onClick={this.addProduct}>
                  <AddIcon style={buttonStyle}/>
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  }
}