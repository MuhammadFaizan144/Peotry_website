import React from 'react'
import { navLinks } from './navbardata.js'
import { NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ open }) => {
  if (!open) return null

  return (
    <div className="absolute top-20 left-0 w-full h-screen z-20 transition-opacity duration-300">
      {/* Menu content */}
      <div className="text-xl font-semibold uppercase bg-red-500 text-white w-full py-10  rounded-lg">
        <ul className="flex flex-col items-center justify-center gap-6">

          <li>
            <NavLink
              to='/'
              className="inline-block py-1 px-3 hover:text-gray-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className="inline-block py-1 px-3 hover:text-gray-300"
            >
              About
            </NavLink>

          </li>
          <li>
            <NavLink
              to='/poems'
              className="inline-block py-1 px-3 hover:text-gray-300"
            >
              Poem
            </NavLink>

          </li>
          <li>
            <NavLink
              to='/contact'
              className="inline-block py-1 px-3 hover:text-gray-300"
            >
              Contact
            </NavLink>

          </li>

          <li>
            <NavLink to="/register" className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-600'>Register</NavLink>
            <NavLink to="/login" className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300'>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResponsiveMenu