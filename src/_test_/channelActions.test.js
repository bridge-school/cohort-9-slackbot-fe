import * as channelActions from "../redux/messageActions";
import { setIsChannelsLoading } from "../redux/channelActions";

describe("Test of setIsChannelsLoading", () => {
  it("returns a data payload with a data = true", () => {
    const expectedResult = {
      type: channelActions.channel.SET_IS_CHANNELS_LOADING,
      data: true
    };
    expect(channelActions.setIsChannelsLoading(true).toEqual(expectedResult));
  });
});
