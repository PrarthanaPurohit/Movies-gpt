import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
    //FETCH DATA FROM API AND UPDATE STORE
    const dispatch = useDispatch();

    const upcomingMovies = useSelector( store => store.movies.upcomingMovies);

      const getUpcomingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        dispatch(addUpcomingMovies(json));
      };
    
      useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
      }, []);
    

};
export default useUpcomingMovies;