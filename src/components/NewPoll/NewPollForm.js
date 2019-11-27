import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import { SelectionOfChannels } from "./SelectionOfChannels";
import { useHistory } from "react-router-dom";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { useSelector, useDispatch } from "react-redux"; // hooks provided by react-redux;
import * as actions from "../../redux/actions";

const API_CHANNELS =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_CHANNELS
    : `http://${process.env.REACT_APP_PROJECT_NAME}-backend.bridgeschoolapp.io`;

export const NewPollForm = () => {
  const history = useHistory();

  const [channels, setChannels] = useState([]);
  const [error, setError] = useState(false);

  //Get your data from the store
  const question = useSelector(state => state.question);
  const responses = useSelector(state => state.responses);
  const channel = useSelector(state => state.channel);

  //dispatch changes to store.
  const dispatch = useDispatch();

  const updateQuestion = newQuestion =>
    dispatch(actions.updateQuestion(newQuestion));

  // using useCallback from react to wrap useDispatch of react-redux , useCallback is an overkill for now , but if we are to pass updateAnswers to a child component it is better to wrap it as given to prevent child component rerendering
  const updateAnswers = newAnswer =>
    dispatch(actions.updateResponses(newAnswer));

  const updateChannel = newChannel =>
    dispatch(actions.updateChannel(newChannel));

  const handleSubmitPoll = event => {
    event.preventDefault();

    let isResponseValid = responses.length >= 2;
    responses.forEach(response => {
      if (isResponseValid && response == "") {
        isResponseValid = false;
      }
    });

    // setState();
    if (question == "" || !isResponseValid || channel == "") {
      // but you can use a location instead
      setError(true);
      console.log("Make an error message for each box below");
    } else {
      setError(false);
      history.push("/poll-submitted");
    }
  };

  useEffect(() => {
    fetch(API_CHANNELS)
      .then(res => res.json())
      .then(data => {
        const _data = [
          {
            name: "Select a channel",
            id: 0
          }
        ];
        return _data.concat(data);
      })
      .then(data => setChannels(data))
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);

  const deleteResponse = (event, index) => {
    event.preventDefault();
    const _responses = [...responses];
    _responses.splice(index, 1);
    // setResponses(_responses);
    updateAnswers(_responses);
  };

  const handleResponseChange = event => {
    const _responses = [...responses];
    _responses[event.target.dataset.id] = event.target.value;
    // setResponses(_responses);
    updateAnswers(_responses);
  };

  const handleAddAnotherResponse = () => {
    updateAnswers([...responses, ""]);
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
            value={question}
            onChange={e => updateQuestion(e.target.value)}
            placeholder="Type in your question..."
          ></input>

          {responses.map((ele, index) => {
            return (
              <React.Fragment>
                <label>Response {index + 1}</label>
                <input
                  onChange={handleResponseChange}
                  onClick={() => {}}
                  data-id={index}
                  type="text"
                  value={ele}
                  className="leftie"
                />
                <Trash
                  onClick={e => {
                    deleteResponse(e, index);
                  }}
                  className="trash"
                />
                <br />
              </React.Fragment>
            );
          })}

          <button onClick={handleAddAnotherResponse} className="addAnswer">
            + Add another resp
          </button>

          <label htmlFor="userGroup">User Group:</label>
          <select id="userGroup" onChange={e => updateChannel(e.target.value)}>
            {channels.map(({ name, id }, index) => (
              <SelectionOfChannels channel={name} key={id} index={index} />
            ))}
          </select>
          {error && (
            <p className="error">
              Please fill out all the information, with at least two responses
            </p>
          )}
          <button type="submit" to="/poll-submitted">
            Submit Poll
          </button>
        </form>
      </div>
    </Container>
  );
};

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
    input,
    select,
    button[type="submit"] {
      display: block;
    }
    input,
    select {
      margin-bottom: 25px;
      border: 2px solid grey;
      border-radius: 2px;
      padding: 4px 0;
    }
    input#question {
      width: 500px;
    }
    trash-icon {
      font-size: 5px;
    }
    input#addAnswer {
      width: 250px;
      display: inline-block;
      margin-right: 5px;
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
