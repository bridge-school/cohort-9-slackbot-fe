import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import { SelectionOfChannels } from "./SelectionOfChannels";
import { Link } from "react-router-dom";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { useSelector, useDispatch } from "react-redux"; // hooks provided by react-redux;

const API_CHANNELS =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_CHANNELS
    : `http://${process.env.REACT_APP_PROJECT_NAME}-backend.bridgeschoolapp.io`;

export const NewPollForm = () => {
  const [channels, setChannels] = useState([]);

  //Get your data from the store
  const question = useSelector(state => state.question);
  const responses = useSelector(state => state.responses);
  const channel = useSelector(state => state.channel);

  //dispatch changes to store.
  const dispatch = useDispatch();

  const updateQuestion = useCallback(
    newQuestion =>
      dispatch({
        type: "UPDATE_QUESTION",
        data: newQuestion
      }),
    [dispatch]
  );

  // using useCallback from react to wrap useDispatch of react-redux , useCallback is an overkill for now , but if we are to pass updateAnswers to a child component it is better to wrap it as given to prevent child component rerendering
  const updateAnswers = useCallback(
    newAnswer =>
      dispatch({
        type: "UPDATE_ANSWERS",
        data: newAnswer
      }),
    [dispatch]
  );

  const updateChannel = useCallback(
    newChannel =>
      dispatch({
        type: "UPDATE_CHANNEL",
        data: newChannel
      }),
    [dispatch]
  );

  const handleSubmitPoll = event => {
    event.preventDefault();
    // setState();
  };

  useEffect(() => {
    fetch(API_CHANNELS)
      .then(res => res.json())
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
            <option value={channel} hidden />
            {channels.map(({ name, id }) => (
              <SelectionOfChannels channel={name} key={id} />
            ))}
          </select>
          <Link to="/poll-submitted">Submit Poll</Link>
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
    a {
      font-size: 2rem;
      padding: 10px 45px;
      background-color: ${colours.green};
      color: white;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 700;
      transition: 0.2s;
    }
    a:hover {
      background-color: ${colours.darkblue};
    }
  }
`;
