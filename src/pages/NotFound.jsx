import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen p-5 m-auto bg-vanPalette'>

        <div className='flex absolute md:w-[40%] md:translate-x-[-50%] md:left-[50%] top-[40%] flex-col gap-y-4'>
            <h1 className='text-xl font-bold md:text-3xl'>
                Sorry, the page you were looking for
                was not found.
            </h1>
            <Link 
                to="/" 
                className='p-5 mr-5 text-center text-white bg-black rounded md:mr-0 '
            >
                Return to home
            </Link>
        </div>
    </div>
  )
}

export default NotFound