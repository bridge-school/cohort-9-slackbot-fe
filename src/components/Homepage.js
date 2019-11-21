import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Link to="/new-poll">create new poll</Link>
    </>
  );
};

export default Homepage;
