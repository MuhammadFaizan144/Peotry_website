import React, { useState } from 'react'
import { signUpandLoginBG } from '../assets'
const Register = () => {
  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value
    setUser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className='relative h-screen w-full'>
      {/* registeration image */}
      <img src={signUpandLoginBG} alt="" className='absolute inset-0 h-full w-full object-cover' />
      <div className="absolute inset-0 bg-black/40"></div>
      {/* registeration form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form onSubmit={handleSubmit} className='bg-white w-[350px] p-8 flex flex-col gap-4 rounded-xl  '>
        <h2 className='font-bold text-2xl flex justify-center'>Register</h2>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id='username' required autoComplete="off" placeholder='Enter Username' value={user.username} onChange={handleInput} className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>
          
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Enter Email'  id='email' required autoComplete="off" value={user.email} onChange={handleInput} className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" placeholder='Enter Phone Number'  id='phone' required autoComplete="off" value={user.phone} onChange={handleInput} className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder='Enter Password' id='password' required autoComplete="off" value={user.password} onChange={handleInput} className='border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-600'/>
        </div>
          <button type="submit" className='bg-blue-600 hover:bg-blue-700 py-2 text-white rounded-md transition'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
