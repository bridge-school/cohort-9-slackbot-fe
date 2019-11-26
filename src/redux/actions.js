export const CREATE_NEW_POLL = "CREATE_NEW_POLL";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";
export const UPDATE_CHANNEL = "UPDATE_CHANNEL";

export const createNewPoll = newPoll => ({
  type: CREATE_NEW_POLL,
  data: newPoll
});
