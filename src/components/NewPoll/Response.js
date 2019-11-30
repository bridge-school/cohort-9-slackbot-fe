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
        onChange={updateResponse}
        pattern="(?=.*\w).{1,}"
        required
      />
      {/* If the array is less than 2 items long, don't show delete button. */}
      {length > 2 ? (
        <button onClick={deleteResponse}>
          <img src={Trash} alt={"Delete response: " + response} value={idx} />
        </button>
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
    width: 30px;
    height: 30px;
    margin-left: 5px;
    background-color: transparent;
    border: none;
    padding: 0;
    :hover {
      cursor: pointer;
    }
    :hover img {
      transform: scale(1.05);
    }
  }
`;
