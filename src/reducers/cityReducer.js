import * as types from "../actions/ActionTypes";

export default function cityReducer(state = "London", { type, payload }) {
  switch (type) {
    case types.CITY_CHANGE:
      return payload;
    default:
      return state;
  }
}
