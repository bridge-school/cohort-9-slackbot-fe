import {
  setIsChannelsLoading,
  setChannelList,
  channel
} from "../redux/channelActions";

describe("Test of setIsChannelsLoading", () => {
  it("returns a data payload with a data = true", () => {
    const SUCCESS = {
      type: channel.SET_IS_CHANNELS_LOADING,
      data: true
    };
    expect(setIsChannelsLoading(true)).toEqual(SUCCESS);
  });
  it("Empty argument returns a data payload that is false", () => {
    const SUCCESS = {
      type: channel.SET_IS_CHANNELS_LOADING,
      data: false
    };
    expect(setIsChannelsLoading()).toEqual(SUCCESS);
  });
  it("argument is returned in data payload ", () => {
    const SUCCESS = {
      type: channel.SET_IS_CHANNELS_LOADING,
      data: "hello"
    };
    expect(setIsChannelsLoading("hello")).toEqual(SUCCESS);
  });
});

describe("Test of setChannelList", () => {
  it("returns a data payload equal to the data array", () => {
    const data = ["channel1", "channel2", "channel3"];
    const SUCCESS = {
      type: channel.SET_CHANNELS_LIST,
      data
    };
    expect(setChannelList(data)).toEqual(SUCCESS);
  });
});
