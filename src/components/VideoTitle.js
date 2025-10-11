import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-justify leading-relaxed'>{overview}</p>
        <div className='flex space-x-4'>
            <button className='bg-red-500 hover:bg-red-800 text-black font-semibold py-2 px-6 text-lg  rounded-md transition'>Play</button>
            <button className='bg-gray-500 hover:bg-gray-500 text-white font-semibold py-2 px-6 text-lg opacity-70 rounded-md transition'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle