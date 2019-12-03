import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colours from "../../assets/colours";

// const handleSeeResults = e => {
//   e.preventDefault();
//   return <PollSubmitted />;
// };

const PollSubmitted = () => {
  return (
    <Container>
      <div className="wrapper">
        <h2>Your poll has been submitted</h2>
        <p className="emoji">
          <span role="img" aria-label="celebration">
            🎉
          </span>
        </p>
        <Link to="/results">See Results</Link>&emsp;
        <Link to="/" className="back">
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default PollSubmitted;

const Container = styled.section`
  padding: 50px 0;
  background-color: ${colours.lightgrey};
  font-size: 1.8rem;
  .wrapper {
    text-align: center;
  }
  .emoji {
    font-size: 5rem;
    margin: 0 0 4rem 0;
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
  .back {
    background-color: ${colours.darkblue};
  }
  .back:hover {
    background-color: ${colours.lightblue};
  }
`;
