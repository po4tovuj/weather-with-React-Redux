const initialState = {
  currentCity: {
    name: "London"
  },
  currentMetric: "metric"
};
export default function weatherParamsReducer(state = initialState, action) {
  switch (action.type) {
    case "CHOOSE_CITY":
      return (state.currentCity.name = action.payload);
    case "CHOOSE_METRIC":
      return (state.currentMetric = action.payload);
    default:
      return state;
  }
}
