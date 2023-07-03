import React from 'react'

const HostVanItem = props => {
  return (
    <div className='flex items-center gap-3 p-3 duration-300 bg-white rounded md:space-y-4 md:text-lg hover:bg-orange-300 md:block md:cursor-pointer'>
        <img className='w-20 rounded md:w-full' src={props.image} alt="A van" />
        <div>
            <h2 className='font-bold '>{props.name}</h2>
            <p>${props.price}/day</p>
        </div>
    </div>
  )
}

export default HostVanItem