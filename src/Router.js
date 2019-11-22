import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import Header from "./components/shared/Header";
import App from "./App";
import Homepage from "./components/Homepage";

const Router = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <div className="wrapper">
          <Switch to="/">
            <Route exact path="/" component={Homepage} />
          </Switch>

          <Link to="/new-poll">Create New Poll</Link>
          <Route path="/new-poll" component={App} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;

const GlobalStyles = createGlobalStyle`
 html {
  font-size: 62.5%;
}
body {
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
}
.wrapper {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
`;
