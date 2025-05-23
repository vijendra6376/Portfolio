import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 1 }}
      className='fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-200 z-20'
    >
      {/* Logo */}
      <div className='text-3xl ' >
        <h1>V</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex md:text-2xl lg:text-xl'>
        {['home', 'about', 'skills', 'certificates', 'contact'].map(
          (section, index) => (
            <li
              key={index}
              className='hover:text-[#8892b0] hover:scale-110 duration-500 cursor-pointer'
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Hamburger Button */}
      <div onClick={handleClick} className='md:hidden z-30'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav ? 'hidden' : 'absolute'
        } top-0 right-0 w-[60%] h-screen opacity-80 bg-black rounded-l-xl text-gray-300 flex flex-col justify-center items-center z-10`}
      >
        {['home', 'about', 'skills', 'certificates', 'contact'].map(
          (section, index) => (
            <li key={index} className='py-6 text-2xl'>
              <Link onClick={handleClick} to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
        {/* Social Links in Mobile Menu */}
        <div className='flex items-center mt-8'>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='https://www.linkedin.com/in/vijendra-kumar-patidar/'
              target='blank'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='https://github.com/vijendra6376'
              target='blank'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center text-gray-300'
              href='mailto:vijendrapatidar01@gmail.com'
            >
              <HiOutlineMail size={30} />
             
            </a>
          </li>
         
        </div>
      </ul>
      </motion.div>

    {/* Social Links */}
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
      className='hidden md:flex lg:flex fixed flex-col top-[35%] left-0 z-10'
    >
      <ul>
        <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/vijendra-kumar-patidar/'
            target='blank'
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/vijendra6376'
            target='blank'
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[40px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='mailto:vijendrapatidar01@gmail.com'
          >
            E-mail <HiOutlineMail size={30} />
          </a>
        </li>
      
      </ul>
    </motion.div>
    </>
  );
};

export default Navbar;
