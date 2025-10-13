
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector( store => store.gpt.showGptSearch);

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
      {showGptSearch ? (
        <GptSearch /> ) : (
          //wrap under react element coz jsx element can have only one parent
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
        
        
      
      
    </div>
  );
};

export default Browse;
