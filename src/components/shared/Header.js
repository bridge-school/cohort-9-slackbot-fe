import React from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import Logo from "../../assets/bridge-logo.png";

export const Header = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>
          <a href="/">
            <img src={Logo} alt="BridgeBot Logo" />
            BridgeBot
          </a>
        </h1>
      </div>
    </Container>
  );
};

const Container = styled.header`
  background-color: white;
  h1 {
    font-size: 4rem;
    a {
      color: ${colours.darkblue};
      text-decoration: none;
    }
    img {
      height: 30px;
      margin-right: 5px;
    }
  }
`;
