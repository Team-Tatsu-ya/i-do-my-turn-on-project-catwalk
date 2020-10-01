import React from 'react';
// import Grid from '@material-ui/core/Grid';

const StyleSelect = (props) => (
  <div>
    <div id="price">$ {props.currentProduct.default_price}</div>
    <div id="styletext">
      <strong>style: </strong> selected style
    </div>
    <div id="styleBubbles">
      {props.currentStyles.map((style) => {
        return (
          <div className="style bubble">
            <img src={style.photos[0].thumbnail_url}></img>
          </div>
        );
      })}
    </div>
    <div className="dropdown" id="selectsize">
      <select>
        <option value="select size">select size</option>
        {props.sizes.map((sku) => {
          return <option value={sku}>{sku}</option>;
        })}
      </select>
    </div>
    <div className="dropdown" id="selectqty">
      <select>
        {props.quantities.map((num) => {
          return <option value={num}>{num}</option>;
        })}
      </select>
    </div>
    <div id="addto">
      <button>add to bag</button>
      <button>☆</button>
    </div>
  </div>
);

export default StyleSelect;