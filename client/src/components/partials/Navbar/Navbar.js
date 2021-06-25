import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-blue-300 py-4 mb-6">
        <div className="container flex justify-between max-w-5xl xl:max-w-7xl">
          <div className="">Branding</div>
          <div className="">Items</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
