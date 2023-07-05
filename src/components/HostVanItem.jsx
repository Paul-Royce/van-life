import React from 'react'
import { Link } from 'react-router-dom'

const HostVanItem = props => {
  return (
    <Link to={`/host/vans/${props.id}`}>
      <div className='flex items-center gap-3 p-3 duration-300 bg-white rounded md:space-y-4 md:text-lg hover:bg-orange-300 md:block md:cursor-pointer'>
          <img className='w-20 rounded md:w-full' src={props.image} alt="A van" />
          <div>
              <h2 className='font-bold '>{props.name}</h2>
              <p>${props.price}/day</p>
          </div>
      </div>
    </Link>
  )
}

export default HostVanItem