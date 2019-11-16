import React, { useEffect } from "react";
import { request } from "./backend-request";

import FormApp from "./components/Form/FormApp";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <div className="App">
      <FormApp />
    </div>
  );
}

export default App;
