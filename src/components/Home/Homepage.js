import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PreviousPolls from "./PreviousPolls";
import colours from "../../assets/colours";

const Homepage = () => {
  return (
    <Main>
      <div className="wrapper">
        <Link to="/new-poll">Create new poll</Link>
        <PreviousPolls />
      </div>
    </Main>
  );
};

export default Homepage;

const Main = styled.main`
  background-color: ${colours.lightgrey};
  div.wrapper {
    padding: 50px 0;
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
