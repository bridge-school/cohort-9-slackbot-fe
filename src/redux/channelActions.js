import { API_BASE_URL } from "../backend-request/index";

export const channel = {
  SET_IS_CHANNELS_LOADING: "SET_IS_CHANNELS_LOADING",
  SET_CHANNELS_LIST: "SET_CHANNELS_LIST"
};

export const setIsChannelsLoading = (isLoading = false) => ({
  type: channel.SET_IS_CHANNELS_LOADING,
  data: isLoading
});
export const setChannelList = (channels = []) => ({
  type: channel.SET_CHANNELS_LIST,
  data: channels
});

// fetch channels thunk 💡
export const fetchChannelsThunk = () => dispatch => {
  dispatch(setIsChannelsLoading(true));
  return fetch(API_BASE_URL + "/channels")
    .then(res => res.json())
    .then(data => {
      dispatch(setChannelList(data));
    })
    .catch(error => {
      console.log("error: ", error);
    });
};
