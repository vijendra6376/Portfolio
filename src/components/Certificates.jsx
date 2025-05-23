import React from 'react';
import lnb from '../assets/Certificates/lnb.jpg';
import nptel from '../assets/Certificates/nptel.jpg';
import zeetron from '../assets/Certificates/zeetron.jpg';

const Certificates = () => {
  return (
    <div
      name='certificates'
      className='relative px-10 w-full min-h-screen text-gray-300 overflow-hidden bg-black bg-opacity-60'
    >
      {/* Optional background animation blobs (uncomment to use)
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
      ...more blobs...
      */}

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
        <div className='z-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certifications</p>
          <p className='py-4'>These are some of the certifications I've received:</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center py-8 z-10'>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-30 object-cover mx-auto rounded-md' src={lnb} alt="Java Core Certificate" />
            <p className='my-4 font-semibold'>Java Core</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-30 object-cover mx-auto rounded-md' src={zeetron} alt="Full Stack Certificate" />
            <p className='my-4 font-semibold'>Full Stack Development</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-30 object-cover mx-auto rounded-md' src={nptel} alt="Java NPTEL Certificate" />
            <p className='my-4 font-semibold'>Java - NPTEL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
