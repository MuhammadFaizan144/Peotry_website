import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaRegListAlt, FaUser, FaBars, FaTimes } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"

const Admin = () => {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300
     ${isActive 
       ? "bg-red-600 text-white shadow-md" 
       : "text-red-600 hover:bg-red-100"
     }`

  return (
    <>
      <header className="w-full bg-white shadow-md">
        <nav className=" mx-auto px-4 py-4">

          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-600">
              Admin Panel
            </h1>

            {/* Hamburger */}
            <button
              className="md:hidden text-2xl text-red-600"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`flex flex-col md:flex-row gap-4 mt-6 md:mt-4 
            transition-all duration-300 overflow-hidden
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"}
            md:justify-center`}
          >

            <li onClick={() => setOpen(false)}>
              <NavLink to="/admin/user" className={linkClass}>
                <FaUser />
                <span>User</span>
              </NavLink>
            </li>

            <li onClick={() => setOpen(false)}>
              <NavLink to="/admin/contact" className={linkClass}>
                <FaMessage />
                <span>Contacts</span>
              </NavLink>
            </li>

            <li onClick={() => setOpen(false)}>
              <NavLink to="/admin/service" className={linkClass}>
                <FaRegListAlt />
                <span>Poems</span>
              </NavLink>
            </li>

            <li onClick={() => setOpen(false)}>
              <NavLink to="/" className={linkClass}>
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>

      <main className=" mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  )
}

export default Admin