import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as messageAction from "../../redux/messageActions";
import * as channelAction from "../../redux/channelActions";

import styled from "styled-components";
import colours from "../../assets/colours";

import { SelectionOfChannels } from "./SelectionOfChannels";
import { Response } from "./Response";
import { validResponse } from "../shared/helperFunctions";
import { useHistory } from "react-router-dom";

const NewPollForm = ({
  updateQuestion,
  updateAnswers,
  updateChannel,
  updateChannelID,
  updateChannelSize,
  fetchChannels,
  postMessages,
  message,
  channels,
  isLoading
}) => {
  const history = useHistory();

  useEffect(() => {
    fetchChannels();
  }, []);

  const handleSubmitPoll = event => {
    event.preventDefault();
    const isValid = validResponse(message.responses);
    if (isValid) {
      postMessages()
        .then(() => {
          history.push(`/poll-submitted`);
        })
        .catch(err => {
          console.error(err);
          alert(`Oops, something went wrong : ${err.message}`);
        });
    } else {
      alert("Please complete the response");
    }
  };

  const responseArray = Object.keys(message.responses);

  // update the current state responses
  const updateResponse = (e, idx) => {
    const _responses = [...message.responses];
    _responses[idx] = e.target.value;
    updateAnswers(_responses);
  };

  // delete the specific responseX
  const deleteResponse = idx => {
    const _responses = [...message.responses];
    _responses.splice(idx, 1);
    updateAnswers(_responses);
  };

  const handleAddAnotherResponse = () => {
    updateAnswers([...message.responses, ""]);
    // updateAnswers({ ...message.responses, "": 0 });
  };

  const handleChannelSelection = value => {
    // Filter the channels for the channel that matches 'selectedChannel' then decontruct it for 'name', 'id' and 'size'
    const [{ name, id, size }] = channels.filter(({ name }) => name === value);

    updateChannel(name);
    updateChannelID(id);
    updateChannelSize(size);
  };

  // console.log("responseArray is", responseArray);

  return (
    <Container>
      <div className="wrapper">
        <h2>Create New Poll</h2>
        <form onSubmit={handleSubmitPoll}>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={message.question}
            onChange={e => updateQuestion(e.target.value)}
            placeholder="Type in your question..."
            pattern="(?=.*\w).{1,}"
            required
          />
          {message.responses.map((response, index, responses) => (
            <Response
              key={"response" + index}
              idx={index}
              response={response}
              length={responseArray.length}
              updateResponse={updateResponse}
              deleteResponse={deleteResponse}
            />
          ))}

          <button onClick={handleAddAnotherResponse} className="addAnswer">
            + Add another response
          </button>

          <label htmlFor="userGroup">User Group:</label>
          <select
            id="userGroup"
            onChange={e => handleChannelSelection(e.target.value)}
            defaultValue=""
            required
          >
            <option value="" disabled>
              {isLoading ? "Fetching Channels" : "Select a channel"}
            </option>
            {/* CHANNELS */}
            {channels.map(({ name, id }) => (
              <SelectionOfChannels channel={name} key={id} />
            ))}
          </select>

          <button type="submit" to="/poll-submitted">
            Submit Poll
          </button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  message: state.message,
  channels: state.channels.channels,
  isLoading: state.channels.isLoading
});

const mapDispatchToProps = dispatch => ({
  updateQuestion: newQuestion =>
    dispatch(messageAction.updateQuestion(newQuestion)),
  updateAnswers: newAnswer =>
    dispatch(messageAction.updateResponses(newAnswer)),
  updateChannel: newChannel =>
    dispatch(messageAction.updateChannel(newChannel)),
  updateChannelID: newChannelID =>
    dispatch(messageAction.updateChannelID(newChannelID)),
  updateChannelSize: newChannelSize =>
    dispatch(messageAction.updateChannelSize(newChannelSize)),
  fetchChannels: () => dispatch(channelAction.fetchChannelsThunk()),
  postMessages: () => dispatch(messageAction.postMessagesThunk())
});

export const ConnectedNewPollForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPollForm);

const Container = styled.section`
  padding: 50px 0;
  background-color: ${colours.lightgrey};
  form {
    font-size: 1.8rem;
    h2 {
      font-size: 3rem;
      margin-top: 0;
    }
    label,
    select,
    button[type="submit"] {
      display: block;
    }
    label {
      margin-bottom: 3px;
    }
    input,
    select {
      margin-bottom: 25px;
      border: 2px solid grey;
      border-radius: 2px;
      padding: 4px 0;
    }
    input {
      padding: 5px;
    }
    input#question {
      width: 500px;
    }

    button.addAnswer {
      background-color: ${colours.lightblue};
      color: white;
      border: 2px solid transparent;
      border-radius: 3px;
      padding: 10px 15px;
      transition: 0.2s;
      margin-bottom: 3rem;
      font-weight: bold;
    }
    button.addAnswer:hover {
      background-color: ${colours.pink};
    }
    button[type="submit"] {
      font-size: 2rem;
      padding: 10px 45px;
      background-color: ${colours.green};
      color: white;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 700;
      transition: 0.2s;
      border-color: transparent;
    }
    button[type="submit"]:hover {
      background-color: ${colours.darkblue};
    }
  }
`;
