import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <th>Date: {this.props.date}</th>
        <th>description: {this.props.description}</th>
      </>
    );
  }
}

export default WeatherDay;
