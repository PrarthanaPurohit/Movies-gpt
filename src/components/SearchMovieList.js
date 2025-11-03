import React from "react";
import MovieCard from "./MovieCard";

const SearchMovieList = ({ results }) => {
  if (!results) return null;
  

  return (
    <>
      {results
      .filter(movie => movie.poster_path) // only keep movies with poster
      .map((movie) => (
        <div key={movie.id} className="flex-shrink-0 w-36">
          <img
            className="rounded-lg hover:scale-110 duration-300 shadow-lg"
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                : "/no-img.png"
            }
            alt={movie.title}
          />
          <p className="text-xs text-center text-gray-300 mt-1">{movie.title}</p>
        </div>
      ))}
    </>
  );
};


export default SearchMovieList;

