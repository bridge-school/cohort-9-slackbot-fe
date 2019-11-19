import React from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import ListOfChannels from "./ListOfChannels";

// Eventually we will get the channels data from our backend, here is some dummy data:
const channels = ["cohort9-students", "general", "help-me"];

const Form = () => {
  return (
    <Container>
      <div className="wrapper">
        <h2>Create New Poll</h2>
        <form action="">
          <label htmlFor="question">Question:</label>
          <input type="text" id="question"></input>

          <label htmlFor="userGroup">User Group:</label>
          <select id="userGroup">
            <option value="" selected disabled hidden>
              Choose a channel
            </option>

            {channels.map((channel, idx) => (
              <ListOfChannels channel={channel} key={idx} />
            ))}
          </select>

          <label htmlFor="addAnswer">Answer:</label>
          <input type="text" id="addAnswer" />
          <button className="addAnswer">+ Add answer</button>
          <ul>{/* Eventually the answers will be displayed here*/}</ul>
          <button type="submit">Submit Poll</button>
        </form>
      </div>
    </Container>
  );
};

export default Form;

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
    button[type="submit"] {
      font-size: 2rem;
      margin-top: 45px;
      padding: 10px 45px;
      background-color: ${colours.green};
      color: white;
      border: transparent;
      border-radius: 2px;
      transition: 0.2s;
    }
    button:hover {
      background-color: ${colours.darkblue};
    }
  }
`;
