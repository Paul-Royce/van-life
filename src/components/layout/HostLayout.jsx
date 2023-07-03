import React from 'react'
import HostNavigation from '../HostNavigation'
import { Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
        <HostNavigation />
        <Outlet />
    </>
  )
}

export default HostLayout