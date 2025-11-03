import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG, USER } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
  //for reference
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //Sign up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  //Handle validation
  const handleButtonClick = () => {
    //validate form data
    let msg;

    if (isSignInForm) {
      // Only validate email and password for Sign In
      msg = checkValidData(email.current.value, password.current.value, "");
    } else {
      // Validate email, password, and name for Sign Up
      msg = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    setErrorMessage(msg);

    //create a user
    if (msg === null) {
      //Sign in/ Sign up

      if (!isSignInForm) {
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value, //name we signed up with
              photoURL:
              USER  ,
            })
              .then(() => {
                // Profile updated!
                //update redux sotre
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        //sign in logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
  <div className="relative h-screen w-screen">
    
    {/* Background */}
    <img
      className="absolute inset-0 h-full w-full object-cover"
      src={BG}
      alt="bg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    <Header />

    {/* ✅ DESKTOP LOGIN UI */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-3/12 p-12 bg-black/80 rounded-lg text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h2>

      {!isSignInForm && (
        <input ref={name} className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Full Name"/>
      )}

      <input ref={email} className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Email"/>
      <input ref={password} type="password" className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Password"/>

      <p className="text-red-500 p-2">{errorMessage}</p>

      <button className="p-3 m-2 w-full bg-red-600 rounded" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      <p className="p-3 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign-Up now!" : "Already a user? Sign-In"}
      </p>
    </form>

    {/* 📱 ✅ MOBILE LOGIN UI */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="md:hidden absolute top-1/3 left-1/2 -translate-x-1/2 w-[90%] p-6 
      bg-black/80 rounded-lg text-white"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h2>

      {!isSignInForm && (
        <input ref={name} className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Full Name"/>
      )}

      <input ref={email} className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Email"/>
      <input ref={password} type="password" className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Password"/>

      <p className="text-red-500 text-sm mb-1">{errorMessage}</p>

      <button className="p-2 w-full bg-red-600 rounded text-sm" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      <p className="text-center text-xs mt-2 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign-Up now!" : "Already a user? Sign-In"}
      </p>
    </form>
  </div>
);

};

export default Login;
