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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
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
              displayName: name.current.value,
              photoURL:
                "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate("/browse");
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
            navigate("/browse");
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
      <div className="absolute top-0 left-0 w-full px-8 py-4 bg-gradient-to-b to-black z-10">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
      </div>
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
        className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white"
      >
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
        <button
          className=" p-3 m-2 w-full bg-red-600 rounded hover:bg-red-700 transition"
          onClick={handleButtonClick}
        >
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
