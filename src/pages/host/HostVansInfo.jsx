import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVansInfo = () => {

  const {vanData} = useOutletContext()

  return (
    <div className='flex flex-col gap-3 mt-4 '>
        <h2><span className='font-bold '>Name:</span> {vanData.name}</h2>
        <p><span className='font-bold '>Category:</span> {vanData.type}</p>
        <p><span className='font-bold '>Description: </span>{vanData.description}</p>
        <p><span className='font-bold '>Visibility:</span> public</p>
    </div>
  )
}

export default HostVansInfo