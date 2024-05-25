import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Herosection = () => {
  return (
    <div className='flex-flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide w-[70%] m-auto'>VirtualR build tools <span className='text-[#ED6816]'>for</span> <span className='gradient-text'>developers</span></h1>
        <p className='mt-10 text-lg text-center text-[#656565] w-[70%] m-auto'>Empower your craetivity and bring your VR app ideas to life with our initiative development tools.Get started today and turn your imagination into impressive reality</p>
        <div className='flex justify-center my-10'>
          <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
            Start for free
          </a>
           <a href="#" className=' border py-3 px-4 mx-3 rounded-md'>Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-[45%] border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src ={video1} type='video/mp4'/>
          </video>
          <video autoPlay loop muted className='rounded-lg w-[45%] border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src ={video2} type='video/mp4'/>
          </video>
        </div>
    </div>
  )
}

export default Herosection;