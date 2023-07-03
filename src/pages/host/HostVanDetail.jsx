import React from 'react'
import { useParams } from 'react-router-dom'

const HostVanDetail = () => {

    const params = useParams()
    console.log(params.id)
  return (
    <h1 className='text-xl font-bold text-blue-400'>Host Van Detail</h1>
  )
}

export default HostVanDetail