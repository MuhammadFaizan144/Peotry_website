import React, { useState } from 'react'
import { signUpandLoginBG } from '../assets'

const Contact = () => {
  const[user,setUser]=useState({
    username:"",
    email:"",
    message:"",
  })
  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value

    setUser({
      ...user,
      [name]:value
    })
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(user)
}

  return (
    <div className="relative h-screen w-full">
      
      {/* Background Image */}
      <img
        src={signUpandLoginBG}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay  */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-[350px] shadow-lg flex flex-col gap-4">
          
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>


          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
            type="text" name="username" id='username' required autoComplete="off" placeholder='Enter Username' value={user.username} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email" name="email" placeholder='Enter Email'  id='email' required autoComplete="off" value={user.email} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Message</label>
            <textarea
              type="Message"
              placeholder="Enter Your Message" name="message" id='message' required autoComplete="off"  value={user.message} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contact