import React from 'react'
import { Link } from 'react-router-dom'

const CardButton = props => {
  return (
    <button className='rounded'>
        <Link className={`block w-full p-2 ${props.bgColor}`}  >{props.children}</Link>
    </button>
  )
}

export default CardButton