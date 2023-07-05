import React, { useEffect, useState } from 'react'
import { useParams, NavLink, Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {BsArrowLeftShort} from "react-icons/bs"

const HostVanDetail = () => {

  const [vanData, setVanData] = useState([])

  const {id} = useParams()

  function fetchVanDetails() {
    fetch(`/api/host/vans/${id}`)
    .then(req => req.json())
    .then(res => setVanData(res.vans))
  }


  useEffect(()=> {
    fetchVanDetails()
  }, [])

  console.log(vanData);

  const activeLink = {
    textDecoration: "underline",
    fontWeight: "bold"
  }

  return (
    <>
      <div key={vanData.id} className='h-screen p-5 m-auto bg-vanPalette '>                                                {/* relative="path" in the Link component is used in order to allow the link ".." to link back to the path rather than the index wich in this case in /host */}
        <Link className='flex items-center mb-3 gap-x-1' relative='path' to="..">  {/* try to remove the relative prop and see what happens when you click on the link "back to all vans" */}
          <BsArrowLeftShort className="scale-150 " />
          <span className="underline ">Back to all vans</span>
        </Link>
        <div className='p-2 py-4 bg-white rounded'>
          <div className='flex items-center gap-x-6'>
            <img src={vanData.imageUrl}  className='rounded w-36' alt="a van" />
            <div className='space-y-2 '>
              <span className={`p-1 px-3 text-white rounded ${vanData.type == "simple" ? "bg-simpleVan" : vanData.type == "rugged" ? "bg-ruggedVan" : " bg-luxuryVan" }`}>{vanData.type}</span>
              <h2 className='font-bold '>{vanData.name}</h2>
              <p><span className='font-bold '>${vanData.price}</span>/day</p>
            </div>
          </div>
          <div className='flex mt-4 gap-x-4'>
            <NavLink end style={({isActive})=> isActive ? activeLink : null} className="hover:underline" to=".">Details</NavLink>
            <NavLink style={({isActive})=> isActive ? activeLink : null} className="hover:underline" to="pricing">Pricing</NavLink>
            <NavLink style={({isActive})=> isActive ? activeLink : null} className="hover:underline" to="photos">Photos</NavLink>
          </div>
        <Outlet context={{ vanData }} />  
        </div>
      </div>
    </>
  )
}

export default HostVanDetail