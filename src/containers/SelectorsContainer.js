import { connect } from "react-redux";
import SelectorsList from "../components/SeletorsList";
import * as actions from "../actions";

const mDTP = dispatch => ({
  onCityChange(city) {
    dispatch(actions.cityChange(city));
  },
  onMetricChange(metric) {
    dispatch(actions.metricChange(metric));
  }
});

export default connect(
  null,
  mDTP
)(SelectorsList);
