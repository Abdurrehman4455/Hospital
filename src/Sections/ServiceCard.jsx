import React from 'react';
import { PiAmbulanceLight } from "react-icons/pi";
import { FaNotesMedical } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa";
const ServiceCard = () => {
  return (
    <div className='mt-5'>
      <div className='flex justify-evenly items-center space-x-5 max-sm:flex-col max-sm:items-center max-sm:space-y-3 max-sm:mr-4'>
        {/* Service Card 1 */}
        <div className='w-[30%] h-[22rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%] max-sm:ml-5'>
          <div className='w-16 h-16 bg-red-500 flex justify-center items-center rounded-full mb-4 mt-6'>
           <PiAmbulanceLight size={"2rem"} color='white'/>
          </div>
          <h2 className='text-lg font-semibold mb-2'>Ambulance services</h2>
          <p className='text-gray-600 mb-4 font-roboto'>
          Need emergency help? Our 24/7 Ambulance Service is here for you, fully equipped with advanced medical care during transport.

Call Now: +1 800-123-4567

We ensure you get the urgent care you need, fast
          </p>
          <button
  className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'
  onClick={() => window.location.href = 'tel:+18001234567'}
>
  call
</button>
        </div>

        {/* Service Card 2 */}
        <div className='w-[30%] h-[22rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%] max-sm:mr-2'>
          <div className='w-16 h-16  flex justify-center items-center rounded-full mb-4 bg-red-500 mt-3'>
          <FaNotesMedical size={"2rem"}color='white'/>
          </div>
          <h2 className='text-lg font-semibold mb-2'>Medical services</h2>
          <p className='text-gray-600 mb-4'>
          We provide both medical tests and checkups to monitor and maintain your health. Our services include:

          We provide both medical tests and checkups to monitor and maintain your health. g
          </p>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'>
            Learn More
          </button>
        </div>

        {/* Service Card 3 */}
        <div className='w-[30%] h-[22rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%]'>
          <div className='w-16 h-16 bg-red-500 flex justify-center items-center rounded-full '>
          <FaLaptopMedical size={"2rem"} color='white' />
          </div>
          <h2 className='text-lg font-semibold mb-2'>online appoitments</h2>
          <p className='text-gray-600 mb-4'>
          Online medical consultations offer easy access to healthcare from home. Patients can discuss symptoms, get diagnoses, and prescriptions remotely, making it ideal for non-emergency issues and follow-ups. Available 24/7, it provides immediate, convenient care.


          </p>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;



