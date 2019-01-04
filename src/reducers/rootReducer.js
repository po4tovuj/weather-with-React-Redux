import { combineReducers } from "redux";
import getWeatherReducer from "./getWeatherReducer";
import metricReducer from "./metricReducer";
import cityReducer from "./cityReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  currentCity: cityReducer,
  weather: getWeatherReducer,
  currentMetric: metricReducer,
  isLoading: loaderReducer
});
