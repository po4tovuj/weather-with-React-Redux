import { connect } from "react-redux";
import SelectorsList from "../components/SeletorsList";
import * as actions from "../actions";

const mSTP = state => ({
  currentCity: state.currentCity,
  cities: state.cities,
  // metrics: state.metrics,
  metric: state.currentMetric
});
const mDTP = dispatch => ({
  onCityChange(city) {
    dispatch(actions.cityChange(city));
  },
  onMetricChange(metric) {
    dispatch(actions.metricChange(metric));
  }
});

export default connect(
  mSTP,
  mDTP
)(SelectorsList);
