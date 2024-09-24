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
          <Doctor/>
       </section>
      
    </div>
  )
}

export default Home
