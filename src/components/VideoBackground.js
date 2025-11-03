import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //calling the hook to update the store with movieId's trailer
  useTrailerVideo(movieId);
  //Once store updated, useSelector re-renders UI

  return (
    <>
      {/* ✅ Desktop Version */}
      <div className="hidden sm:block w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* ✅ Mobile Version */}
      <div className="sm:hidden w-screen">
        <iframe
          className="w-full h-[300px] rounded-md"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
