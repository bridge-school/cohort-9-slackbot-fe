import { createStore, combineReducers } from "redux";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  message: messageReducer
  // channels: channelsReducer
  // archive: archiveReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
