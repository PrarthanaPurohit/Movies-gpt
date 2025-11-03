import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <>
      {/* ✅ Desktop UI */}
      <div className="hidden sm:block w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4 text-justify leading-relaxed">{overview}</p>
        <div className="flex space-x-4">
          <button className="bg-white hover:bg-opacity-70 text-black font-semibold py-2 px-6 text-lg opacity-80 rounded-md transition">
            Play
          </button>
          <button className="bg-gray-400 hover:bg-opacity-50 text-white font-semibold py-2 px-6 text-lg opacity-50 rounded-md transition">
            More info
          </button>
        </div>
      </div>

      {/* ✅ Mobile UI */}
      <div className="sm:hidden w-screen pt-24 px-4 pb-6 absolute text-white bg-gradient-to-b from-black/80">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>

        <p className="text-sm mb-4 leading-relaxed max-w-[50%]">
          {overview?.slice(0, 100)}...
        </p>

        <div className="flex gap-2">
          <button className="bg-white text-black font-semibold py-2 px-4 text-sm rounded-md flex items-center gap-1 opacity-90">
             Play
          </button>
          <button className="bg-gray-400 text-white font-semibold py-2 px-4 text-sm rounded-md opacity-70 flex items-center gap-1">
             More Info
          </button>
        </div>
      </div>
    </>
  )
}

export default VideoTitle