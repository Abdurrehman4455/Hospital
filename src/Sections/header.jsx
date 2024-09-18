import React from 'react';
import img from "../Images/image2vector.svg";
import imgs from"../Images/hospital.svg";

const Header = () => {
  return (
    <div className='h-[300px] md:h-[400px] lg:h-[500px] rounded-lg w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between bg-red-800 mt-2'>
      <div className='w-full md:w-[50%] flex flex-col font-lora text-[16px] md:text-[24px] lg:text-[32px] text-white justify-center p-4'>
        <h1 className='font-lora text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
          Welcome to Fast Medical Services
        </h1>
        <div className='flex justify-start w-full mt-4'>
          <p className='text-sm md:text-base lg:text-lg'>
            Our healthcare facility provides top-quality medical services, tailored to each patient's needs. With advanced technology and a skilled team, we offer comprehensive care, from routine check-ups to specialized treatments. Your health and well-being are our top priorities.
          </p>
        </div>
        <div>
          <button className='px-2 py-5 bg-white text-red-700 w-[20%] text-[15px] rounded-full mt-3 hover:bg-red-600 hover:text-white'>Book appoiment</button>
          <button className='px-2 py-5 bg-white text-red-700 w-[20%] text-[15px] rounded-full mt-3 hover:bg-red-600 hover:text-white ml-3'>Learnmore</button>
        </div>
      </div>

      <div className='w-full md:w-[40%] flex items-center justify-center'>
        <img src={imgs} alt="Healthcare" className='w-[150px] md:w-[250px] lg:w-[300px]' />
      </div>
    </div>
  );
};

export default Header;
