import React from "react";
import { Link } from "react-router-dom";

const PollSubmitted = () => {
  return (
    <div>
      <p>THIS WILL BE HIDDEN ⬇⬇⬇⬇⬇</p>
      <h2>Your poll has been submitted</h2>
      <span role="img" aria-label="celebration">
        🎉
      </span>
      <Link to="/results">Results</Link>

      <Link to="/">Homepage</Link>
    </div>
  );
};

export default PollSubmitted;
