import React, { useEffect } from "react";
import { request } from "./backend-request";

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
      <NewPoll />
    </div>
  );
}

export default App;
