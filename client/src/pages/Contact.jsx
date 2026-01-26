import React from 'react'
import { signUpandLoginBG } from '../assets'

const Contact = () => {
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
        <form className="bg-white p-8 rounded-xl w-[350px] shadow-lg flex flex-col gap-4">
          
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="username"
              placeholder="Enter Username"
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Message</label>
            <textarea
              type="Message"
              placeholder="Enter Your Message"
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