import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import {FaMessage} from "react-icons/fa6"
const Admin = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/admin/user"><FaUser/> User</NavLink></li>
            <li><NavLink to='/admin/contact'><FaMessage/> Contacts</NavLink></li>
            <li><NavLink to="/admin/service"><FaRegListAlt/> Poems</NavLink></li>
            <li><NavLink to="/"><FaHome/> Home</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Admin
