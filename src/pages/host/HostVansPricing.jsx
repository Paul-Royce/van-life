import React from 'react'
import HostVanDetailsDiv from '../../UI/HostVanDetailsDiv'
import { useOutletContext } from 'react-router-dom'


const HostVansPricing = () => {

  const {vanData} = useOutletContext()
  return (
    <HostVanDetailsDiv id={3}>
        <p><span className='mt-5 font-bold'>${vanData.price}</span>/day</p>
    </HostVanDetailsDiv>
  )
}

export default HostVansPricing