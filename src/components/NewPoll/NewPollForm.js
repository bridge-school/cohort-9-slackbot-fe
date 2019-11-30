import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as messageAction from "../../redux/messageActions";
import * as channelAction from "../../redux/channelActions";

import styled from "styled-components";
import colours from "../../assets/colours";

import { SelectionOfChannels } from "./SelectionOfChannels";
import Response from "./Response";

const NewPollForm = ({
  updateQuestion,
  updateAnswers,
  updateChannel,
  updateChannelID,
  updateChannelSize,
  message,
  fetchChannels,
  channels
}) => {
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  const handleSubmitPoll = e => {
    e.preventDefault();

    // let isResponseValid = message.responses.length >= 2;
    // message.responses.forEach(response => {
    //   if (isResponseValid && response === "") {
    //     isResponseValid = false;
    //   }
    // });

    // // setState();
    // if (message.question === "" || !isResponseValid || message.channel === "") {
    //   // but you can use a location instead
    //   setError(true);
    //   console.log("Make an error message for each box below");
    // } else {
    //   setError(false);
    // }
  };

  const updateResponse = e => {
    /* 
     Since the input's id is unique and is in the format 'response{indexNumber}', I've used a regEx to grab the {indexNumber}

      I think we should update this function later passing the string and index, and let the reducer handle updating the array.     
    */
    const idx = parseInt(e.target.id.match(/\d/g).join(""));
    const _responses = [...message.responses];
    _responses[idx] = e.target.value;
    updateAnswers(_responses);
  };

  const deleteResponse = e => {
    // Same comment as above, Redux should probably handle updating the array.
    const idx = parseInt(e.target.attributes.value.value);
    const _responses = [...message.responses];
    _responses.splice(idx, 1);
    updateAnswers(_responses);
  };

  const handleAddAnotherResponse = () => {
    updateAnswers([...message.responses, ""]);
  };

  const handleChannelSelection = e => {
    const selectedChannel = e.target.value;

    /* 
      Filter the channels for the channel that matches 'selectedChannel'
     decontruct it for 'name', 'id' and 'size'
     */
    const [{ name, id, size }] = channels.filter(
      ({ name }) => name === selectedChannel
    );

    updateChannel(name);
    updateChannelID(id);
    updateChannelSize(size);
  };

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
            required
          />
          {message.responses.map((response, idx, responses) => (
            <Response
              key={"response" + idx}
              idx={idx}
              response={response}
              length={responses.length}
              updateResponse={updateResponse}
              deleteResponse={deleteResponse}
            />
          ))}

          <button onClick={handleAddAnotherResponse} className="addAnswer">
            + Add another resp
          </button>

          <label htmlFor="userGroup">User Group:</label>
          <select id="userGroup" onChange={handleChannelSelection}>
            <option defaultValue>Select a channel</option>
            {/* channels */}
            {channels.map(({ name, id }) => (
              <SelectionOfChannels channel={name} key={id} />
            ))}
          </select>
          {/* {error && (
            <p className="error">
              Please fill out all the information, with at least two responses
            </p>
          )} */}
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
  channels: state.channels.channels
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
  fetchChannels: () => dispatch(channelAction.fetchChannelsThunk())
});

export const ConnectedNewPollForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPollForm);

const Container = styled.section`
  padding: 50px 0;
  background-color: ${colours.lightgrey};
  form {
    .leftie {
      display: inline-block;
    }
    .trash {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
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
    trash-icon {
      font-size: 5px;
    }

    button.addAnswer {
      background-color: ${colours.lightblue};
      color: white;
      border: 2px solid transparent;
      border-radius: 3px;
      padding: 4px 10px;
      transition: 0.2s;
      margin-bottom: 3rem;
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
    }
    button[type="submit"]:hover {
      background-color: ${colours.darkblue};
    }
  }
`;
