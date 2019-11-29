import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  message: messageReducer
  // 🔔 TO ADD --> channels: channelsReducer
  // 🔔 TO ADD --> archive: archiveReducer
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
