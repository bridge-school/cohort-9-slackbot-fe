// import { combineReducers } from "redux";
import { CREATE_NEW_POLL } from "./actions.js";

// export default combineReducers({
//   player
// });

const initialState = {
  question: "",
  responses: [],
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
    default:
      return state;
  }
};

export default reducer;
