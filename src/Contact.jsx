import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='relative w-full h-screen text-gray-300 overflow-hidden bg-black bg-opacity-60 px-10'>
      {/* Background Floating Blobs
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
      <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
      <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div>
 */}
      {/* Contact Form */}
      <div className='flex flex-col justify-center items-center w-full h-full z-10'>
      <form
        method='POST'
        action={import.meta.env.VITE_GETFORM_URL}
        className='flex flex-col max-w-[600px] w-full z-10'
      >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact
            </p>
            <p className='py-4'>
              Submit the form below or shoot me an email - hneelabh13@gmail.com
            </p>
          </div>
          <input
            className='bg-[#ccd6f6] text-gray-700 p-2 rounded-lg'
            type="text"
            placeholder='Name'
            name='name'
          />
          <input
            className='bg-[#ccd6f6] text-gray-700 my-4 p-2 rounded-lg'
            type="email"
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#ccd6f6] text-gray-700 p-2 rounded-lg'
            name='message'
            rows="10"
            placeholder='Message'
          ></textarea>
          <button className='border-y-2 hover:bg-pink-600 hover:border-pink-600 hover:opacity-85 hover:scale-95 duration-300 px-3 py-2 my-8 mx-auto items-center rounded-xl'>
            Let's Connect!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
