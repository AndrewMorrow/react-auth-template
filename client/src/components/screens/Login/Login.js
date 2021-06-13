import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-10"
        style={{ "max-width": "500px" }}
      >
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-900">
                Sign in
              </h1>
              <p className="text-gray-500 dark:text-gray-500">
                Sign in to access your account
              </p>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6 relative">
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>

                  <i className="absolute bottom-3.5 left-3 ">
                    <FiMail />
                  </i>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full px-8 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-300 dark:bg-gray-100 dark:placeholder-gray-500 dark:border-gray-200 dark:focus:border-indigo-500"
                  />
                </div>
                <div className="mb-6 relative">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <a
                      href="#!"
                      className="text-sm text-gray-500 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <i className="absolute bottom-3.5 left-3 ">
                    <VscKey />
                  </i>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-8 py-2 placeholder-gray-300 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-300 dark:bg-gray-100 dark:placeholder-gray-500 dark:border-gray-200 dark:focus:border-indigo-500"
                  />
                  <i
                    className="absolute bottom-3.5 right-4 hover:cursor-pointer"
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true)
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </i>
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-500">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;