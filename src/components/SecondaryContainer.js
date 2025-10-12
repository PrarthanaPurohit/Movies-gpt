import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies?.NowPlayingMovies)
  return (
    movies?.results && (
    <div className= 'bg-black'>
      <div className='relative z-20 -mt-80 pl-12'>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      </div>
      
    </div>)
  )
}

export default SecondaryContainer