import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    movies?.NowPlayingMovies?.results && (
    <div className= 'bg-black w-screen overflow-hidden'>
      <div className='relative z-20 -mt-80 pl-12'>
      <MovieList title={"Now Playing"} movies={movies?.NowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
      
    </div>)
  )
}

export default SecondaryContainer