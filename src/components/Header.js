import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
        navigate("/browse");
      } else {
        //user is signed out
        dispatch(removeUser());
        navigate("/");
       
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

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
    <div className="fixed top-0 left-0 w-full px-8 py-4 
    bg-gradient-to-b from-black/20 to-black
    z-50 flex items-center justify-between">

      {/* Left: Netflix Logo */}
      <img
        className="w-44"
        src={LOGO}
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

