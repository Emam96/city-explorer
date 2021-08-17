import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./App.css";
import Weather from "./components/weather";
import Movie from "./components/movie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theObjectOfTheCity: {},
      theObjectOfTheWeather: [],
      theObjectOfTheMovie: [],
      iputForCitySearch: "",
      showData: false,
      showPic: false,
      Alert: "",
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      iputForCitySearch: e.target.search.value,
    });

    let requestURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.iputForCitySearch}&format=json`;

    let requestURL2 = `${process.env.REACT_APP_SERVER_LINK}/forecast?searchQuery=${this.state.iputForCitySearch}`;

    let requestURL3 = `${process.env.REACT_APP_SERVER_LINK}/movie?searchQuery=${this.state.iputForCitySearch}`;

    let retrivedURL = await axios.get(requestURL);

    let retrivedURL2 = await axios.get(requestURL2);

    let retrivedURL3 = await axios.get(requestURL3);
    

    console.dir(retrivedURL3.data);

    this.setState({
      theObjectOfTheWeather: retrivedURL2.data,
      theObjectOfTheMovie: retrivedURL3.data,
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
            <Form.Select name="search" aria-label="Default select example">
              <option value="Paris">Paris</option>
              <option value="Amman">Amman</option>
              <option value="Seattle">Seattle</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
          {/* /////////////////////////////////////////////////////////////////// */}
          <div className="imgto">
            
            <div className="tab2">
              <Carousel>
                {this.state.showData &&
                  this.state.theObjectOfTheMovie.map((item, i) => {
                    return (
                      <Carousel.Item>
                        <Movie
                          key={i}
                          title={item.title}
                          poster={item.poster}
                        />
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
              </div>


              <div className="pCon">
              {this.state.showData && (
                <Image
                  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.theObjectOfTheCity.lat},${this.state.theObjectOfTheCity.lon}&zoom=11.5`}
                  rounded
                />
              )}
                {this.state.showData && (
                  <p>
                    {this.state.iputForCitySearch} &nbsp; &nbsp; Lat:
                    {this.state.theObjectOfTheCity.lat} &nbsp; &nbsp; Lon:
                    {this.state.theObjectOfTheCity.lon}{" "}
                  </p>
                )}
              </div>
           
          </div>

          <div className="tab">
            {this.state.showData &&
              this.state.theObjectOfTheWeather.map((item, i) => {
                return (
                  <Weather
                    key={i}
                    date={item.date}
                    description={item.description}
                  />
                );
              })}
          </div>
        </>
      </div>
    );
  }
}

export default App;
