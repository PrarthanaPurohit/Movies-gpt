import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-justify leading-relaxed'>{overview}</p>
        <div className='flex space-x-4'>
            <button className='bg-white hover:bg-opacity-70 text-black font-semibold py-2 px-6 text-lg  opacity-80 rounded-md transition'>Play</button>
            <button className='bg-gray-400 hover:bg-opacity-50 text-white font-semibold py-2 px-6 text-lg opacity-50 rounded-md transition'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle