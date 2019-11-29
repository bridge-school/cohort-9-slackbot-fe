import { channel } from "./channelActions";

const INITIAL_CHANNEL_STATE = {
  channels: [],
  isLoading: true
};

const channelReducer = (state = INITIAL_CHANNEL_STATE, action) => {
  switch (action.type) {
    case channel.SET_IS_CHANNELS_LOADING:
      return { ...state, isLoading: action.data };
    case channel.SET_CHANNELS_LIST:
      return { ...state, channels: action.data };
    default:
      return state;
  }
};

export default channelReducer;
