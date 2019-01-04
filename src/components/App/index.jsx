import React, { Component } from "react";
import Header from "../Header";

import { connect } from "react-redux";
import * as actions from "../../actions";
import Main from "../Main";

class App extends Component {
  componentDidMount() {
    const { getWeather, city, metric } = this.props;

    getWeather(city, metric);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
const mSTP = state => ({
  city: state.currentCity,
  metric: state.currentMetric
});

const mDTP = dispatch => ({
  getWeather(city, metric) {
    dispatch(actions.getWeather(city, metric));
  }
});
export default connect(
  mSTP,
  mDTP
)(App);
