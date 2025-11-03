import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background Image */}
      <img
        src={BG}
        alt="bg"
        className="fixed top-0 left-0 h-screen w-full object-cover z-0"
      />

      {/* DESKTOP UI */}
      <div className="hidden sm:flex relative z-10 pt-32 flex-col items-center min-h-screen w-full">
        <div className="w-full flex justify-center">
          <GptSearchBar />
        </div>
        <div className="flex justify-center mt-10 w-full">
          <GptSuggestions />
        </div>
      </div>

      {/* MOBILE UI */}
      <div className="sm:hidden relative z-10 pt-24 px-4 flex flex-col items-center min-h-screen w-full">
        
        {/* Search Bar */}
        <div className="w-full">
          <GptSearchBar />
        </div>

        {/* Suggestions (stacked & centered) */}
        <div className="w-full mt-6">
          <GptSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;



