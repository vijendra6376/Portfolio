import React from 'react';
import CFCS2R from "../assets/Companies/cfcs2r.png";
import IBM from "../assets/Companies/ibm.jpg";
import SOFTAPPER from "../assets/Companies/softapper.png";

function Experiences() {
  return (
<div name='experience' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
<div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
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

          {/* <div className="flex flex-col md:flex-row items-center p-2 z-10 w-full shadow-xl shadow-black ">
            <img src={CFCS2R} alt="CFCS2R" className="max-w-40 p-5 duration-500 md:order-2 md:ml-6" />
            <div className="text-center md:text-left md:order-1 w-full">
              <div className="bg-white text-[#0E67B4] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>Cyber Security Intern - CFCS2R</div>
                <p className='max-sm:text-xs text-sm text-left'>
                  <strong>July 2024 - August 2024</strong><br />
                  • Implemented security measures to protect Windows systems from vulnerabilities and threats.<br/>
                  • Acquired understanding of networking principles to build secure communication channels.<br/>
                  • Investigated digital evidence to combat cybercrimes and developed skills to manage them efficiently.
                </p>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
            <img src={IBM} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
            <div className="text-left w-full">
              <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>AI/ML Engineer Intern - IBM</div>
                <p className='max-sm:text-xs text-sm'>
                  <strong>June 2024 - July 2024</strong><br />
                  • Utilized IBM’s Watsonx.ai to develop and integrate chatbots across multiple websites, achieving a 50% reduction in response times.<br />
                  • Trained, tested and deployed machine learning models that drive broad-scale AI solutions.<br />
                  • Collaborated cross-functionally with teams to streamline AI solutions in agriculture, healthcare and food delivery systems.<br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full z-10 p-2 pb-6 shadow-xl shadow-black">
            <img src={SOFTAPPER} alt="Softapper" className="max-w-40 p-5 pb-6 m-2 duration-500 md:order-2 md:ml-6" />
            <div className="text-left md:order-1 w-full">
              <div className="bg-[#E6E6E6] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg text-[#3F5656]'>Software Developer Intern - Softapper Tech Solutions</div>
                <p className='text-[#bb4343] max-sm:text-xs text-sm'>
                  <strong className='text-[#3F5656]'>Nov 2023 - Dec 2023</strong><br />
                  • Built a blogging web-app using MERN Stack, ensured robustness by encrypting highly-sensitive data.<br />
                  • Integrated a rich text-editor using react-quill for blog post customization.<br />
                  • Optimized homepage to display the 20 most recent posts, improving UX by preventing endless scrolling.<br />
                </p>
              </div>
            </div>
          </div>
          <div></div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
