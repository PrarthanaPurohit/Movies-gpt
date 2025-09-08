import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  //for reference 
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //Sign up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //Handle validation
  const handleButtonClick = () =>{
    //validate form data
    const msg = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(msg);

    //Sign in/ Sign up
  };


  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div>
        {/* bg image */}
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg"
          alt="bg"
        ></img>
      </div>
      
      {/* Overlay for dimming background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* login form */}
      <form
      onSubmit={(e) => e.preventDefault()}
       className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
          ref={name}
            className="p-3 m-2 w-full rounded bg-gray-800 focus:outline-none"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
        ref={email}
          className="p-3 m-2 w-full rounded bg-gray-800 focus:outline-none"
          type="text"
          placeholder="Email"
        ></input>

        <input
          ref={password}
          className="p-3 m-2 w-full rounded bg-gray-800 focus:outline-none"
          type="password"
          placeholder="Password"
        ></input>
        
        <p className="text-red-600 font-bold m-2 p-2">{errorMessage}</p>
        <button className=" p-3 m-2 w-full bg-red-600 rounded hover:bg-red-700 transition"
        onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className=" cursor-pointer m-2 p-3" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign-Up now!"
            : "Already a user! Sign-In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
