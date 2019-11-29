import React from "react";
import styled from "styled-components";
import Trash from "../../assets/trash.svg";

const Response = ({ i = 0 }) => {
  return (
    <ResponseContainer>
      <label htmlFor={"response" + (i + 1)}>Response {i + 1}</label>
      <div>
        <input type="text" id={"response" + (i + 1)} />

        {i > 1 ? (
          <button>
            <img src={Trash} alt="Delete item" />
          </button>
        ) : (
          ""
        )}
      </div>
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
