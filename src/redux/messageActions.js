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
  return request("new-poll", 'POST', getState().message)
    .then(() => {
      console.log('data has been sent to back end')
    })
    .catch(error => {
      console.log(error);
    })
};