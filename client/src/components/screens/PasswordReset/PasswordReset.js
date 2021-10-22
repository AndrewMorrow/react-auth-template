import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordReset } from "../../../store/auth/authActions";
import { setErrors } from "../../../store/error/errorActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { VscKey } from "react-icons/vsc";
import Message from "../../partials/Message/Message";
import _ from "lodash/core";

const PasswordReset = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const state = useSelector((state) => state);
  const { errors, messages } = state;
  const passwordRef = useRef();
  const password2Ref = useRef();

  // pulls password reset token from url
  const token = new URLSearchParams(props.location.search).get("token");

  // pulls userId from url
  const userId = new URLSearchParams(props.location.search).get("id");

  useEffect(() => {
    return () => {
      dispatch(
        setErrors({
          response: {
            data: {},
          },
        })
      );
    };
    // eslint-disable-next-line
  }, []);

  // dispatch passwordReset on form submit
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
      userId,
      token,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    dispatch(passwordReset(userData, props.history));
  };

  return (
    <main className=" min-h-screen flex items-center justify-center ">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-2 sm:mx-10.5"
        style={{ maxWidth: "550px" }}
      >
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-900">
                Password Reset
              </h1>
              <p className="text-gray-500 dark:text-gray-500">
                Please enter a new password for your account
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={onSubmit}>
                <div className="-mx-3 mt-1">
                  <div className="w-full px-3 mb-7">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold px-1"
                    >
                      Password
                    </label>
                    <div className="flex relative">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i>
                          <VscKey />
                        </i>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        ref={passwordRef}
                        name="password"
                        autoComplete="new-password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 mb-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />

                      {!_.isEmpty(errors.errors?.password) && (
                        <span className="absolute -bottom-6">
                          <Message variant="error">
                            {errors.errors.password}
                          </Message>
                        </span>
                      )}

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
                  </div>
                  <div className="w-full px-3 mb-8">
                    <label
                      htmlFor="password2"
                      className="text-xs font-semibold px-1"
                    >
                      Confirm Password
                    </label>
                    <div className="flex relative">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i>
                          <VscKey />
                        </i>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        ref={password2Ref}
                        name="password2"
                        autoComplete="new-password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 mb-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />

                      {!_.isEmpty(errors.errors?.password2) && (
                        <span className="absolute -bottom-6">
                          <Message variant="error">
                            {errors.errors.password2}
                          </Message>
                        </span>
                      )}

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
                  </div>
                </div>

                {!_.isEmpty(messages.message) && (
                  <div className="text-center mb-6">
                    <Message variant="success">{messages.message}</Message>
                  </div>
                )}

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 mt-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Reset Password
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
