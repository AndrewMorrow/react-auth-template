import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setErrors } from "../../../store/error/errorActions";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import Message from "../../partials/Message/Message";
import { updateUser } from "../../../store/auth/authActions";
import { getUser } from "../../../utils/apiHelpers";
import _ from "lodash/core";

const MyAccount = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { auth, errors, messages } = state;

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  if (!_.isEmpty(currentUser)) {
    firstNameRef.current.value = currentUser.firstName;
    lastNameRef.current.value = currentUser.lastName;
    emailRef.current.value = currentUser.email;
  }

  useEffect(() => {
    if (!auth.isAuthenticated) props.history.push("/login");
    getUser()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [auth.isAuthenticated, props]);

  useEffect(() => {
    dispatch(
      setErrors({
        response: {
          data: {},
        },
      })
    );
    //eslint-disable-next-line
  }, []);

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
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    dispatch(updateUser(userData, props.history));
  };

  return (
    <main>
      <div className="min-w-screen min-h-screen  flex items-center justify-center md:px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden md:mx-4"
          style={{ maxWidth: "900px" }}
        >
          <form onSubmit={onSubmit}>
            <div className="sm:flex w-full">
              <div className="w-full  py-10 px-5 md:px-10">
                <div className="flex">
                  <Link
                    to="/dashboard"
                    className="p-2 bg-gray-200 flex items-center rounded font-semibold"
                  >
                    <BsArrowLeft className="mr-1" /> Back to Dashboard
                  </Link>
                </div>
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">
                    Account Info
                  </h1>
                  <p>
                    Update your account information below and click save changes
                  </p>
                </div>
                <div className="sm:flex -mx-3">
                  <div className="w-full sm:w-1/2 px-3 mb-7">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      First name
                    </label>
                    <div className="flex relative">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i>
                          <FaRegUser />
                        </i>
                      </div>
                      <input
                        type="text"
                        ref={firstNameRef}
                        name="firstName"
                        className="w-full -ml-10 pl-10 pr-3 py-2 mb-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />

                      {!_.isEmpty(errors.errors) &&
                        !_.isEmpty(errors.errors.firstName) && (
                          <span className="absolute -bottom-6">
                            <Message variant="error">
                              {errors.errors.firstName}
                            </Message>
                          </span>
                        )}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-3 mb-7 relative">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i>
                          <FaRegUser />
                        </i>
                      </div>
                      <input
                        type="text"
                        ref={lastNameRef}
                        name="lastName"
                        className="w-full -ml-10 pl-10 pr-3 py-2 mb-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />

                      {!_.isEmpty(errors.errors) &&
                        !_.isEmpty(errors.errors.lastName) && (
                          <span className="absolute -bottom-6">
                            <Message variant="error">
                              {errors.errors.lastName}
                            </Message>
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-1 mb-2">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex relative">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i>
                          <FiMail />
                        </i>
                      </div>
                      <input
                        type="email"
                        ref={emailRef}
                        name="email"
                        autoComplete="username"
                        className="w-full -ml-10 pl-10 pr-3 py-2 mb-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />

                      {!_.isEmpty(errors.errors) &&
                        !_.isEmpty(errors.errors.email) && (
                          <span className="absolute -bottom-6">
                            <Message variant="error">
                              {errors.errors.email}
                            </Message>
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <div className="md:flex -mx-3 mt-1">
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

                      {!_.isEmpty(errors.errors) &&
                        !_.isEmpty(errors.errors.password) && (
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
                  <div className="w-full px-3 mb-12">
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

                      {!_.isEmpty(errors.errors) &&
                        !_.isEmpty(errors.errors.password2) && (
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

                {!_.isEmpty(errors.errors) && !_.isEmpty(errors.errors.error) && (
                  <div className="text-center mb-6">
                    <Message variant="error" classes="font-medium">
                      {errors.errors.error}
                    </Message>
                  </div>
                )}

                {!_.isEmpty(messages.message) && (
                  <div className="text-center mb-6">
                    <Message variant="success">{messages.message}</Message>
                  </div>
                )}

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-3 ">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SAVE CHANGES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
