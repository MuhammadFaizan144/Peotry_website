import React from 'react'
import { logo } from '../assets/index.js';
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo w-16 h-16">
            <img src={logo} alt="logo" className=''/>
        </div>
        <div className="link">
            
        </div>
      </nav>
    </header>
  )
}

export default Navbar
