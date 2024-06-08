import React from 'react'
import Carsite from '../assets/projects/carsite.png'
import VotingSystem from '../assets/projects/votingsystem.png'
import Dictionary from '../assets/projects/dictionary.png'
import chargeit from '../assets/projects/chargeit1.png'
import packnchew from '../assets/projects/packnchew.png'
import mycontacts from '../assets/projects/mycontacts.jpeg'

const Work = () => {
  return (
    <div name='work' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>Check out some of my work</p>
            </div>

            {/*Container */}
            <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>


            <div style={{backgroundImage: `url(${chargeit})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Charge IT
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://chargingit.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://www.github.com/hneelabh/ChargeIT">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${packnchew})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PACK n CHEW
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.github.com/hneelabh/PacknChew">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${VotingSystem})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Onilne Voting System
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.github.com/hneelabh/Online_Voting_System">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${mycontacts})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My Contacts - Backend
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.github.com/hneelabh/mycontacts">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            
                {/*Grid Items*/}
                <div style={{backgroundImage: `url(${Dictionary})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Simple Dictionary
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://hneelabh.github.io/English-Dictionary/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://www.github.com/hneelabh/English-Dictionary">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Carsite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Cars Search
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.github.com/hneelabh/cars-search">
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

export default Work
