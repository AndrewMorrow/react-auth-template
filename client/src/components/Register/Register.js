import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <main>
            <div className="flex items-start min-h-screen bg-white dark:bg-primary-dark lg:items-center">
                <div className="container mx-auto">
                    <Link to="/login" className="text-primary-light">
                        Login
                    </Link>
                    <div className="p-5 ">
                        <div className="text-center mb-5">
                            <h1 className="font-semibold text-3xl my-2 text-primary-light">
                                Register Here
                            </h1>
                            <p className="text-secondary">
                                Sign up for a new account here
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-around flex-wrap  w-3/4 md:px-28 xl:px-36">
                                <div className="mb-4 ">
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
                                                placeholder="Ex. John"
                                                className="w-full py-2 px-3"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="mb-4">
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
                                                placeholder="Ex. Doe"
                                                className="w-full py-2 px-3"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
