import React from 'react'
import { useState } from 'react'
// new things that i have learned from this.
// 1. useState const should be under the login or page function like this.
// 2. in use state email is blanck and setEmails is the variables that can bring and take data
// 3. e.proventDefault works to stop extra browser reload while submiting
// 4.    variables.target.values contain targeted lines value, we can get placeholder aswell
// HERE VALUE IS THE REACT VARIBALE LIKE A PROPS 
// onChange is also props 


const Login = () => {

    const [email, setEmails] = useState('')
    const [password, setPasswords] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("wow ! form submited hai gaich!!")
        console.log("email is ", email + " and password is ", password)
        setEmails('');
        setPasswords('');
    }
    return (

        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
                    <form onSubmit={submitHandler} className="flex flex-col space-y-6">
                        <div>
                            <input
                                value={email}
                                onChange={(a) => {
                                    setEmails(a.target.value)
                                    //a is the identifier kasko value chai target garne vanda a ko value 
                                    // console.log("changing")
                                    console.log(a.target.value)
                                }}

                                type="email"
                                placeholder="Enter your email" required
                                className="w-full px-4 py-3 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                value={password}
                                onChange={(b) => {
                                    setPasswords(b.target.value); //now  setPasswords asigned the new value 

                                    console.log(b.target.value)
                                }}
                                type="password"
                                placeholder="Enter your password"
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
                            Don't have an account?{" "}
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


        </>
    )
}

export default Login
