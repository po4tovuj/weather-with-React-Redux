export default function metricsReducer(state = "metric", action) {
  console.log(action);
  switch (action.type) {
    case "CHOOSE_METRIC":
      return (state = action.payload);
    default:
      return state;
  }
}
