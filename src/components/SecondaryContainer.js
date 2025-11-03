import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
     movies?.NowPlayingMovies?.results && (
      <>
        {/* ✅ Desktop UI */}
        <div className="hidden sm:block bg-black w-screen">
          <div className="relative z-20 -mt-72 pl-12">
            <MovieList title="Now Playing Movies" movies={movies?.NowPlayingMovies} />
            <MovieList title="Popular Movies" movies={movies?.popularMovies} />
            <MovieList title="Popular Series" movies={movies?.popularSeries} />
            <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
            <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
            <MovieList title="Top Rated Series" movies={movies?.topRatedSeries} />
          </div>
        </div>

        {/* ✅ Mobile UI */}
        <div className="sm:hidden bg-black w-screen pb-8">
          <div className="relative z-20 mt-8 px-3">
            <MovieList mobile title="Now Playing" movies={movies?.NowPlayingMovies} />
            <MovieList mobile title="Popular" movies={movies?.popularMovies} />
            <MovieList mobile title="Trending Series" movies={movies?.popularSeries} />
            <MovieList mobile title="Top Rated" movies={movies?.topRatedMovies} />
            <MovieList mobile title="Upcoming" movies={movies?.upcomingMovies} />
            <MovieList mobile title="Top TV" movies={movies?.topRatedSeries} />
          </div>
        </div>
      </>
  ))
}

export default SecondaryContainer;