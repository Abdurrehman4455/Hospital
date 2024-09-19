import React from 'react';

const ServiceCard = () => {
  return (
    <div className='mt-5'>
      <div className='flex justify-evenly items-center space-x-5 max-sm:flex-col max-sm:items-center max-sm:space-y-3 max-sm:mr-4'>
        {/* Service Card 1 */}
        <div className='w-[30%] h-[20rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%] max-sm:ml-5'>
          <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-full mb-4'>
            <svg className='w-8 h-8 text-blue-500' fill='currentColor' viewBox='0 0 24 24'>
              {/* Add an SVG icon for medical services here */}
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6H8l4-8v6h4l-3 8z' />
            </svg>
          </div>
          <h2 className='text-lg font-semibold mb-2'>Service A</h2>
          <p className='text-gray-600 mb-4'>
            Description of the medical service, highlighting key benefits.
          </p>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 '>
            Learn More
          </button>
        </div>

        {/* Service Card 2 */}
        <div className='w-[30%] h-[20rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%] max-sm:mr-2'>
          <div className='w-16 h-16  flex justify-center items-center rounded-full mb-4'>
            <svg className='w-8 h-8 text-blue-500' fill='currentColor' viewBox='0 0 24 24'>
              {/* Add an SVG icon for medical servivces here */}
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6H8l4-8v6h4l-3 8z' />
            </svg>
          </div>
          <h2 className='text-lg font-semibold mb-2'>Service B</h2>
          <p className='text-gray-600 mb-4'>
            Description of the medical service, highlighting key benefits.
          </p>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300'>
            Learn More
          </button>
        </div>

        {/* Service Card 3 */}
        <div className='w-[30%] h-[20rem] p-6 border-[3px] border-red-500 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center text-center max-sm:w-[90%]'>
          <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-full mb-4'>
            <svg className='w-8 h-8 text-blue-500' fill='currentColor' viewBox='0 0 24 24'>
              {/* Add an SVG icon for medical services here */}
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6H8l4-8v6h4l-3 8z' />
            </svg>
          </div>
          <h2 className='text-lg font-semibold mb-2'>Service C</h2>
          <p className='text-gray-600 mb-4'>
            Description of the medical service, highlighting key benefits.
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



