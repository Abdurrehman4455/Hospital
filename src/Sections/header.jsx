import React from 'react'
import img from"../Images/image2vector.svg"


const header = () => {
  return (
    <div className='h-[500px] rounded-lg w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between bg-slate-300'>
    <div className='w-full md:w-[50%]  flex items-center font-roboto text-[20px] md:text-[50px] text-white p-4'>
     <img src={img} alt='a'></img>
      <h1 className='text-red-600 font-bold text-[30px]'>Welcome to Fast</h1>
      <span className=' font-semibold ml-5  text-[30px]'>medical services</span>
    </div>
    <div className='w-full md:w-[40%] flex items-center justify-center'>
      <h1>knsdfdfn</h1>
    </div>
  </div>
  
  )
}

export default header
