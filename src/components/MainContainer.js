import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {

    //fetch data from store
    const movies = useSelector((store) => store.movies?.NowPlayingMovies?.results);

//     const fullStore = useSelector((store) => store);
// console.log("FULL STORE:", fullStore);

      // Early return if movies not loaded or empty
  if (!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview= {overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer;