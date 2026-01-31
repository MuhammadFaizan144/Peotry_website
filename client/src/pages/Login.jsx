import React, { useState } from 'react'
import { signUpandLoginBG } from '../assets'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
const Login = () => {
  const[user,setUser]=useState({
    email:"",
    password:"",
  })
  const navigate=useNavigate()

  const {storetokenInLS}=useAuth()
  
  const handleInput=(e)=>{
    
    console.log(e)
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(user)
    try {
      const response=await fetch(`http://localhost:3000/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      })
      console.log(response)
      if(response.ok){
        const res_data=await response.json()
        alert("Login Successfull")
        console.log("res from server",res_data)
        storetokenInLS(res_data.token)
        setUser({

          email:"",
          password:"",
        }
      )
      navigate('/')
      }else{
        console.log("Error in response")
      }
    } catch (error) {
      console.log("login ",error)
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
          
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email" name="email" placeholder='Enter Email'  id='email' required autoComplete="off" value={user.email} onChange={handleInput}
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password" name="password" placeholder='Enter Password' id='password' required autoComplete="off" value={user.password} onChange={handleInput} 
              className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login