import React from "react";
import {Link} from "react-router-dom";
// import Logo from "./Logo.png"
// import { TRANSLATETEXT } from "../utils/mutations";
// import {useMutation} from '@apollo/client'


export default function Home() {
  return (
    <div>
      <section
        className="py-24 md:py-32 bg-white"
        style={{
          backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <Link className="inline-block mb-6" to="/">
                <img
                  className="h-16"
                  src= ""  
                  alt=""
                />
              </Link>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Welcome to F.A.S.T
              </h3>
              <p className="text-lg text-coolGray-500 font-medium">Sign In</p>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="dev@shuffle.dev"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      className="form-checkbox appearance-none"
                      type="checkbox"
                    />
                    <img
                      className="absolute top-1/2 transform -translate-y-1/2 left-0"
                      src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                      alt=""
                    />
                    <span className="ml-7 text-xs text-coolGray-800 font-medium">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="w-full md:w-auto mt-1">
                  <Link
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                    to="/Signup"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <Link
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                to="/PatientIntake"
              >
                Sign In
              </Link>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Don't have an account?
                </span>{" "}
                <Link
                  className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                  to="/SignUp"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Link
        className="inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
        to="/LanguageSelect"
      >
        Select Another Language
      </Link>
    </div>
  );
}
