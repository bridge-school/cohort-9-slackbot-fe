export const CREATE_NEW_POLL = "CREATE_NEW_POLL";

export const createNewPoll = newPoll => ({
  type: CREATE_NEW_POLL,
  data: newPoll
});
