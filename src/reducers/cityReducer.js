export default function cityReducer(state = "London", action) {
  switch (action.type) {
    case "CHOOSE_CITY":
      return (state = action.payload);
    default:
      return state;
  }
}
