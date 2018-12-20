import React, { Component } from "react";
import SelectorsContainer from "../SeletorsContainer";

export default class MainContainer extends Component {
  state = {
    cities: ["London", "Stockholm", "Kyiv"],
    metrics: [
      { name: "Kelvin", units: "" },
      { name: "Celsius", units: "metric" },
      { name: "Fahrenheit", units: "imperial" }
    ]
  };
  render() {
    const { cities, metrics } = this.state;
    return (
      <div>
        HEllo
        <SelectorsContainer cities={cities} metrics={metrics} />
      </div>
    );
  }
}
