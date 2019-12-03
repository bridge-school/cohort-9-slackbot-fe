import React from "react";
import styled from "styled-components";
import Trash from "../../assets/trash.svg";

const Response = ({
  response,
  idx,
  length,
  updateResponse,
  deleteResponse
}) => {
  return (
    <ResponseContainer>
      <label htmlFor={"response" + idx}>Response {idx + 1}</label>
      <input
        type="text"
        id={"response" + idx}
        value={response}
        onChange={e => updateResponse(e, idx)}
        pattern="(?=.*\w).{1,}"
        // required
      />
      {/* If the array is less than 2 items long, don't show delete button. */}
      {length > 2 ? (
        <button
          onClick={e => deleteResponse(idx)}
          aria-label={"Delete response" + response}
          value={idx}
        ></button>
      ) : (
        ""
      )}
    </ResponseContainer>
  );
};

export default Response;

const ResponseContainer = styled.div`
  input {
    width: 250px;
    display: inline-block;
  }
  button {
    width: 25px;
    height: 25px;
    margin-left: 5px;
    background-color: transparent;
    border: none;
    background-image: url(${Trash});
    background-size: cover;
    background-repeat: no-repeat;
    :hover {
      cursor: pointer;
    }
  }
`;
