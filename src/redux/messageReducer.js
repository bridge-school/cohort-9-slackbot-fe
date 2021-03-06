import { message } from "./messageActions";

const INITIAL_MESSAGE_STATE = {
  question: "",
  responses: ["", ""],
  channel: "Select a channel",
  channelID: "",
  channelSize: 0
};

export const messageReducer = (state = INITIAL_MESSAGE_STATE, action) => {
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
