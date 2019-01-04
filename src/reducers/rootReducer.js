import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";
import metricReducer from "./metricReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  currentCity: cityReducer,
  weather: getWeatherReducer,
  currentMetric: metricReducer
});
