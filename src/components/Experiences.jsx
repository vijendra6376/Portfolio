import React from 'react';

import CFCS2R from "../assets/Companies/cfcs2r.png";
import IBM from "../assets/Companies/ibm.jpg";
import SOFTAPPER from "../assets/Companies/softapper.png";

function Experiences() {
  return (
    <div name="experience" className='w-full min-h-screen bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 py-8 pt-20'>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'>These are the places where I've gained technical experience: </p>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>


          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <img src={CFCS2R} alt="CFCS2R" className="timeline-img max-w-xs shadow-md shadow-[#040c16] scale-90 hover:scale-75 duration-500 md:order-2 md:ml-6" />
            <div className="timeline-container text-center md:text-left md:order-1">
              <div className="timeline-pointer" aria-hidden="true"></div>
              <div className="bg-white text-[#0E67B4] p-6 rounded-md shadow-md mx-auto max-w-lg"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>Cyber Security Intern - CFCS2R</div>
                <p>
                <strong>July 2024 - Present</strong><br/>
                  • Familiarized with cyber cloud services, focusing on configuring and monitoring security controls in cloud platforms.<br/>
                  • Analyzed case studies of cyber frauds, examining tactics used by perpetrators and responses by cyber police stations.<br/>
                  • Implemented cyber security protocols to ensure data protection and compliance with industry standards.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <img src={IBM} alt="IBM" className="timeline-img max-w-xs shadow-md shadow-[#040c16] scale-90 hover:scale-75 duration-500 md:mr-6" />
            <div className="timeline-container text-center md:text-right">
              <div className="timeline-pointer" aria-hidden="true"></div>
              <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto max-w-lg"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>AI Research Intern - IBM Skillsbuild</div>
                <p>
                  <strong>June 2024 - July 2024</strong><br/>
                  • Built and integrated chat bots using IBM’s watsonx.ai in multiple websites, reducing response times by 50%.<br/>
                  • Trained, tested and deployed machine learning models for various industries.<br/>
                  • Collaborated with cross-functional teams to deliver AI solutions.</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <img src={SOFTAPPER} alt="Softapper" className="timeline-img max-w-xs shadow-md shadow-[#040c16] scale-90 hover:scale-75 duration-500 md:order-2 md:ml-6" />
            <div className="timeline-container text-center md:text-left md:order-1">
              <div className="timeline-pointer" aria-hidden="true"></div>
              <div className="bg-white p-6 rounded-md shadow-md mx-auto max-w-lg"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg text-[#3F5656]'>Full Stack Developer - Softapper Tech Solutions</div>
                <p className='text-[#FF5757]'>
                  <strong className='text-[#3F5656]'>May 2024 - June 2024</strong><br/>
                  • Built a fullstack blogging web-app using MERN Stack, ensured robustness by encrypting highly-sensitive data.<br/>
                  • Integrated a rich text-editor using react-quill for blog post customization.<br/>
                  • Optimized homepage to display the 20 most recent posts, improving UX by preventing endless scrolling.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experiences;