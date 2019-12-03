import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../backend-request/index";

const Results = props => {
  const pathname = props.location.pathname;
  const splittedPath = pathname.split("/");
  // This is always `2`, as we have defined.
  const id = splittedPath[2];

  const [data, setData] = useState({
    responses: [],
    id: "",
    chennelID: "",
    question: "",
    channel: ""
  });
  // fetch the poll info from db
  useEffect(() => {
    fetch(API_BASE_URL + `/result/${id}`)
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
    <div>
      <p>{data.question}</p>
      {data.responses.map(ele => {
        return <p>{ele}</p>;
      })}
      <p>{data.channel}</p>
      <p>{data.chennelID}</p>
      <p>{data.id}</p>
    </div>
  );
};

export default Results;
