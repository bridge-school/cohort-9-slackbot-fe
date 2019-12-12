import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const PreviousPolls = ({ listOfPrevious }) => {
  const history = useHistory();

  const onClickHandler = id => {
    history.push(`/results/${id}`);
  };

  return (
    <Container>
      <h2>Previous polls</h2>
      {listOfPrevious.map(eachPoll => {
        return (
          <p key={eachPoll.id} onClick={() => onClickHandler(eachPoll.id)}>
            {eachPoll.question}
          </p>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  padding: 50px 0;
  p {
    border: 1px solid black;
    border-radius: 2px;
    padding: 15px;
    cursor: pointer;
    user-select: none;
  }
  p:hover {
    color: blue;
    font-weight: 700;
  }
`;
