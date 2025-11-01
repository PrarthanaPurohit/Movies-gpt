import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ movie, posterPath }) => {
  // Prefer movie.poster_path if movie object exists, else use direct posterPath prop
  const poster = movie?.poster_path || posterPath;

  // If still no poster, skip
  if (!poster) return null;

  return (
    <div className="w-36 pr-2 transition-transform hover:scale-105">
      <img
        className="rounded-lg shadow-md"
        alt={movie?.title || movie?.name || "movie"}
        src={IMG_CDN_URL + poster}
      />
    </div>
  );
};

export default MovieCard;
