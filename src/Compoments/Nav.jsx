import React from 'react'
import { route, Routes } from '../Constants/Constants';
import {Link} from 'react-router-dom';
import  { useState } from 'react';
import img from"../Images/image2vector.svg"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <nav className="flex justify-center items-center border-2 bg-red-800  rounded-lg w-full h-[100px] px-4">
    <div className="text-white w-[50%]">
      <img src={img } alt='a 'height={300} width={100} className='max-sm:w-[30%] max-sm:mb-2'></img>
    </div>
    <div className="md:hidden max-sm:flex-col">
      <button
        className="text-white"
        onClick={toggleMenu}
      >
         <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 10h20v2H0zM0 17h20v2H0z" />
          </svg>
      </button>
    </div>
    <div className={`w-full md:w-auto md:flex ${isMenuOpen ? 'block' : 'hidden'} max-sm:text-right max-sm:text-[10px]`}>
      <ul className="space-x-2 text-white  font-serif font-bold md:flex max-sm:flex-col">
        <li>

        </li>
        <li>
          <Link className="hover:text-red-500" to="/Aboutus">About js</Link>
        </li>
        <li>
          <Link className="hover:text-red-500" to="/login">Login</Link>
        </li>
        <li>
          <Link className="hover:text-red-500" to="/register">Register</Link>
        </li>
      </ul>
    </div>
    <div className='ml-10 max-sm:hidden'>
      <input type='search' name='serac'placeholder='  Search' className='rounded-lg p-2  text-re'></input>
    </div>
  </nav>
);
};

export default Nav
