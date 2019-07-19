import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : `http://${process.env.REACT_APP_PROJECT_NAME}-backend.bridgeschoolapp.io`;

const request = (endpoint, method = "GET") =>
  fetch(`${API_BASE_URL}/${endpoint}`);

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
