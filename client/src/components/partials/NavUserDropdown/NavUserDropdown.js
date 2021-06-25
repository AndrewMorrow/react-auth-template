import { Menu } from "@headlessui/react";
import { FaUserCircle } from "react-icons/fa";

import React from "react";

const NavUserDropdown = () => {
  return (
    <Menu as="div" className="relative z-10 flex ">
      <Menu.Button>
        <FaUserCircle size="1.5rem" />
      </Menu.Button>
      <Menu.Items as="div" className="absolute right-0 top-10 ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "bg-blue-500"
              } block p-3 whitespace-nowrap border border-black text-center`}
              href="/account-settings"
            >
              Dashboard
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "bg-blue-500"
              } block whitespace-nowrap p-3 border border-black text-center`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "bg-blue-500"
              } block whitespace-nowrap p-3 border border-black text-center`}
              href="/account-settings"
            >
              Something Else
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavUserDropdown;
