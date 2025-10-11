import React from 'react'
import  { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


const useTrailerVideo = (movieId) => {

    const [trailerId, setTrailerId] = useState(null);
    
      const dispatch = useDispatch();
    
      
    
      const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        //console.log(json);
    
        const trailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];
        //console.log(trailer);
        setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
        
    
      
      };
      //called using useEffect
      useEffect(() => {
        getMovieVideo();
    
      }, []);
  return (
    <div>useTrailerVideo</div>
  )
}

export default useTrailerVideo