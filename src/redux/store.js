import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import messageReducer from "./messageReducer";
import channelReducer from "./channelReducer";

const rootReducer = combineReducers({
  message: messageReducer,
  channels: channelReducer
  // 🔔 TO ADD --> archive: archiveReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
// const store = createStore(
//   rootReducer,
//   {},
//   compose(
//     applyMiddleware(reduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
