import React, { useEffect } from "react";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createGlobalStyle, inject } from "styled-components";
import { Normalize } from "styled-normalize";

import Header from "./components/shared/Header";
import { NewPollForm } from "./components/NewPoll";
import { Homepage } from "./components/Home";
import Results from "./components/Results/Results";
import PollSubmitted from "./components/PollSubmitted/PollSubmitted";
import { connect } from "react-redux";

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
          <Route path="/new-poll" component={NewPollForm} />
          <Route path="/results" component={Results} />
          <Route path="/poll-submitted" component={PollSubmitted} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {
  const reduxState = state;
  return { reduxState };
};

// const mapDispatchToProps = dispatch => ({
//   setQuestion: dispatch(actions.)
// })

export default connect(mapStateToProps)(App);
// export default App;

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
  }
.wrapper {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
`;
