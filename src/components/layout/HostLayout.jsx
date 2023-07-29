import React from 'react'
import { Outlet, NavLink, Navigate } from 'react-router-dom'

const HostLayout = () => {
  const activeLink = {
    color: "orange",
    fontWeight: "bold"
  }

  /* everytime there is a re-rendering this comonent will check if there is a value of: loggedIn in the localstorage if yes then the <Outlet /> component will be rendered otherwise the <Navigate /> component will be rendered wich wi redirect the user to the login page */
  const isLoggedIn =  true  /* localStorage.getItem("loggedIn") */  /* CRUCIAL PROPERTY FOR LOGIN */   

  return (
    <>
      <div className='p-5 m-auto bg-vanPalette'>
          <div className='flex items-center gap-x-3'>
              <NavLink
              to="." /* HostLayout (this component) is rendered in the host path so i can use . to say reference the current route withaout using any absoluta path such as /host . is more flexible */
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
      </div>     {/* if the user is logged in, return the Outlet component, that will show the selected path page, otherwise navigate the user to the login page, and send to the page a state containing object that has a message property that says: You must login first */}
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{message: "Hello dear! You must log in first"}} />}
    </>
  )
}

export default HostLayout