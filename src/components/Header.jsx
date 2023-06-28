import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return(
      <header className="p-6 bg-vanPalette">
        <nav className='flex items-center justify-between '>
          <Link to="/" className='text-2xl font-bold'>#VANLIFE</Link>
          <ul className='flex gap-x-10'>
            <li><Link to="/about" className='duration-200 hover:underline'>About</Link></li>
            <li><Link to="/vans" className='duration-200 hover:underline'>Vans</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header