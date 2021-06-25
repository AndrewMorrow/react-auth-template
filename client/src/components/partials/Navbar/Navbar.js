import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-blue-300 py-4 mb-6">
        <div className="container flex justify-between max-w-5xl xl:max-w-7xl">
          <div className="">Branding</div>
          <div className=" flex items-center space-x-6 md:space-x-10">
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            <Menu as="div" className="relative">
              <Menu.Button>
                <FaUserCircle
                  onClick={() => setdrawerIsOpen(!drawerIsOpen)}
                  size="1.5rem"
                />
              </Menu.Button>
              <Menu.Items as="div" className="absolute right-0 top-12">
                <Menu.Item >
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-blue-500"
                      } block p-3 whitespace-nowrap`}
                      href="/account-settings"
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="flex justify-center">
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-blue-500"
                      } block whitespace-nowrap p-3`}
                      href="/account-settings"
                    >
                      Documentation
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="flex justify-center">
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-blue-500"
                      } block whitespace-nowrap p-3`}
                      href="/account-settings"
                    >
                      Something Else
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
