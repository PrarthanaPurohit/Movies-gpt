import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedSeries = () => {
    //FETCH DATA FROM API AND UPDATE STORE
    const dispatch = useDispatch();

    const topRatedSeries = useSelector( store => store.movies.topRatedSeries);

      const getTopRatedSeries = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        //console.log(json);
        dispatch(addTopRatedSeries(json));
      };
    
      useEffect(() => {
        !topRatedSeries && getTopRatedSeries();
      }, []);
    

};
export default useTopRatedSeries;