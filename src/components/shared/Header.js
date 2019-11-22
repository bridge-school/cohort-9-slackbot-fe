import React from "react";
import styled from "styled-components";
import colours from "../../assets/colours";
import Logo from "../../assets/bridge-logo.png";

const Header = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>
          <img src={Logo} alt="BridgeBot Logo" />
          BridgeBot
        </h1>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: white;
  h1 {
    font-size: 4rem;
    color: ${colours.darkblue};
    img {
      height: 30px;
      margin-right: 5px;
    }
  }
`;
