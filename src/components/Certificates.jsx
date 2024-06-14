import React from 'react';
import JS from '../assets/Certificates/HackerRankJS.png'
import PS from '../assets/Certificates/HackerRankPS.png'
import IBMAI from '../assets/Certificates/IBMAI.jpg'
import Python from '../assets/Certificates/KagglePython.jpg'
import TCS from '../assets/Certificates/TCSiON.jpg'
import ReactJS from '../assets/Certificates/UdemyReactJS.jpg'

const Certificates = () => {
  return (
    <div name='certificates' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 w-full min-h-screen py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Certifications
          </p>
          <p className='py-6'>Some of the certifications I've recieved</p>
        </div>

        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${ReactJS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
                React.js
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

          <div style={{backgroundImage: `url(${IBMAI})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider text-center'>
                Artificial Intelligence
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

          <div style={{backgroundImage: `url(${PS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-xl font-bold text-white tracking-wider text-center'>
                Problem Solving
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

          <div style={{backgroundImage: `url(${JS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white tracking-wider text-center'>
                JavaScript
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

          <div style={{backgroundImage: `url(${TCS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white tracking-wider text-center'>
                Young Professional
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

          <div style={{backgroundImage: `url(${Python})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white tracking-wider text-center'>
                Python
              </div>
              <div className='text-xl text-center'>
                <i>(Kaggle)</i>
              </div>
              <div className='pt-8 text-center'>
                <a href="https://www.kaggle.com/learn/certification/hneelabh/python" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Verify</button>
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
