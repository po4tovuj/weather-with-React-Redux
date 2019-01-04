import * as types from "../actions/ActionTypes";

export default function metricsReducer(state = "metric", { type, payload }) {
  switch (type) {
    case types.METRIC_CHANGE:
      return payload;
    default:
      return state;
  }
}
