import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {
  const activeLink = {
    color: "orange",
    fontWeight: "bold"
  }

  return (
    <>
      <div className='p-5 m-auto bg-vanPalette'>
          <div className='flex items-center gap-x-3'>
              <NavLink
              to="." /* HostLayout is rendered in the host path so i can use . to say reference the current route withaout using any absoluta path such as /host . is more flexible */
              end
              className="hover:underline"
              style={({isActive})=> isActive ? activeLink : null }
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="income"
                className="hover:underline"
                style={({isActive})=> isActive ? activeLink : null}
              >
                Income
              </NavLink>
              <NavLink 
                to="reviews"
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
      <Outlet />
    </>
  )
}

export default HostLayout