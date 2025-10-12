import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
    //FETCH DATA FROM API AND UPDATE STORE
    const dispatch = useDispatch();
      const getPopularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        dispatch(addPopularMovies(json));
      };
    
      useEffect(() => {
        getPopularMovies();
      }, []);
    

};
export default usePopularMovies;