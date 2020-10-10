import React from "react";
import Rating from "@material-ui/lab/Rating";

const Heading = (props) => {
  return (
    <div>
      {console.log(props.currentRating)}
      <div id="stars">
        <a href="#reviews">
          <Rating
            name="simple-controlled"
            value={props.currentRating}
            readOnly
            size="small"
            precision={0.25}
          />
          <u><span className="gray">Read all reviews</span></u>
        </a>
      </div>
      <div id="category">{props.currentProduct.category}</div>
      <div id="bigtitle">{props.currentProduct.name}</div>
    </div>
  );
};

export default Heading;
