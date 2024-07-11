// import React, {useState} from 'react'
// import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
// import Logo from '../assets/h.png'
// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
// import {Link} from 'react-scroll'

// const Navbar = () => {
//     const [nav, setNav] = useState(false)
//     const handleClick = () => setNav(!nav)
    
//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#1C1B2E] to-[#302B63] text-gray-300'>
//       <div>
//         <img src={Logo} alt="logo" style={{width: '40px'}} />
//       </div>

//         <ul className='hidden md:flex'>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="home" smooth={true} duration={500}> Home </Link>
//             </li>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="about" smooth={true} duration={500}> About </Link>
//             </li>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="skills" smooth={true} duration={500}> Skills </Link>
//             </li>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="work" smooth={true} duration={500}> Work </Link>
//             </li>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="certificates" smooth={true} duration={500}> Certificates </Link>
//             </li>
//             <li className='hover:text-[#8892b0] hover:scale-105'>
//             <Link to="contact" smooth={true} duration={500}> Contact </Link>
//             </li>
//         </ul>

//         {/*Hamburger Button */}
//       <div onClick={handleClick} className='md:hidden z-10'>
//         {!nav ? <FaBars/> : <FaTimes/>}
//       </div>

//         {/*Mobile Menu */}
//         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#0F0C29] to-[#302B63]  text-gray-300 flex flex-col justify-center items-center'}>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="work" smooth={true} duration={500}> Work </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="certificates" smooth={true} duration={500}> Certifications </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
//             </li>
//         </ul>

//         {/*Social Button */}
//       <div className='flex fixed flex-col top-[35%] left-0'>
//         <ul>
//             <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
//                 <a className='flex justify-between items-center w-full text-gray-300'
//                 href="https://www.linkedin.com/in/hneelabh">LinkedIn<FaLinkedin size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
//                 </a>
//             </li>
//             <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
//                 <a className='flex justify-between items-center w-full text-gray-300'
//                 href="https://www.github.com/hneelabh">Github<FaGithub size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
//                 </a>
//             </li>
//             <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
//                 <a className='flex justify-between items-center w-full text-gray-300'
//                 href="mailto:hneelabh13@gmail.com">E-mail<HiOutlineMail size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
//                 </a>
//             </li>
//             {/* <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300' style={{ background: 'linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)' }}>
//                 <a className='flex justify-between items-center w-full text-gray-300' 
//                 href="https://www.instagram.com/hneelabh">Instagram<FaInstagram size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
//                 </a>
//             </li> */}
//             <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
//                 <a className='flex justify-between items-center w-full text-gray-300'
//                 href="https://drive.google.com/file/d/1_MwrhN7NcH_fHPwk7AZMYTkTGLs7cY0G/view?usp=sharing">Resume<BsFillPersonLinesFill size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
//                 </a>
//             </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/h.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#1C1B2E] to-[#302B63] text-gray-300 z-50'>
      <div>
        <img src={Logo} alt="logo" style={{ width: '40px' }} />
      </div>

      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'work', 'experience', 'certificates', 'contact'].map((item, index) => (
          <motion.li
            key={index}
            className='hover:text-[#8892b0] hover:scale-105 px-4'
            whileHover={{ scale: 1.1, color: '#8892b0' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 flex flex-col justify-center items-center'
        }
      >
        {['home', 'about', 'skills', 'work', 'certificates', 'contact'].map((item, index) => (
          <li key={index} className='py-6 text-4xl'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          {[
            { name: 'LinkedIn', icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/hneelabh', bg: 'bg-blue-600' },
            { name: 'Github', icon: <FaGithub size={30} />, url: 'https://www.github.com/hneelabh', bg: 'bg-[#333333]' },
            { name: 'E-mail', icon: <HiOutlineMail size={30} />, url: 'mailto:hneelabh13@gmail.com', bg: 'bg-[#6fc2b0]' },
            { name: 'Resume', icon: <BsFillPersonLinesFill size={30} />, url: 'https://drive.google.com/file/d/1epHhBrRpsD6n3a-MPGDMCv8I4URbn70s/view?usp=sharing', bg: 'bg-[#565f69]' },
          ].map((social, index) => (
            <motion.li
              key={index}
              className={`w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bg}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <a className='flex justify-between items-center w-full text-gray-300' href={social.url} target='_blank' rel='noopener noreferrer'>
                {social.name}
                <span className='mr-[-10px] lg:mr-0'>{social.icon}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

