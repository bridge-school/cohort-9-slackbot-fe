import React from "react";
import styled from "styled-components";

export const PreviousPolls = () => {
  return (
    <Container>
      <h2>Previous polls</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Container>
  );
};

const Container = styled.section`
  padding: 50px 0;
  p {
    border: 1px solid black;
    border-radius: 2px;
    padding: 15px;
  }
`;
