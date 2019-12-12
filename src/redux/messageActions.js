import { API_BASE_URL, request } from "../backend-request/index";

export const message = {
  UPDATE_QUESTION: "UPDATE_QUESTION",
  UPDATE_ANSWERS: "UPDATE_ANSWERS",
  UPDATE_CHANNEL: "UPDATE_CHANNEL",
  UPDATE_CHANNEL_ID: "UPDATE_CHANNEL_ID",
  UPDATE_CHANNEL_SIZE: "UPDATE_CHANNEL_SIZE"
};

export const updateQuestion = newQuestion => ({
  type: message.UPDATE_QUESTION,
  data: newQuestion
});

export const updateResponses = newAnswer => ({
  type: message.UPDATE_ANSWERS,
  data: newAnswer
});

export const updateChannel = newChannel => ({
  type: message.UPDATE_CHANNEL,
  data: newChannel
});

export const updateChannelID = newChannelID => ({
  type: message.UPDATE_CHANNEL_ID,
  data: newChannelID
});

export const updateChannelSize = newChannelSize => ({
  type: message.UPDATE_CHANNEL_SIZE,
  data: newChannelSize
});

// Post Messages to Backend Thunk
export const postMessagesThunk = () => (dispatch, getState) => {
  const originalMessage = getState().message;
  const clonedMessage = { ...originalMessage };

  const currentAnswersCount = clonedMessage.responses.length;

  const makeResponseObj = clonedMessage.responses.reduce((obj, ele) => {
    obj[ele] = [];
    return obj;
  }, {});

  if (currentAnswersCount !== Object.keys(makeResponseObj).length) {
    return Promise.reject(new Error(`Do you have the same answer twice?`));
  }

  clonedMessage.responses = makeResponseObj;

  return request("polls", "POST", clonedMessage).then(() => {
    console.log("data has been sent to back end");
  });
};
