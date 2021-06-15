import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main>
      Home Page
      <Link to="/register">Register </Link>
    </main>
  );
};

export default Landing;
