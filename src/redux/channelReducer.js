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
