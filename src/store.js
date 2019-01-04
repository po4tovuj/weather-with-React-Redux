import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const enchancer = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(reducers, enchancer);

export default store;
