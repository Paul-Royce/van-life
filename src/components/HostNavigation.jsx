import React from 'react'
import { NavLink } from 'react-router-dom'

const HostNavigation = () => {

  const activeLink = {
    color: "orange",
    fontWeight: "bold"
  }

  return (
    <div className='p-5 m-auto bg-vanPalette'>
        <div className='flex items-center gap-x-3'>
            <NavLink
             to="/host"
             end
             className="hover:underline"
             style={({isActive})=> isActive ? activeLink : null }
             >
              Dashboard
            </NavLink>
            <NavLink 
              to="/host/income"
              className="hover:underline"
              style={({isActive})=> isActive ? activeLink : null}
            >
              Income
            </NavLink>
            <NavLink 
              to="/host/reviews"
              className="hover:underline"
              style={({isActive})=> isActive ? activeLink : null}
            >
              Reviews
            </NavLink>
            <NavLink 
              to="/host/vans"
              className="hover:underline"
              style={({isActive})=> isActive ? activeLink : null}
            >
              Vans
            </NavLink>
        </div>
    </div>
  )
}

export default HostNavigation