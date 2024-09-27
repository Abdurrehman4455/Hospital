import React from 'react'
import Header from '../Sections/header'
import Hero from '../Sections/Hero';
import Doctor from '../Sections/Doctor';
const Home = () => {
  return (
    <div className='bg-white'>
      <section  className='lora'>
       <Header/>

       </section>

       <section>
        <Hero/>
       </section>

       <section>
          <div className='flex justify-center text-4xl mt-2 font-lora font-bold text-red-500 hover:text-red-400'>
          <h1>Expereinced Doctors</h1>
          </div>
          <Doctor/>
       </section>
       
    </div>
  )
}

export default Home
