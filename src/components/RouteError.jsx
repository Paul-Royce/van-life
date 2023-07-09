import React from 'react'
import { useRouteError } from 'react-router-dom'

const RouteError = () => {

    const routeErr = useRouteError()
    console.log(routeErr)
    
  return (
    <div>
        <h1 className='text-3xl font-bold text-center '>Error: {routeErr.message && routeErr.message}</h1>
        <p>{routeErr.status && routeErr.status} - {routeErr.statusText && routeErr.statusText}</p>
    </div>
  )
}

export default RouteError