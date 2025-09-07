import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg"
          alt="bg"
        ></img>
      </div>
      {/* Overlay for dimming background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* login form */}
      <form className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <input
          className="p-3 m-2 w-full rounded bg-gray-800 focus:outline-none"
          type="text"
          placeholder="Email"
        ></input>
        <input
          className="p-3 m-2 w-full rounded bg-gray-800 focus:outline-none"
          type="password"
          placeholder="Password"
        ></input>
        <button className=" p-3 m-2 w-full bg-red-600 rounded hover:bg-red-700 transitio">
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default Login;
