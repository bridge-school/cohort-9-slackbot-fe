import { message } from "./messageActions";

const INITIAL_STATE = {
  question: "",
  responses: ["", ""],
  channel: "Select a channel",
  channelID: "",
  channelSize: ""
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case message.UPDATE_QUESTION:
      return {
        ...state,
        question: action.data
      };
    case message.UPDATE_ANSWERS:
      return {
        ...state,
        responses: action.data
      };
    case message.UPDATE_CHANNEL:
      return {
        ...state,
        channel: action.data
      };
    case message.UPDATE_CHANNEL_ID:
      return {
        ...state,
        channelID: action.data
      };
    case message.UPDATE_CHANNEL_SIZE:
      return {
        ...state,
        channelSize: action.data
      };
    default:
      return state;
  }
};

export default messageReducer;
