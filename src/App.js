import React, { useEffect } from "react";
import { request } from "./backend-request";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import NewPoll from "./components/Form/NewPoll";
function App() {
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
      <NewPoll />
    </div>
  );
}

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
