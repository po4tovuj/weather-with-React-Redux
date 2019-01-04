import React, { Component } from "react";
import SelectorsContainer from "../../containers/SelectorsContainer";
import WeatherFormContainer from "../../containers/WeatherFormContainer";
import "./style.sass";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <SelectorsContainer />
        <WeatherFormContainer />
      </main>
    );
  }
}

export default Main;
