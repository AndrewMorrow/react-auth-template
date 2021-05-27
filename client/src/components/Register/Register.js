import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <main>
            <div className="flex items-center min-h-screen bg-white dark:bg-primary-dark">
                <div className="container mx-auto ">
                    <Link to="/login" className="text-primary-light">
                        Login
                    </Link>
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <h1 className="font-semibold text-3xl my-3 text-primary-light">
                                Register Here
                            </h1>
                            <p className="text-secondary">
                                Sign up for a new account here
                            </p>
                        </div>

                        <div className="flex m-4 justify-between">
                            <div className=" ">
                                <form action="">
                                    <div>
                                        <label
                                            for="firstName"
                                            className="text-secondary-light"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="input"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="w-full py-2 px-3"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="">
                                <form action="">
                                    <div className="mb-6">
                                        <label
                                            for="lastName"
                                            className="text-secondary-light"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="input"
                                            name="firstName"
                                            placeholder="Last Name"
                                            className="w-full py-2 px-3"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
