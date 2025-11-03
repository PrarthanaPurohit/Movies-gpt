import React, { useState } from "react";
import Header from "./Header";
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
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleSubmit = () => {
    const msg = checkValidData(email, password, isSignInForm ? "" : name);
    setErrorMessage(msg);

    if (msg !== null) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: USER,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid, email, displayName, photoURL })
              );
            })
            .catch((err) => setErrorMessage(err.message));
        })
        .catch((err) => setErrorMessage(err.code + " - " + err.message));
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email, password)
        .catch((err) => setErrorMessage(err.code + " - " + err.message));
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <img className="absolute inset-0 h-full w-full object-cover" src={BG} alt="bg" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Header />

      {/* Desktop */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black/80 rounded-lg text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input value={name} onChange={(e) => setName(e.target.value)} className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Full Name" />
        )}

        <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 m-2 w-full bg-gray-800 rounded" placeholder="Password" />

        <p className="text-red-500 p-2">{errorMessage}</p>

        <button className="p-3 m-2 w-full bg-red-600 rounded" onClick={handleSubmit}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up now!" : "Already a user? Sign In"}
        </p>
      </form>

      {/* Mobile */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:hidden absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] p-6 bg-black/80 rounded-lg text-white"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input value={name} onChange={(e) => setName(e.target.value)} className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Full Name" />
        )}

        <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 mb-2 w-full bg-gray-800 rounded text-sm" placeholder="Password" />

        <p className="text-red-500 text-sm mb-1">{errorMessage}</p>

        <button className="p-2 w-full bg-red-600 rounded text-sm" onClick={handleSubmit}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-center text-xs mt-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up now!" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
