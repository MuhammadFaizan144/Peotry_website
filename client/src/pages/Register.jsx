import React from 'react'
import { signUpandLoginBG } from '../assets'
const Register = () => {
  return (
    <div className='relative h-screen w-full'>
      {/* registeration image */}
      <img src={signUpandLoginBG} alt="" className='absolute inset-0 h-full w-full object-cover' />
      <div className="absolute inset-0 bg-black/40"></div>
      {/* registeration form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form action="" className='bg-white w-[350px] p-8 flex flex-col gap-4 rounded-xl  '>
        <h2 className='font-bold text-2xl flex justify-center'>Register</h2>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='Enter Username' className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>
          
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone number">Phone Number</label>
          <input type="text" placeholder='Enter Phone Number' className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>
          <button type="submit" className='bg-blue-600 hover:bg-blue-700 py-2 text-white rounded-md transition'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
