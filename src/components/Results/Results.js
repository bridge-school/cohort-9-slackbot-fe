import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../backend-request/index";

const Results = props => {
  const pathname = props.location.pathname;
  const splittedPath = pathname.split("/");
  // This is always `2`, as we have defined.
  const id = splittedPath[2];

  const [data, setData] = useState({});
  const responses = data.responses;

  const responseArray = () => {
    if (responses) {
      return Object.keys(responses).map(eachResponse => {
        return (
          <p>
            {eachResponse} : {responses[eachResponse]}
          </p>
        );
      });
    }
  };

  // fetch the poll info from db
  useEffect(() => {
    fetch(API_BASE_URL + `/result/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div>
      <p>QUESTION: {data.question}</p>
      {responseArray()}
      <p>CHANNEL: {data.channel}</p>
      <p>CHANNEL SIZE: {data.channelSize}</p>
      <p>CHANNEL ID: {data.chennelID}</p>
      <p>{data.id}</p>
    </div>
  );
};

export default Results;
