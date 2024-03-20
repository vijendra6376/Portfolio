import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import Logo from '../assets/h.png'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="logo" style={{width: '40px'}} />
      </div>

        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}> Home </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}> Skills </Link>
            </li>
            <li>
            <Link to="work" smooth={true} duration={500}> Work </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

        {/*Hamburger Button */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

        {/*Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}> Work </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

        {/*Social Button */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/hneelabh">LinkedIn<FaLinkedin size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
                </a>
            </li>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.github.com/hneelabh">Github<FaGithub size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
                </a>
            </li>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="mailto:hneelabh13@gmail.com">E-mail<HiOutlineMail size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
                </a>
            </li>
            {/* <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300' style={{ background: 'linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)' }}>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://www.instagram.com/hneelabh">Instagram<FaInstagram size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
                </a>
            </li> */}
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://drive.google.com/file/d/1dMLSBGgF-yvNJ1rbN9xWQLa2kSqoYRF2/view?usp=sharing">Resume<BsFillPersonLinesFill size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
