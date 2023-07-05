import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVansPhotos = () => {

  const {vanData} = useOutletContext()
  
  return (
    <div>
        <img className='rounded  md:w-52' src={vanData.imageUrl} alt={vanData.name} />
    </div>
  )
}

export default HostVansPhotos