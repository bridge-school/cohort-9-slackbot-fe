import * as channelActions from "../redux/messageActions";
import { setIsChannelsLoading, channel } from "../redux/channelActions";

describe("Test of setIsChannelsLoading", () => {
  it("returns a data payload with a data = true", () => {
    const SUCCESS = {
      type: channel.SET_IS_CHANNELS_LOADING,
      data: true
    };
    expect(setIsChannelsLoading(true)).toEqual(SUCCESS);
  });
});
