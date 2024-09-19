import React from 'react'
import ServiceCard from './ServiceCard'
const Hero = () => {
  return (
    <div className='flex justify-center flex-col '>
      <div className='flex justify-center bg-gray-50'>
     <h1 className='text-4xl font-bold hover:text-red-500 '>Services</h1>
     </div>
    <ServiceCard className="pt-2"/>
    </div>
  )
}

export default Hero
