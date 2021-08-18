import React from "react";
// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import OneMovie from "./oneMovie";

class Movie extends React.Component {
  render() {
    return (
      <>
        {/* <img
          className="d-block w-100"
          src={this.props.poster}
          alt={this.props.title}
        />
        <Carousel.Caption>
          <h3 style={{color:"skyblue"}}>{this.props.title}</h3>
        </Carousel.Caption> */}

        <OneMovie  title={this.props.title} poster={this.props.poster} />
      </>
    );
  }
}

export default Movie;
