import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StyleSelect = (props) => (
  <div>
    {console.log(props)}
    <div id="price">$ {props.currentProduct.default_price}</div>
    <div id="styletext">
      <strong>style: </strong> {props.currentStyle.name}
    </div>
    <div id="styleBubbles">
      <Grid container direction="row" spacing={1}>
        {props.currentStyles.map((style) => {
          return (
            <div
              className="style bubble"
              onClick={() => {
                props.handleStyleChange(style);
              }}
            >
              <Grid item xs={2}>
                <img
                  src={style.photos[0].thumbnail_url}
                  className="styleBubble"
                  title={style.name}
                  id="bordered"
                ></img>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
    <Grid container direction="row" spacing={1}>
      <Grid item xs={8}>
        <div className="dropdown" className="selectsize">
          <select className="selectsize" onChange={props.handleSizeChange}>
            <option value="select size" className="selectsize">
              select size
            </option>
            {Object.keys(props.currentStyle.skus).map((sku) => {
              return (
                <option
                  value={sku}
                  className="selectsize"
                >
                  {props.currentStyle.skus[sku].size}
                </option>
              );
            })}
          </select>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="dropdown">
          <select className="selectqty">
            {props.quantities.map((num) => {
              if (props.currentStyle.skus[props.currentSku] !== undefined) {
                if (num <= props.currentStyle.skus[props.currentSku].quantity) {
                  return <option value={num}>{num}</option>;
                } else {
                  return;
                }
              } else {
                return <option value={num}>{num}</option>;
              }
            })}
          </select>
        </div>
      </Grid>
    </Grid>
    <div id="addto">
      <Button variant="outlined" endIcon={<AddIcon />} id="addbag">
        add to bag
      </Button>
      <IconButton>
        <StarBorderIcon className="squared" id="staricon" />
      </IconButton>
    </div>
  </div>
);

export default StyleSelect;
