import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theObjectOfTheCity: {},
      iputForCitySearch: "",
      showData: false,
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      iputForCitySearch: e.target.search.value,
    });

    let requestURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.iputForCitySearch}&format=json`;

    let retrivedURL = await axios.get(requestURL);

    this.setState({
      theObjectOfTheCity: retrivedURL.data[0],
      showData: true,
    });
  };

  render() {
    return (
      <div className="main">
        <>
          <h1>City Explorer</h1>
          <Form onSubmit={this.getLocation}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="search"
                placeholder="Enter Location"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>

          {this.state.showData && (
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.theObjectOfTheCity.lat},${this.state.theObjectOfTheCity.lon}&zoom=11.5`}
              rounded
            />
          )}
<div className="pCon">
          {this.state.showData && (
            <p>
              {this.state.iputForCitySearch} &nbsp; &nbsp; Lat:
              {this.state.theObjectOfTheCity.lat} &nbsp;  &nbsp; Lon:
              {this.state.theObjectOfTheCity.lon}{" "}
            </p>
          )}
          </div>
        </>
      </div>
    );
  }
}

export default App;
