
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {

  //call the hook
  useNowPlayingMovies();

    

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
