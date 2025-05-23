import React from 'react';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';

import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import java from '../assets/java.png';
import dsa from '../assets/dsa.png';
import springboot from '../assets/download.png';
import mysql from '../assets/mysql.png';
import oops from '../assets/oops.jpeg';
const Skills = () => {
  return (
    <div name='skills' className='pt-24 relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>
    {/* Background Floating Blobs
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow"></div> */}

    {/* Content Container */}
    <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        <p className='py-4'>The technologies I've worked with are:</p>
      </div>

      {/* Skills Grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
          <p className='my-4'>HTML</p>
        </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={css} alt="GitHub icon" />
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
          <p className='my-4'>JAVASCRIPT</p>
        </div>
     
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={ReactImg} alt="React icon" />
          <p className='my-4'>REACT JS</p>
        </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={java} alt="CPP icon" />
          <p className='my-4'>JAVA</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-20 mx-auto' src={dsa} alt="CSS icon" />
          <p className='my-4'>DSA</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-20 mx-auto' src={springboot} alt="Node icon" />
          <p className='my-4'>SPRING-BOOT</p>
        </div>
       
      
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Tailwind} alt="Tailwind icon" />
          <p className='my-4'>TAILWIND</p>
        </div>
      
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={GitHub} alt="GitHub icon" />
          <p className='my-4'>GITHUB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-20 mx-auto' src={mysql} alt="GitHub icon" />
          <p className='my-4'>DATABASE</p>
        </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-20 mx-auto' src={oops} alt="GitHub icon" />
          <p className='my-4'>OOPs</p>
        </div>
      </div>
    </div>
    </div>
)
}

export default Skills;

