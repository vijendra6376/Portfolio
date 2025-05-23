import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {
  const [text] = useTypewriter({
    words: [
      
      'Pre-Final-Year B.Tech Student',
      ' Java-Full-Stack Web Developer',
      

    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
  })

  return (
    <div
      name='home'
      className='relative w-full min-h-screen text-gray-300 flex items-center justify-center'
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content Container */}
      <div className='relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-start h-full text-left'>
        <motion.p
          className='text-pink-600 text-lg'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        Vijendra Kumar Patidar
        </motion.h1>

        <motion.h2
          className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-300 mt-2'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a <span>{text}</span>
          <Cursor />
        </motion.h2>

       

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-xl'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
