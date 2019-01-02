import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import metricReducer from "./metricReducer";
// import weatherParamsReducer from "./weatherParamsReducer";
export default combineReducers({
  currentCity: cityReducer,
  currentMetric: metricReducer
  // params: weatherParamsReducer
});
