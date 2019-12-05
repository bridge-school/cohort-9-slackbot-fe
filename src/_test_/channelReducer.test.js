import { channelReducer, INITIAL_CHANNEL_STATE } from "../redux/channelReducer";
import { setIsChannelsLoading, setChannelList } from "../redux/channelActions";
describe("Test for channel reducer", () => {
  it("returns the initial state when an unknown action is passed", () => {
    expect(channelReducer(INITIAL_CHANNEL_STATE, "RANDOM")).toEqual(
      INITIAL_CHANNEL_STATE
    );
  });
  it("returns a new state with IsLoading true", () => {
    const SUCCESS = {
      channels: [],
      isLoading: true
    };
    expect(
      channelReducer(INITIAL_CHANNEL_STATE, setIsChannelsLoading(true))
    ).toEqual(SUCCESS);
  });
  it("update channels and isLoading to false", () => {
    const INITIAL_STATE = {
      channels: [],
      isLoading: true
    };
    const FINAL_STATE = {
      channels: [1, 2, 3],
      isLoading: false
    };
    expect(channelReducer(INITIAL_STATE, setChannelList([1, 2, 3]))).toEqual(
      FINAL_STATE
    );
  });
});
