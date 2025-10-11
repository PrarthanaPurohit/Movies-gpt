
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";


const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  
  return <div><iframe width="560"
   height="315" 
   src={"https://www.youtube.com/embed/" + trailerVideo?.key}  //can use trailerVideo?.key
    title="YouTube video player" 
    frameborder="0"
     allow="accelerometer;
      autoplay; clipboard-write; 
      encrypted-media; gyroscope;
       picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe></div>;
};

export default VideoBackground;
