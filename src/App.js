import React, { useEffect } from "react";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import Header from "./components/shared/Header";
import Form from "./components/Form/Form";
import Homepage from "./components/Home/Homepage";
import Results from "./components/Results";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <div className="App">
      <Normalize />
      <GlobalStyles />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/new-poll" component={Form} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

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
