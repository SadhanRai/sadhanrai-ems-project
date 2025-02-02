import React from "react";
import { useState } from "react";

const login2 = ({ handleLogins }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit(b) {
        console.log("submited email is ", email + "and password is ", password)

        b.preventDefault()
        setPassword('');
        setEmail('');
        handleLogins(email, password);//this code recive the data and send to the user 
        console.log("now email is ", email)
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Login
                    </h2>
                    <form className="flex flex-col space-y-6" onSubmit={submit}>
                        <div>
                            <input
                                value={email}

                                onChange={(a) => {
                                    // setEmail("this ");
                                    setEmail(a.target.value);
                                    console.log("change vayo ", a.target.value);
                                }}
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                value={password}
                                onChange={(a) => {
                                    setPassword(a.target.value)
                                    console.log("password typed ", password)
                                }}
                                type="password"
                                placeholder="Enter your password E"
                                className="w-full px-4 py-3 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-400 transition duration-300"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-400 text-sm">
                            <a
                                href="#"
                                className="text-emerald-400 hover:text-emerald-500 transition"
                            >
                                Sign up
                            </a>
                        </p>

                    </form>




                </div>
            </div>

            <div className="flex w-full flex-wrap items-center content-center">
                <div className="w-full sm:w-1/2 bg-red-500">hello my name is sda</div>
                <div className="w-full sm:w-1/2 bg-blue-500">hello my name is sda</div>
            </div>

        </>
    );
};

export default login2;
