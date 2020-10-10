import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { positions } from "@material-ui/system";
import Carousel from "react-bootstrap/Carousel";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container direction="column" spacing={0}>
          <Grid item xs={12}>
            <Carousel id="carousel">
              {this.props.currentStyles.map((style) => {
                return (
                  style.photos.map((photo) => {
                    return (
                      <Carousel.Item>
                        <img
                          src={photo.url}
                          className="mainphoto"
                          alt="photo of style"
                        ></img>
                      </Carousel.Item>
                    );
                  })
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Gallery;
