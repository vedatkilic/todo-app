import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";

import Logo from "../../assets/logo.svg"
import {signUp} from "../../services/auth.service";
import {useAuth} from "@reactivers/hooks";

const SignupPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const { token, isLoggedIn, login } = useAuth()
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) {
            signUp({username, email: username, password}).then(response => login(response.data));
        }
    }

    if (token && isLoggedIn) {
        return <Navigate to='/' />
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-8 h-8 mr-2" src={Logo}
                     alt="logo" />
                Todo List
            </a>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign up
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                   placeholder="name@lastname.com" required="" onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                   required="" onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="confirm-password"
                                   className="block mb-2 text-sm font-medium text-gray-900">Confirm
                                password</label>
                            <input type="password" name="confirm-password" id="confirm-password"
                                   placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                   required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                       required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500">I
                                    accept the <a
                                        className="font-medium text-blue-600 hover:underline"
                                        href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleSubmit}
                        >
                            Sign up
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account?
                            <Link to={"/login"} className="ml-1 font-medium text-blue-600 hover:underline">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
