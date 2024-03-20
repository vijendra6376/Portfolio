import React from 'react'
import CarSearch from '../assets/projects/carsearch.png'
import VotingSystem from '../assets/projects/votingsystem.png'
import Dictionary from '../assets/projects/dictionary.png'
import chargeit from '../assets/projects/chargeit.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] text-gray-300 w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>Check out some of my work</p>
            </div>

            {/*Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>


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

            </div>

        </div>
    </div>
  )
}

export default Work
