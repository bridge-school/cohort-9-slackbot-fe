import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import { SelectionOfChannels } from "./SelectionOfChannels";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../backend-request/index";

export const NewPollForm = () => {
  const handleSubmitPoll = e => {
    e.preventDefault();
  };

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + "/channels")
      .then(res => res.json())
      .then(data => setChannels(data))
      .catch(error => console.log("error: ", error));
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <h2>Create New Poll</h2>
        <form onSubmit={handleSubmitPoll}>
          <label htmlFor="question">Question:</label>
          <input type="text" id="question"></input>

          <label htmlFor="userGroup">User Group:</label>
          <select id="userGroup">
            <option value="" defaultValue disabled hidden>
              Choose a channel
            </option>

            {channels.map(({ name, id }) => (
              <SelectionOfChannels channel={name} key={id} />
            ))}
          </select>

          <label htmlFor="addAnswer">Answer:</label>
          <input type="text" id="addAnswer" />
          <button className="addAnswer">+ Add answer</button>
          <ul>{/* Eventually the answers will be displayed here*/}</ul>
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
