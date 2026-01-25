import React from 'react'
import { logo } from '../assets'
const Footer = () => {
  return (
    <footer className='w-full h-[250px] flex justify-center items-center bg-black'>
        <div className='flex flex-col gap-5 justify-center items-center w-[250px] h-[150px] bg-white rounded-lg'>
      <img src={logo} alt="Logo footer" className='w-[200px] h-[80px]'/>
      <p className='font-bold'>Copyright Since 2017</p>
        </div>
    </footer>
  )
}

export default Footer
