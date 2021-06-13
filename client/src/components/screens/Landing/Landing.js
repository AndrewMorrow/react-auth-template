import React from "react";
import { Link } from "react-router-dom";
import Message from "../../Message";

const Landing = () => {
  return (
    <main>
      Home Page
      <Link to="/register">Register </Link>
    </main>
  );
};

export default Landing;
