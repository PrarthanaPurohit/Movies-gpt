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

      {/* Overlay Content */}
      <div className="relative z-10 pt-32 flex flex-col items-center min-h-screen w-full">
        {/* GPT SEARCH BAR */}
        <div className="w-full flex justify-center">
          <GptSearchBar />
        </div>

        {/* GPT SUGGESTIONS */}
        <div className="flex justify-center mt-10 w-full">
          <GptSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;



