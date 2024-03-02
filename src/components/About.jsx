import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>

            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Harsh, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                    As a passionate frontend developer specializing in React.js, I bring creativity and precision to every project. With a keen eye for design and a knack for clean code, I craft engaging web experiences that captivate users. Let's collaborate to bring your vision to life with cutting-edge technology and intuitive design.                    </p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
