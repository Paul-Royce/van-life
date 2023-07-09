import React from 'react'
import HostVanDetailsDiv from '../../UI/HostVanDetailsDiv'
import { useOutletContext } from 'react-router-dom'


const HostVansPhotos = () => {

  const {vanData} = useOutletContext()
  
  return (
    <HostVanDetailsDiv id={2}>
        <img className='rounded md:w-52' src={vanData.imageUrl} alt={vanData.name} />
    </HostVanDetailsDiv>
  )
}

export default HostVansPhotos