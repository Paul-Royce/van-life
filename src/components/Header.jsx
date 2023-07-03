import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
    return(
      <header className="p-6 bg-vanPalette">
        <nav className='flex items-center justify-between '>
          <Link to="/" className='text-2xl font-bold'>#VANLIFE</Link>
          <ul className='flex gap-x-10'>
            <li><NavLink 
              to="/host" 
              className={({isActive}) => isActive ? 'hover:underline font-bold text-orange-400' : "hover:underline hover:text-orange-300 duration-200"}
            >
              Host
            </NavLink></li>
            <li><NavLink
               to="/about" 
               className={({isActive}) => isActive ? 'hover:underline font-bold text-orange-400' : "hover:underline hover:text-orange-300 duration-200"}
               >
                About
            </NavLink></li>
            <li><NavLink 
              to="/vans"
              className={({isActive}) => isActive ? 'hover:underline font-bold text-orange-400' : "hover:underline hover:text-orange-300 duration-200" }
              >
                Vans
            </NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header