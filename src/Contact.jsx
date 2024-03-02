import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] text-gray-300 w-full h-screen flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/YerJRLeO" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className='py-4'>Submit the form below or shoot me an email - hneelabh13@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] text-gray-700 p-2' type="text" placeholder='Name' name='name'/>
        <input className='bg-[#ccd6f6] text-gray-700 my-4 p-2' type="text" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] text-gray-700 p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center'>Let's Connect!</button>

      </form>
    </div>
  )
}

export default Contact
