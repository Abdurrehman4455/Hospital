import React from 'react'
import DoctorCard from './DoctorCard';
const Doctor = () => {
  const doctors = [
    {
      name: 'Dr.kishorekumar',
      specialty: 'Cardiologist',
      hospital: 'John Hopkins Hospital',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Neurologist',
      hospital: 'Mayo Clinic',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      hospital: 'Cleveland Clinic',
      image: 'https://via.placeholder.com/100',
    },
  ];
  return (
    <div className=' w-[]flex justify-center items-center mt-3 text-[17px] font-bold text-red-500 hover:text-red-600 max-sm:text-[15]px'>
     
     <div className="flex justify-center items-center mt-8">
        <div className="flex space-x-8 max-sm:flex-col max-sm:space-y-2 max-sm:justify-center">
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
    </div>
  )
}

export default Doctor
