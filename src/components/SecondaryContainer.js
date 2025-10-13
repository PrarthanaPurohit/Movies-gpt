import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    movies?.NowPlayingMovies?.results && (
    <div className= 'bg-black w-screen'>
      <div className='relative z-20 -mt-80 pl-12'>
      <MovieList title={"Now Playing Movies"} movies={movies?.NowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Popular Series"} movies={movies?.popularSeries}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
      <MovieList title={"Top Rated Series"} movies={movies?.topRatedSeries}/>
      </div>
      
    </div>)
  )
}

export default SecondaryContainer;