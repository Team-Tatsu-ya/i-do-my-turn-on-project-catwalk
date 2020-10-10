import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { positions } from "@material-ui/system";
// import FullscreenIcon from "@material-ui/icons/Fullscreen";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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
            <Carousel>
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
          {/* <Grid item xs={12}>
            <img src={this.props.currentPicUrl} id="mainphoto" />
          </Grid>
          <Grid
            item
            xs={2}
            zindex={1000}
            className="scrollable block"
            container
            direction="column"
            justify="flex-start"
            alignItems="baseline"
          >
            <IconButton>
              <FullscreenIcon id="fs"/>
            </IconButton>
            {this.props.thumbnails.map((thumb) => {
              return (
                <img src={thumb} id="tiny" />
              );
            })}
          </Grid>
          <Grid
            item
            xs={4}
            zindex={1000}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="block"
            id="arrows"
          >
            <IconButton>
              <ArrowBackIcon onClick={this.props.handleLeftArrowClick} />
            </IconButton>
            <IconButton>
              <ArrowForwardIcon onClick={this.props.handleRightArrowClick} />
            </IconButton>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Gallery;
