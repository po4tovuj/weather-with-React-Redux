import * as types from "../actions/ActionTypes";

export default function loaderReducer(state = false, { type }) {
  switch (type) {
    case types.GET_WEATHER_START:
      return true;
    case types.GET_WEATHER_SUCCESS:
      return false;
    case types.GET_WEATHER_FAIL:
      return true;
    default:
      return state;
  }
}
