import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherDay from "./weatherDay.js";

class Weather extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <tbody>
          <tr key={this.props.key}>
            {/* <th>Date: {this.props.date}</th>
                    <th>description: {this.props.description}</th> */}
            <WeatherDay
              date={this.props.date}
              description={this.props.description}
            />
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Weather;
