import React from "react";
import { Link } from "react-router-dom";

const PollSubmitted = () => {
  return (
    <div>
      <h2>Your poll has been submitted</h2>
      <span roll="img" aria-label="celebration">
        🎉
      </span>
      <Link to="/results">Results</Link>

      <Link to="/">Homepage</Link>
    </div>
  );
};

export default PollSubmitted;
