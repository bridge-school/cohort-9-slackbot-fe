import React from "react";
import styled from "styled-components";
import Trash from "../../assets/trash.svg";

const Response = ({ response, idx, length, updateResponse }) => {
  return (
    <ResponseContainer>
      <label htmlFor={"response" + idx}>Response {idx + 1}</label>
      <input
        type="text"
        id={"response" + idx}
        value={response}
        onChange={updateResponse}
      />

      {length > 2 ? (
        <button>
          <img src={Trash} alt="Delete item" />
        </button>
      ) : (
        ""
      )}
    </ResponseContainer>
  );
};

export default Response;

const ResponseContainer = styled.div`
  div {
    display: flex;
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
