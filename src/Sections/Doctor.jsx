import React from 'react';
import DoctorCard from './DoctorCard';
import { useState } from 'react';
const Doctor = () => {
  const doctors = [
    
    {
      name: 'Dr. Jane Smith',
      specialty: 'Neurologist',
      hospital: 'Mayo Clinic',
      image: 'https://dims.healthgrades.com/dims3/MMH/format/webp/?url=https:%2F%2Fphotos.healthgrades.com%2Fimg%2Fsilhouettes%2Fsilhouette-female_w120h160_v1.jpg%3Fname%3DDr.%2520Jane%2520Smith%252C%2520MD'
    },
    {
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      hospital: 'Cleveland Clinic',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      hospital: 'Cleveland Clinic',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      hospital: 'Cleveland Clinic',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      hospital: 'Cleveland Clinic',
      image: 'https://via.placeholder.com/100',
    },
  ];
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    
    <div className=" flex justify-center items-center mt-3 text-[17px] font-bold text-red-500 hover:text-red-600 max-sm:text-[15px]">
      {/* Card container*/}
      
      <div className="flex justify-center items-center mt-8">
        {/* Responsive layout for doctor cards */}
        <div className="flex  justify-center gap-6 max-sm:flex-col max-sm:items-center">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              hospital={doctor.hospital}
              image={doctor.image}
            />
          ))}
        </div>
        
      </div>
      <div className='flex space-x-5'>
           
      </div>
    </div>
    
  );
};

export default Doctor;
