import React from 'react';
import VotingSystem from '../assets/projects/votingsystem.png';
import Dictionary from '../assets/projects/dictionary.png';
import chargeit from '../assets/projects/chargeit1.png';
import packnchew from '../assets/projects/packnchew.png';
import mycontacts from '../assets/projects/mycontacts.jpeg';
import diversediaries from '../assets/projects/DiverseDiaries.jpg'

const Work = () => {
  return (
    <div name='work' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 w-full min-h-screen py-8 pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Below is a showcase of some of my most accomplished works :</p>
        </div>

        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${chargeit})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center tracking-wider'>
                Charge IT
              </div>
              <div className="text-center text-xs pb-2">(React.js, Tailwind, Firebase, Flutter, Google Maps API)</div>
              <div className="text-center text-s italic">Complete EV Solutions - Book, Charge, Rent and Drive!</div>
              <div className='pt-8 text-center'>
                <a href="https://chargingit.netlify.app/" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://www.github.com/hneelabh/ChargeIT" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${packnchew})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center tracking-wider'>
                PacknChew
              </div>
              <div className="text-center text-xs pb-2">(React.js, Tailwind, Firebase)</div>
              <div className="text-center text-s italic">Official Website for Lucknow based restaurant PacknChew</div>
              <div className='pt-8 text-center'>
              <a href="https://packnchew.netlify.app/" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://www.github.com/hneelabh/PacknChew" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${diversediaries})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center tracking-wider'>
                Diverse Diaries
              </div>
              <div className="text-center text-xs pb-2">(React.js, Node.js, Express, MongoDB, JWT, Tailwind)</div>
              <div className='italic text-s text-center'>A blogging app where diverse ideas meet each other.</div>
              <div className='pt-8 text-center'>
                <a href="https://www.github.com/hneelabh/DiverseDiaries" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${VotingSystem})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center tracking-wider'>
                Election Portal
              </div>
              <div className="text-center text-xs pb-2">(HTML, CSS, JavaScript, PHP, MySQL)</div>
              <div className="text-center text-s italic">A website for college to make elections easy, transparent and paper-free.</div>
              <div className='pt-8 text-center'>
                <a href="https://www.github.com/hneelabh/Online_Voting_System" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${mycontacts})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-white text-center tracking-wider'>
                My Contacts
              </div>
              <div className="text-center text-xs pb-2">(Node.js, Express, MongoDB, JWT)</div> 
               <div className="text-center text-s italic">A backend specific app to perform CRUD operations for contacts.</div>
              <div className='pt-8 text-center'>
                <a href="https://www.github.com/hneelabh/mycontacts" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Dictionary})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center text-white tracking-wider'>
                Simple Dictionary
              </div>
              <div className="text-center text-xs pb-2">(React.js, Open Dictionary API, Tailwind)</div>
              <div className="text-center text-s italic">An API-based app to show meanings, synonyms and antonyms of words.</div>
              <div className='pt-8 text-center'>
                <a href="https://hneelabh.github.io/English-Dictionary/" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://www.github.com/hneelabh/English-Dictionary" target='new'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work;
