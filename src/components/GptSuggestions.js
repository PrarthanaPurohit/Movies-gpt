import React from "react";
import { useSelector } from "react-redux";
import SearchMovieList from "./SearchMovieList";

const GptSuggestions = () => {
  const { movieResults, movieNames } = useSelector(store => store.gpt);

  if (!movieResults || !movieNames) return null;

  return (
    <>
      {/* ✅ DESKTOP UI (unchanged) */}
      <div className="hidden sm:block w-full px-6 py-4 mt-10 bg-black/70 backdrop-blur-xl rounded-xl">
        {movieNames.map((name, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>

            <div
              className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
              style={{ scrollBehavior: "smooth" }}
            >
              <SearchMovieList results={movieResults[i]} />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MOBILE UI */}
      {/* ✅ MOBILE UI — still horizontal scroll */}
      <div className="sm:hidden w-full px-3 py-3 mt-6 bg-black/80 backdrop-blur-xl rounded-lg">
        {movieNames.map((name, i) => (
          <div key={i} className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">{name}</h2>

            <div
              className="flex gap-3 overflow-x-auto scrollbar-hide py-1"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* pass a prop if you want smaller card size */}
              <SearchMovieList results={movieResults[i]} mobile />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default GptSuggestions;

