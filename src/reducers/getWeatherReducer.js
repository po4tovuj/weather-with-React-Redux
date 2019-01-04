import * as types from "../actions/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
  name: "",
  weatherCondition: "",
  wind: NaN,
  temp: NaN,
  pressure: NaN,
  humidity: NaN,
  date: null
};

function getWeatherReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_WEATHER_SUCCESS:
      return payload;
    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.GET_WEATHER_SUCCESS:
      return null;
    case types.GET_WEATHER_FAIL:
      return payload;
    default:
      return state;
  }
}
export default combineReducers({
  data: getWeatherReducer,
  error: errorReducer
});
