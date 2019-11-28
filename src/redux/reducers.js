import {
  CREATE_NEW_POLL,
  UPDATE_QUESTION,
  UPDATE_ANSWERS,
  UPDATE_CHANNEL,
  UPDATE_CHANNEL_ID
} from "./actions.js";

const initialState = {
  question: "",
  responses: ["", ""],
  channel: "",
  channelID: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POLL:
      return {
        ...state,
        question: action.question,
        responses: action.responses,
        channel: action.channel,
        channelID: action.channelID
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        question: action.data
      };
    case UPDATE_ANSWERS:
      return {
        ...state,
        responses: action.data
      };
    case UPDATE_CHANNEL:
      return {
        ...state,
        channel: action.data
      };
    case UPDATE_CHANNEL_ID:
      return {
        ...state,
        channelID: action.data
      };
    default:
      return state;
  }
};

export default reducer;
