import React, { useState } from 'react'
import { signUpandLoginBG } from '../assets'
import { useAuth } from '../store/auth'
const Contact = () => {

  const[contact,setContact]=useState({
    username:"",
    email:"",
    message:"",
  })

  const[userData,setUserData]=useState(true)
  const{user}=useAuth()

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false)
  }

  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value

    setContact({
      ...contact,
      [name]:value
    })
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(contact)
  try {
    const response=await fetch(`http://localhost:3000/api/form/contact`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(user)
    })
    if(response.ok){
      const data=await response.json()
      console.log(data)
      alert('message send successfully')
    }
  } catch (error) {
    alert('message not send')
    console.log('contact error ',error)
  }
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
            type="text" name="username" id='username' required autoComplete="off" placeholder='Enter Username' value={contact.username} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email" name="email" placeholder='Enter Email'  id='email' required autoComplete="off" value={contact.email} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Message</label>
            <textarea
              type="Message"
              placeholder="Enter Your Message" name="message" id='message' required autoComplete="off"  value={contact.message} onChange={handleInput}
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