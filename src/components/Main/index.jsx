import React, { Component } from "react";
import SelectorsContainer from "../SeletorsContainer";
import { connect } from "react-redux";

class MainContainer extends Component {
  state = {
    currentCity: "London",
    currentMetric: { name: "Celsius", units: "metric" },
    cities: [
      { value: "London", label: "London" },
      { value: "Stockholm", label: "Stockholm" },
      { value: "Kyiv", label: "Kyiv" }
    ],
    metrics: [
      { label: "Celsius", value: "metric" },
      { label: "Kelvin", value: "" },
      { label: "Fahrenheit", value: "imperial" }
    ]
  };

  render() {
    const { cities, metrics } = this.state;

    return (
      <div>
        {this.props.city}
        <SelectorsContainer
          cities={cities}
          metrics={metrics}
          handleOnChangeCity={this.props.chooseCity}
          handleOnChangeMetric={this.props.chooseMetric}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  city: state.currentCity,
  metric: state.currentMetric
});
const mapDispatchToProps = dispatch => ({
  chooseCity(city) {
    dispatch({
      type: "CHOOSE_CITY",
      payload: city.value
    });
  },
  chooseMetric(metric) {
    dispatch({
      type: "CHOOSE_METRIC",
      payload: metric.value
    });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
