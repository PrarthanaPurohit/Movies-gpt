import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularSeries } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularSeries = () => {
    //FETCH DATA FROM API AND UPDATE STORE
    const dispatch = useDispatch();

    const popularSeries = useSelector( store => store.movies.popularSeries);

      const getPopularSeries = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        dispatch(addPopularSeries(json));
      };
    
      useEffect(() => {
        !popularSeries && getPopularSeries();
      }, []);
    

};
export default usePopularSeries;