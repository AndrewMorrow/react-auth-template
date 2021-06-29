import { Menu } from "@headlessui/react";
import { FaUserCircle } from "react-icons/fa";
import { logoutUser } from "../../../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";

const NavUserDropdown = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  const onLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <Menu as="div" className="relative z-10 flex ">
      <Menu.Button>
        <FaUserCircle size="1.5rem" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-10 w-40 focus:ring-4 "
      >
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-blue-200"
              } block p-3 whitespace-nowrap border border-black text-center w-full font-semibold`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${
                active && "bg-blue-200"
              } block whitespace-nowrap p-3 border border-black text-center w-full font-semibold`}
              to="/account"
            >
              My Account
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={onLogout}
              className={`${
                active && "bg-blue-200"
              } block whitespace-nowrap p-3 border border-black text-center w-full font-semibold`}
            >
              Logout
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavUserDropdown;
