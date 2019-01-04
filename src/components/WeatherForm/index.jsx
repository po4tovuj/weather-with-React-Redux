import React, { Component } from "react";
import PropTypes from "prop-types";
import withLoader from "../../HOC/withLoader";

import "./style.sass";

class WeatherForm extends Component {
  parseDate = date => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  componentDidUpdate(prevProps) {
    const { city, metric, getWeather } = this.props;
    if (city !== prevProps.city || metric !== prevProps.metric) {
      getWeather(city, metric);
    }
  }
  render() {
    const {
      name,
      weatherCondition,
      wind,
      temp,
      pressure,
      humidity,
      date
    } = this.props.weather.data;
    console.log(this.props);
    return (
      <div className="weather">
        <h2 className="weather__header">{name}</h2>
        <div className="weather-info">
          <div className="weather-info__description">
            <strong>Today is: </strong>
            {this.parseDate(date)}
          </div>
          <div className="weather-info__description">
            <strong>Now in {name}: </strong>
            {weatherCondition}
          </div>
          <div className="weather-info__description">
            <strong>Temperature is: </strong>
            {temp}
          </div>
          <div className="weather-info__description">
            <strong>Pressure is: </strong>
            {pressure}
          </div>

          <div className="weather-info__description">
            <strong>Humidity is: </strong>
            {humidity}
          </div>
          <div className="weather-info__description">
            <strong>Wind speed is: </strong>
            {wind}
          </div>
        </div>
      </div>
    );
  }
}

WeatherForm.defaultProps = {
  weather: {
    data: {
      name: "",
      weatherCondition: "",
      wind: NaN,
      temp: NaN,
      pressure: NaN,
      humidity: NaN,
      date: null
    },
    error: null,
    isLoading: false
  }
};

WeatherForm.propTypes = {
  city: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      weatherCondition: PropTypes.string.isRequired,
      wind: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      date: PropTypes.shape({})
    }),
    isLoading: PropTypes.bool,
    error: PropTypes.shape({})
  })

  // }).isRequired
};

export default withLoader(WeatherForm);
