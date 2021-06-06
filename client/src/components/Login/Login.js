import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className=" min-h-screen bg-white dark:bg-gray-200 flex items-center justify-center">
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
                            <p className="text-gray-500 dark:text-gray-400">
                                Sign in to access your account
                            </p>
                        </div>
                        <div className="m-7">
                            <form action="">
                                <div className="mb-6">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@company.com"
                                        className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-300 dark:bg-gray-100 dark:text-white dark:placeholder-gray-500 dark:border-gray-200 dark:focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            for="password"
                                            className="text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#!"
                                            className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none focus:border-indigo-300 dark:bg-gray-100 dark:text-white dark:placeholder-gray-500 dark:border-gray-200 dark:focus:border-gray-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="button"
                                        className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <p className="text-sm text-center text-gray-400">
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
