import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-24  flex justify-center">
      <form className="bg-black/60 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-12 p-3 ">
        <input
          className="col-span-10 m-2 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-300"
          type="text"
          placeholder= {lang[langKey].searchPlaceholder}
        />
        <button
          type="submit"
          className="col-span-2 m-2 bg-red-700 hover:bg-red-800 text-white font-semibold 
          rounded-lg px-4 py-3 transition-all duration-300 ease-in-out shadow-md hover:shadow-red-700/40"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

