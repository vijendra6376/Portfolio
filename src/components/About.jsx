import React from 'react'

const About = () => {
  return (
     <div name='about' className='relative min-w-full h-screen text-gray-300 overflow-hidden'>

      {/* Background Floating Blobs 
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
      <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
      <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div>*/}

      {/* Content Container */}
      <div className='flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-60'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 z-10'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 z-10'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>
              Hi. I'm Harsh, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              As a passionate full-stack web developer specializing in MERN, I bring creativity and precision to every project. With a keen eye for design and a knack for clean code, I craft engaging web experiences that captivate users. Let's collaborate to bring your vision to life with cutting-edge technology and intuitive design.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
