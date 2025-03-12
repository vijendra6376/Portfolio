import React from 'react';
import VISTEON from "../assets/Companies/visteon.png";
import IBM from "../assets/Companies/ibm.jpg";
import SOFTAPPER from "../assets/Companies/softapper.png";

function Experiences() {
  return (
<div name='experience' className='relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>
    {/* Background Floating Blobs
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div> */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 max-sm:px-6 z-10'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
            Experience
          </p>
          <p className='pt-6'>Following are the places I've gained work experience:</p>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
          <div className="absolute w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
            <img src={VISTEON} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
            <div className="text-left w-full">
              <div className="bg-white text-[#bd6022] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>SWE Intern - Visteon Corporation</div>
                <p className='max-sm:text-xs text-sm text-[#3F5656]'>
                  <strong>Jan 2025 - Present</strong><br />
                  • Synthesised Bao and built a dual-guest hypervisor with Raspberry Pi as the platform in order to create an ecosystem, eliminating manual data input for users.<br />
                  • Utilised FreeRTOS and built an application in order to interact with the BMS and constantly give real-time updates to the Linux environment via IPC.<br />
                  • Deployed the application in Linux guest and facilitated communication between both guests via IPC.<br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full z-10 p-2 pb-6 shadow-xl shadow-black">
            <img src={IBM} alt="Softapper" className="max-w-40 p-5 pb-6 m-2 duration-500 md:order-2 md:ml-6" />
            <div className="text-left md:order-1 w-full">
              <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>AI/ML Intern - IBM</div>
                <p className='max-sm:text-xs text-sm text-[#3F5656]'>
                  <strong>June 2024 - July 2024</strong><br />
                  • Utilized IBM’s Watsonx.ai to develop and integrate chatbots across multiple websites, achieving a 50% reduction in response times.<br />
                  • Trained, tested and deployed machine learning models that drive broad-scale AI solutions.<br />
                  • Collaborated cross-functionally with teams to streamline AI solutions in agriculture, healthcare and food delivery systems.<br />
                </p>
              </div>
            </div>
          </div>
          <div></div>

        </div>
      </div>
    </div>
  );
}

export default Experiences;
