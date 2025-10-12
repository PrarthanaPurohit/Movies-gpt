
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  //call the hook and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularSeries();
  useTopRatedSeries();

    

  return (
    <div className="bg-black">
      <Header />
      <div className="">
        <MainContainer/>
        <SecondaryContainer/>
      </div>
      
    </div>
  );
};

export default Browse;
