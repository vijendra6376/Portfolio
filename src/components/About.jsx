// import React from 'react'

// const About = () => {
//   return (
//     <div name='about'
//     className='w-full h-screen bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 md:px-10 max-sm:px-6'>

//         {/* Background Blobs */}
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse z-0"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce z-0"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse z-0"></div>

//         {/* Content Container */}
//         <div className='flex flex-col justify-center items-center w-full h-full'>
//             <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
//                 <div className='sm:text-right pb-8 pl-4'>
//                     <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
//                 </div>
//                 <div>
//                 </div>
//             </div>

//             <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
//                 <div className='sm:text-right text-3xl font-bold'>
//                     <p>
//                         Hi. I'm Harsh, nice to meet you. Please take a look around.
//                     </p>
//                 </div>
//                 <div>
//                     <p>
//                     As a passionate full-stack web developer specializing in MERN, I bring creativity and precision to every project. With a keen eye for design and a knack for clean code, I craft engaging web experiences that captivate users. Let's collaborate to bring your vision to life with cutting-edge technology and intuitive design.                    </p>
//                 </div>
//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default About

import React from 'react'

const About = () => {
  return (
     <div name='about' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
     <div className="relative h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

      {/* Background Floating Blobs 
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
      <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
      <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div>*/}

      {/* Content Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
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
    </div>
  )
}

export default About
