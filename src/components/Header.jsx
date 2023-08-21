import React from 'react'
import {Link, NavLink} from "react-router-dom"
import {BiUserCircle} from "react-icons/bi"

function Header() {
    return(
      <header className="p-4 md:p-6 bg-vanPalette">
        <nav className='flex items-center justify-between '>
          <Link to="/" className='text-2xl font-bold'>#VANLIFE</Link>
          <ul className='flex gap-x-4 md:gap-x-10'>
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
            <li className='flex items-center'><NavLink 
              to="/login"
              className={({isActive}) => isActive ? 'hover:underline font-bold text-orange-400' : "hover:underline hover:text-orange-300 duration-200" }
              >
                <BiUserCircle className='text-xl' />
            </NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header