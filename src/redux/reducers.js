// import { combineReducers } from "redux";
import { CREATE_NEW_POLL } from "./actions.js";

// export default combineReducers({
//   player
// });

const initialState = {
  question: "Type your question here...",
  responses: ['a','b','c'],
  channel: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POLL:
      return {
        ...state,
        question: action.question,
        responses: action.responses,
        channel: action.channel
      };
    case "UPDATE_QUESTION":
      return {
        ...state,
        question: action.data
      };
    case "UPDATE_ANSWERS":
      return {
        ...state,
        responses: action.data
      };
    case "UPDATE_CHANNEL":
      return {
        ...state,
        channel: action.data
      };
    default:
      return state;
  }
};

export default reducer;
