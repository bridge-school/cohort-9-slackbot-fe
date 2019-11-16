import React from "react";
import styled from "styled-components";

import Logo from "../../assets/bridge-logo.png";

const Header = () => {
  return (
    <Container className="wrapper">
      <h1>
        <img src={Logo} alt="placeholder bridge logo" /> BridgeBot{" "}
      </h1>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  h1 {
    /* text-align: center; */
    font-size: 4rem;
    color: #000c9e;
    img {
      height: 30px;
    }
  }
`;
