export const CREATE_NEW_POLL = "CREATE_NEW_POLL";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";
export const UPDATE_CHANNEL = "UPDATE_CHANNEL";
export const UPDATE_CHANNEL_ID = "UPDATE_CHANNEL_ID";

export const updateQuestion = newQuestion => ({
  type: UPDATE_QUESTION,
  data: newQuestion
});

export const updateResponses = newAnswer => ({
  type: UPDATE_ANSWERS,
  data: newAnswer
});

export const updateChannel = newChannel => ({
  type: UPDATE_CHANNEL,
  data: newChannel
});

export const updateChannelID = newChannelID => ({
  type: UPDATE_CHANNEL_ID,
  data: newChannelID
});
