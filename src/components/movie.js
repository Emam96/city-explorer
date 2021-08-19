import React from "react";
// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import OneMovie from "./oneMovie";

class Movie extends React.Component {
  render() {
    return (
      <>
        <OneMovie title={this.props.title} poster={this.props.poster} />
      </>
    );
  }
}

export default Movie;
