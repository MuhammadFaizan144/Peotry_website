import React from 'react'
import {useState} from 'react'
// import {NavbarMenu} from './NavbarMenu'
// import {FaDumbbell} from 'react-icons/fa'
import {MdMenu} from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu.jsx'
// import {CiSearch} from 'react-icons/ci'
// import {PiShoppingCartThin} from 'react-icons/pi'
import {navLinks} from'./navbardata.js'
import {Link} from 'react-router-dom'
import {logo,menu,close} from '../assets/index.js'

const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <>
    <nav>
      <div className="container flex items-center justify-between py-4 ">
        {/* Logo Section */}
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt="logo" className="w-17 h-12" />
          </Link>
        </div>
        {/* Menu Section */}
        <div className='hidden md:block'>
          <ul className='flex'>
            {navLinks.map((item) => {
              return <li key={item.id}>
                <Link to={item.link} className='inline-block py-1 px-3 hover:text-red-500 font-semibold' >{item.title}</Link>
              </li>
            })}
          </ul>
        </div>
        {/* Register and login Section */}
        <div className='hidden md:block'>
          <button className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-600'>Register</button>
          <button className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300'>Login</button>
        </div>
        {/* Mobile hamburger menu section */}
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
          <MdMenu className='text-3xl  cursor-pointer ' />
        </div>
      </div>
    </nav>
    <ResponsiveMenu open={open}/>
    </>)
}

export default Navbar
