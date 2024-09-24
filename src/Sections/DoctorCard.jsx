import React from 'react';

const DoctorCard = ({ name, specialty, hospital, image }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-red-500 text-white p-6 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-24 h-24 rounded-full mx-auto border-4 border-white"
        src={image}
        alt={name}
      />
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{specialty}</p>
        <p className="mt-2 text-gray-200">{hospital}</p>
      </div>
      <div className="mt-4">
        <button className="w-full bg-white text-red-500 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
