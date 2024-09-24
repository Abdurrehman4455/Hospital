import React from 'react'
import ServiceCard from './ServiceCard'
const Hero = () => {
  return (
    <div className='flex justify-center flex-col '>
      <div className='flex justify-center bg-gray-50'>
     <h1 className='text-4xl font-bold hover:text-red-500  text-red-600'>Services</h1>
     </div>
    <ServiceCard/>
    </div>
  )
}

export default Hero;
