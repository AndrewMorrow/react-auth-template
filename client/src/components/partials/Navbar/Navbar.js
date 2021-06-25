import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const openMenu = () => {
    console.log("open");
  };

  return (
    <header>
      <nav className="bg-blue-300 py-4 mb-6">
        <div className="container flex justify-between max-w-5xl xl:max-w-7xl">
          <div className="">Branding</div>
          <div className="flex items-center space-x-6 md:space-x-10">
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            <FaUserCircle onClick={openMenu} size="1.5rem" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
