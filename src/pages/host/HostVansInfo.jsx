import React from 'react'
import HostVanDetailsDiv from '../../UI/HostVanDetailsDiv'
import { useOutletContext } from 'react-router-dom'

const HostVansInfo = () => {

  const {vanData} = useOutletContext()

  return (
    <HostVanDetailsDiv id={1}>
        <h2><span className='font-bold '>Name:</span> {vanData.name}</h2>
        <p><span className='font-bold '>Category:</span> {vanData.type}</p>
        <p><span className='font-bold '>Description: </span>{vanData.description}</p>
        <p><span className='font-bold '>Visibility:</span> public</p>
    </HostVanDetailsDiv>
  )
}

export default HostVansInfo