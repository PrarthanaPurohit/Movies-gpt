import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="top-0 left-0 w-full px-8 py-4 
    bg-gradient-to-b from-gray-900 to-black 
    z-10 flex items-center justify-between">

      {/* Left: Netflix Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* Right: Sign out + User profile */}
      <div className="flex items-center gap-10 ml-auto">
    
        {user && (
          <div className="flex flex-col items-center">
      <img
        src={user.photoURL}
        alt="user icon"
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
      />
      <span className="text-white text-sm mt-1">{user.displayName || "User"}</span>
    </div>
          
        )}

        <button
          onClick={handleSignOut}
          className="bg-red-700 hover:bg-red-800 text-white font-semibold 
          rounded-lg px-1 py-1 -translate-y-1 transition duration-300 ease-in-out"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;

