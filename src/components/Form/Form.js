import React, { useState } from "react";
import styled from "styled-components";
import ListOfOptions from "./ListOfOptions";

// Eventually we will get the channel data from our backend.
const channels = ["cohort9-students", "general", "help-me"];

const Form = () => {
  const [answers, setAnswers] = useState([]);

  const handleAddAnswer = e => {
    e.preventDefault();
    console.log("answer");
  };
  return (
    <Container>
      <div className="wrapper">
        <h2>Create New Poll</h2>

        <label htmlFor="question">Question:</label>
        <input type="text" id="question"></input>

        <label htmlFor="userGroup">User Group:</label>
        <select id="userGroup">
          {channels.map((channel, idx) => (
            <ListOfOptions channel={channel} key={idx} />
          ))}
        </select>

        <label htmlFor="addAnswer">Answer:</label>

        <input type="text" id="addAnswer" />
        <button className="addAnswer" onClick={handleAddAnswer}>
          + Add answer
        </button>
        <ul></ul>
        <button type="submit">Submit Poll</button>
      </div>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  padding: 50px 0;
  font-size: 1.8rem;
  background-color: #f4f4f4;
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
    background-color: #2fa1d4;
    color: white;
    border: 2px solid transparent;
    border-radius: 3px;
    padding: 4px 10px;
    transition: 0.2s;
  }
  button.addAnswer:hover {
    background-color: #eb2c97;
  }
  button[type="submit"] {
    font-size: 2rem;
    margin-top: 45px;
    padding: 10px 45px;
    background-color: #08c39d;
    color: white;
    border: transparent;
    border-radius: 2px;
    transition: 0.2s;
  }
  button:hover {
    background-color: #1d9e83;
  }
`;
