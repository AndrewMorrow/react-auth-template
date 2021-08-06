import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passResetReq } from "../../../store/auth/authActions";
import { setErrors } from "../../../store/error/errorActions";
import { FiMail } from "react-icons/fi";
import Message from "../../partials/Message/Message";
import _ from "lodash/core";

const PasswordReset = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { errors, messages } = state;
  const emailRef = useRef();

  console.log(messages);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setErrors({
        response: {
          data: {},
        },
      })
    );

    const userData = {
      email: emailRef.current.value,
    };

    dispatch(passResetReq(userData, props.history));
    // console.log(messages.message);
  };

  return (
    <main className=" min-h-screen flex items-center justify-center ">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-2 sm:mx-10.5"
        style={{ maxWidth: "505px" }}
      >
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-900">
                Password Reset Request
              </h1>
              <p className="text-gray-500 dark:text-gray-500">
                Please enter your email to reset your password
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={onSubmit}>
                <div className="mb-6 relative">
                  <label
                    htmlFor="email"
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
                    ref={emailRef}
                    placeholder="example@domain.com"
                    className="w-full px-8 py-2 mb-0.5 placeholder-gray-300 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-300 dark:bg-gray-100 dark:placeholder-gray-500 dark:border-gray-200 dark:focus:border-indigo-500"
                  />

                  {!_.isEmpty(errors.errors) &&
                    !_.isEmpty(errors.errors.email) && (
                      <span className="absolute left-0 -bottom-6">
                        <Message variant="error">{errors.errors.email}</Message>
                      </span>
                    )}
                  {/* {!errors.errors || !errors.errors.email ? (
                    <span></span>
                  ) : (
                    <span className="absolute left-0 -bottom-6">
                      <Message variant="error">{errors.errors.email}</Message>
                    </span>
                  )} */}
                </div>

                {!_.isEmpty(messages.message) && (
                  <span className="text-center mb-6">
                    <Message variant="success">{messages.message}</Message>
                  </span>
                )}

                {/* {!messages.message ? (
                  <span></span>
                ) : (
                  <span className="absolute left-0 -bottom-6">
                    <Message variant="success">{messages.message}</Message>
                  </span>
                )} */}

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 mt-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Send Password Reset
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
    </main>
  );
};

export default PasswordReset;
