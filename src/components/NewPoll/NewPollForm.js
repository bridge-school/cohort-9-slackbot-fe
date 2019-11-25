import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import { SelectionOfChannels } from "./SelectionOfChannels";
import { Link } from "react-router-dom";
import { ReactComponent as Trash } from "../../assets/trash.svg";

console.log(`Hey : ${process.env.REACT_APP_API_CHANNELS}`);

const API_CHANNELS =
  process.env.NODE_ENV === "development"
    ? // ? process.env.REACT_APP_API_CHANNELS
      `http://localhost:8001/channels`
    : `http://${process.env.REACT_APP_PROJECT_NAME}-backend.bridgeschoolapp.io`;

export const NewPollForm = () => {
  // Declare a new state variable, which we'll call "count"
  const [responses, setResponses] = useState(["1", "2", "3"]);

  const handleSubmitPoll = event => {
    event.preventDefault();
  };

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch(API_CHANNELS)
      .then(res => res.json())
      .then(data => setChannels(data))
      .catch(error => console.log("error: ", error));
  }, []);

  const deleteResponse = (event, index) => {
    event.preventDefault();
    const _responses = [...responses];
    _responses.splice(index, 1);
    setResponses(_responses);
  };

  const handleResponseChange = event => {
    const _responses = [...responses];
    _responses[event.target.dataset.id] = event.target.value;
    setResponses(_responses);
  };

  const doThat = () => {
    setResponses([...responses, ""]);
  };

  return (
    <Container>
      <div className="wrapper">
        <h2>Create New Poll</h2>
        <form onSubmit={handleSubmitPoll}>
          <label htmlFor="question">Question:</label>
          <input type="text" id="question"></input>

          {responses.map((ele, index) => {
            return (
              <React.Fragment>
                <label>Responses</label>
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

          <button onClick={doThat} className="addAnswer">
            + Add another resp
          </button>

          <label htmlFor="userGroup">User Group:</label>
          <select id="userGroup">
            <option value="" defaultValue disabled hidden>
              Choose a channel
            </option>
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
