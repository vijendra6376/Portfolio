import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VotingSystem from '../assets/projects/votingsystem.png';
import Dictionary from '../assets/projects/dictionary.png';
import chargeit from '../assets/projects/chargeit1.png';
import packnchew from '../assets/projects/packnchew.png';
import mycontacts from '../assets/projects/mycontacts.jpeg';
import diversediaries from '../assets/projects/DiverseDiaries.jpg';

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Work = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      img: chargeit,
      title: "Charge IT",
      tech: "(React.js, Tailwind, Firebase, Flutter, Google Maps API)",
      desc: "Complete EV Solutions - Book, Charge, Rent and Drive!",
      demo: "https://chargingit.netlify.app/",
      code: "https://www.github.com/hneelabh/ChargeIT"
    },
    {
      img: packnchew,
      title: "PacknChew",
      tech: "(React.js, Tailwind, Firebase)",
      desc: "Official Website for Lucknow based restaurant PacknChew",
      demo: "https://packnchew.netlify.app/",
      code: "https://www.github.com/hneelabh/PacknChew"
    },
    {
      img: diversediaries,
      title: "Diverse Diaries",
      tech: "(React.js, Node.js, Express, MongoDB, JWT, Tailwind)",
      desc: "A blogging app where diverse ideas meet each other.",
      code: "https://www.github.com/hneelabh/DiverseDiaries"
    },
    {
      img: VotingSystem,
      title: "Election Portal",
      tech: "(HTML, CSS, JavaScript, PHP, MySQL)",
      desc: "A website for college to make elections easy, transparent and paper-free.",
      code: "https://www.github.com/hneelabh/Online_Voting_System"
    },
    {
      img: mycontacts,
      title: "My Contacts",
      tech: "(Node.js, Express, MongoDB, JWT)",
      desc: "A backend specific app to perform CRUD operations for contacts.",
      code: "https://www.github.com/hneelabh/mycontacts"
    },
    {
      img: Dictionary,
      title: "Simple Dictionary",
      tech: "(React.js, Open Dictionary API, Tailwind)",
      desc: "An API-based app to show meanings, synonyms and antonyms of words.",
      demo: "https://hneelabh.github.io/English-Dictionary/",
      code: "https://www.github.com/hneelabh/English-Dictionary"
    }
  ];

  return (
<div name='work' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
<div className="relative h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
  
    {/* Background Floating Blobs 
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div>*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full max-md:px-10 z-10'>
        <div className='pb-8 z-10'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
            Work
          </p>
          <p className='py-6'>Below is a showcase of some of my most accomplished works :</p>
        </div>

        <motion.div
          ref={ref}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10'
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${project.img})` }}
              className='shadow-xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div transform'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className='opacity-0 group-hover:opacity-100'>
                <div className='text-2xl md:text-xl font-bold text-white text-center tracking-wider'>
                  {project.title}
                </div>
                <div className="text-center text-xs pb-2">{project.tech}</div>
                <div className="text-center text-s md:text-xs italic">{project.desc}</div>

                <div className='pt-8 text-center flex justify-center items-center'>
                  {project.demo && (
                    <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                      <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300'>
                        <GrDeploy className='mr-2' />Demo
                      </button>
                    </a>
                  )}
                  <a href={project.code} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300'>
                      <FaGithub className='mr-2' />Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Work;