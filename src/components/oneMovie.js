import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleMovie extends React.Component {
   
      

  render() {
    return (
        
      <>
        <img
          className="d-block w-100"
          src={this.props.poster}
          alt={this.props.title}
        />
        <Carousel.Caption>
          <h3 style={{color:"skyblue"}}>{this.props.title}</h3>
        </Carousel.Caption>
      </>
      
    );
  }
}

export default SingleMovie;