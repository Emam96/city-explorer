import React from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleMovie extends React.Component {
  render() {
    return (
      <>
        <Card.Img
          variant="top"
          src={this.props.poster}
          alt={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </>
    );
  }
}

export default SingleMovie;
