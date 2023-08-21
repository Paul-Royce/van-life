import React, { Suspense, useState } from 'react'
import {AiTwotoneStar} from "react-icons/ai"
import {LiaShuttleVanSolid} from "react-icons/lia"
import HostVanItem from '../../components/HostVanItem'
import { getHostVans } from '../../api'
import { Await, defer, useLoaderData } from 'react-router-dom'

export function loader() {
  return defer({vans: getHostVans()})
}

const Dashboard = () => {
  /* i am using this state to show a message to the user when he/she click on the view all btn */
  const [maxAvailability,  setMaxAvailability] = useState(false)
  function toggleAvailabilityMsg() { /* this function is INEFFICIENT cause the setTimeout will set the availabilityr to false even though it was already false */
    setMaxAvailability(!maxAvailability)
    setTimeout(() => {
      setMaxAvailability(false)
    }, 1500)
  }

  return (
    <div className='p-5 pb-20 m-auto bg-vanPalette'>
      <div className='p-5 rounded bg-balancesect'>
        <div className='flex items-center justify-between'>
          <div className='space-y-3 '>
            <h1 className='text-3xl font-bold '>Welcome Bob!</h1>
            <p className='text-lg '>Income last <span className='font-semibold underline'>30 days</span></p>
            <h2 className='text-4xl font-bold'>$2,260</h2>
          </div>
          <div className='font-semibold'>Details</div>
        </div>
      </div>
      <Score />
      <DashboardVans maxAvailability={maxAvailability} toggleAvailabilityMsg={toggleAvailabilityMsg} />
    </div>
  )
}

export default Dashboard

function Score() {
  return(
    <div className='p-5 py-8 rounded bg-scoresect'>
      <div className='flex items-center justify-between text-lg md:text-xl'>
        <div className='flex items-center gap-2'>
          <p className='font-bold '>Review score</p>
          <p className='flex items-center gap-1 '><AiTwotoneStar className=' text-star'/><span className='font-bold'>5.0</span>/5</p>
        </div>
        <div className='text-base font-semibold'>
          Details
        </div>
      </div>
    </div>
  )
}

function DashboardVans({maxAvailability, toggleAvailabilityMsg}) {
  const HostVansPromise = useLoaderData()
  function renderVanElements(vans) {
    return(
      <div className='grid grid-flow-row gap-4 md:grid-flow-col'>
      {maxAvailability ? <p className='p-2 font-bold text-center text-green-700 rounded backdrop-blur-sm bg-white/60'>Hi, all available vans are already shown </p>: null}
      {vans.map(van => (<HostVanItem key={van.id} id={van.id} name={van.name} image={van.imageUrl} price={van.price} />))}
    </div>
    )
  }

  return(
    <>
      <div className='flex items-center justify-between p-5'> 
        <h1 className='text-2xl font-bold '>Your listed Vans</h1>
        <span className='font-semibold duration-200 cursor-pointer' onClick={()=> toggleAvailabilityMsg()}>View all</span>
      </div>
      <Suspense fallback={<h2 className='flex items-center gap-4 m-auto text-3xl font-bold text-center mt-28'>Loading...<LiaShuttleVanSolid/></h2>}>
        <Await resolve={HostVansPromise.vans}>
          {renderVanElements}
        </Await>
      </Suspense>
    </>
  )
}