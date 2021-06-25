import React from "react";
import { Link } from "react-router-dom";
import NavUserDropdown from "../NavUserDropdown/NavUserDropdown";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-blue-300 py-4">
        <div className="container flex justify-between max-w-5xl xl:max-w-7xl">
          <Link to="/" className="">
            Branding
          </Link>
          <div className=" flex items-center space-x-6 md:space-x-10">
            <Link to="/register">Register</Link>
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            <NavUserDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
