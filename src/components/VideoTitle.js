import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-red-500 text-black p-2 px-8 text-lg  rounded-md'>Play</button>
            <button className='bg-gray-500 text-black p-2 px-8 text-lg opacity-20 rounded-md'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle