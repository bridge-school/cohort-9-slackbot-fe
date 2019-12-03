import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PreviousPolls } from "./PreviousPolls";
import colours from "../../assets/colours";
import { API_BASE_URL } from "../../backend-request/index";

export const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + "/previous-polls")
      .then(res => res.json())
      .then(data => {
        // return _data.concat(data);
        setData(data);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <Main>
      <div className="wrapper">
        <Link to="/new-poll">Create new poll</Link>
        <PreviousPolls listOfPrevious={data} />
      </div>
    </Main>
  );
};

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
