import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies}) => {

    console.log(movies)
  return (
    <div className='px-6 ' >
        <h1 className='text-lg text-white py-1'>{title}</h1>
        <div className='flex overflow-auto scrollbar-hide space-x-4 p-4'>
        
        <div className='flex '>
            {movies?.results?.map((movie) => ( <MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
            
        </div>
    </div>
    </div>
    
  )
}

export default MovieList;