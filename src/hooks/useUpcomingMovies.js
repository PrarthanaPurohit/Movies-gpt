import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
    //FETCH DATA FROM API AND UPDATE STORE
    const dispatch = useDispatch();
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
        getUpcomingMovies();
      }, []);
    

};
export default useUpcomingMovies;