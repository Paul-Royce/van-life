import React, {  Suspense } from 'react'
import { useLoaderData, defer,Await } from 'react-router-dom'
import HostVanItem from '../../components/HostVanItem'
import { getHostVans } from '../../api'
import {LiaShuttleVanSolid} from "react-icons/lia"

export function loader() {
    return defer({vans: getHostVans()})
 }
 
const HostVans = () => {

  const dataPromise = useLoaderData()
  console.log(dataPromise.vans)

  function renderVanElements(vans) {
    return(
      /* This check is not needed, since i am using react-router loader, rather that fetching from useEffect or similar */
      <div className='grid grid-flow-row gap-4 md:grid-flow-col'>
        {vans.map(van => (<HostVanItem key={van.id} id={van.id} name={van.name} image={van.imageUrl} price={van.price} />))}
      </div>
    )
  
  }

  return (
    <div className='h-screen p-5 m-auto bg-vanPalette'>
        <h1 className='mb-4 text-2xl font-bold'>Your listed Vans</h1>
        <Suspense fallback={<h2 className='flex items-center gap-4 m-auto text-3xl font-bold text-center mt-28'>Loading...<LiaShuttleVanSolid/></h2>}>
          <Await resolve={dataPromise.vans}>
            {renderVanElements}
          </Await>
        </Suspense>
    </div>
  )
}

export default HostVans