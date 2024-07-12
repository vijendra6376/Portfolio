import React from 'react';
import JS from '../assets/Certificates/HackerRankJS.png'
import PS from '../assets/Certificates/HackerRankPS.png'
import IBMAI from '../assets/Certificates/IBMAI.jpg'
import TCS from '../assets/Certificates/TCSiON.jpg'
import ReactJS from '../assets/Certificates/UdemyReactJS.jpg'
import IBMAI2 from '../assets/Certificates/AIFundamentals.jpg'

const Certificates = () => {
  return (
    <div name='certificates' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] max-md:px-10 text-gray-300 w-full min-h-screen py-8 pt-20 md:px-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Certifications
          </p>
          <p className='py-6'>These are some of the certifications I've recieved : </p>
        </div>

        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          
          <div style={{backgroundImage: `url(${ReactJS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
                Course Completion : React JS
              </div>
              <div className='text-xl text-center'>
                <i>(Udemy)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://www.udemy.com/certificate/UC-d2e99ccb-4ea2-42b4-b44c-a232bf3412bc/" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${IBMAI2})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-xl font-bold text-white'>
                Badge : Artificial Intelligence Fundamentals
              </span>
              <div className='text-xl text-center'>
                <i>(IBM)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href=" " target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${IBMAI})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-xl font-bold text-white tracking-wider text-center'>
                Badge : Getting Started with Artificial Intelligence
              </span>
              <div className='text-xl text-center'>
                <i>(IBM)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://www.credly.com/go/8EdWLh4f" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${PS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
                Assessment : Problem Solving
              </div>
              <div className='text-xl text-center'>
                <i>(HackerRank)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://www.hackerrank.com/certificates/770a3c68cecb" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${JS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
              Assessment : JavaScript
              </div>
              <div className='text-xl text-center'>
                <i>(HackerRank)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://www.hackerrank.com/certificates/68f5eadcaa81" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${TCS})`}} className='sshadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
                Course Completion : Young Professional
              </div>
              <div className='text-xl text-center'>
                <i>(TCS iON)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://drive.google.com/file/d/1w4VObVKVfSlycDelJuDwBWjY5RI6BzNF/view" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Certificates;
