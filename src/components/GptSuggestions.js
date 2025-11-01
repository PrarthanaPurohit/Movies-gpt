import React from "react";
import { useSelector } from "react-redux";
import SearchMovieList from "./SearchMovieList";

const GptSuggestions = () => {
  const { movieResults, movieNames } = useSelector(store => store.gpt);

  if (!movieResults || !movieNames) return null;

  return (
    <div className="w-full px-6 py-4 mt-10 bg-black/70 backdrop-blur-xl rounded-xl">
      {movieNames.map((name, i) => (
        <div key={i} className="mb-10">
          {/* Movie Title */}
          <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>

          {/* Scroll Row */}
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <SearchMovieList results={movieResults[i]} />
          </div>
        </div>
      ))}
    </div>
  );
};


export default GptSuggestions;

