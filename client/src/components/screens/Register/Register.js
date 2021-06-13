import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setErrors } from "../../../store/auth/authActions";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";
import _ from "lodash/core";
import Message from "../../Message";

const Register = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const state = useSelector((state) => state);
  const { auth } = state;
  const errors = auth.error;
  // console.log(errors);
  // const errors = useSelector((state) => (state.error ? state.error : {}));
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  useEffect(() => {
    if (auth.isAuthenticated) props.history.push("/dashboard");
  }, [auth.isAuthenticated, props]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setErrors({
        response: {
          data: {
            firstName: "Please enter a valid first name",
            lastName: "Please enter a valid last name",
            email: "Please enter a valid Email",
            password1: "Please enter a valid password",
            password2: "Passwords do not match",
          },
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
    // console.log({ userData });
    // dispatch(registerUser(userData, props.history));
  };

  return (
    <main>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-10"
          style={{ maxWidth: "900px" }}
        >
          <form onSubmit={onSubmit}>
            <div className="md:flex w-full">
              <div className="w-full  py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
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
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                      {!errors.firstName ? (
                        <span></span>
                      ) : (
                        <span className="absolute -bottom-6">
                          <Message variant="error">{errors.firstName}</Message>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5 relative">
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
                        // error={errors.lastName}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                      {!errors.lastName ? (
                        <span></span>
                      ) : (
                        <span className="absolute -bottom-6">
                          <Message variant="error">{errors.lastName}</Message>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-1">
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
                        // error={errors.email}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                      {!errors.email ? (
                        <span></span>
                      ) : (
                        <span className="absolute -bottom-6">
                          <Message variant="error">{errors.email}</Message>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-1">
                  <div className="w-full px-3 mb-12">
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
                        // error={errors.password}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                      {!errors.password1 ? (
                        <span></span>
                      ) : (
                        <span className="absolute -bottom-6">
                          <Message variant="error">{errors.password1}</Message>
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
                        // error={errors.password}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                      {!errors.password2 ? (
                        <span></span>
                      ) : (
                        <span className="absolute -bottom-6">
                          <Message variant="error">{errors.password2}</Message>
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
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500">
                      Login Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;