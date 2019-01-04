import { connect } from "react-redux";
import WeatherForm from "../components/WeatherForm";
import * as actions from "../actions";

const mSTP = state => ({
  weather: state.weather,
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
)(WeatherForm);
