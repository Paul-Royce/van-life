import React, { useEffect, useState } from 'react'
import HostVanItem from '../../components/HostVanItem'

const HostVans = () => {

  const [hostVansList, setHostVansList] = useState([])

  function requestHostVans() {
    fetch(`/api/host/vans`)
    .then(req => req.json())
    .then(res => setHostVansList(res.vans))
  }

  useEffect(()=> {
   requestHostVans()
  }, [])
  return (
    <div className='h-screen p-5 m-auto bg-vanPalette'>
        <h1 className='mb-4 text-2xl font-bold'>Your listed Vans</h1>

        {hostVansList  ? 
          <div className='grid grid-flow-row gap-4 md:grid-flow-col'>
            {hostVansList.map(van => (<HostVanItem key={van.id} id={van.id} name={van.name} image={van.imageUrl} price={van.price} />))}
          </div> : <h2 className='h-full text-2xl font-bold'>Loading...</h2>
        }
    </div>
  )
}

export default HostVans