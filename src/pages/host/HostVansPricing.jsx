import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVansPricing = () => {

  const {vanData} = useOutletContext()
  return (
    <>
        <p><span className='mt-5 font-bold'>${vanData.price}</span>/day</p>
    </>
  )
}

export default HostVansPricing