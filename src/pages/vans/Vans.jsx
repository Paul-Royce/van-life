import React, { useEffect, useState, Suspense } from 'react'
import {Link, useSearchParams, defer, Await} from "react-router-dom"
import {motion} from "framer-motion"
import { useLoaderData } from 'react-router-dom'
import CategoryLabel from "../../UI/CategoryLabel"
import { getVans } from '../../api'
import {LiaShuttleVanSolid} from "react-icons/lia"

export function loader() {
   return defer({vans: getVans()})
}

const Vans = () => {

  useEffect(()=> {
    document.title = "#Vanslife | Vans"
  }, [])
  

  const dataPromise = useLoaderData() /* instead of using fetch, i use the loadder from react-router-dom to fetch the data before the page is rendered */

  // const [vans, setVans] = useState([])this was used before when i was using useEffect to fetch 

  /* search parameters section */
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
      

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
} 

function renderVanElements(vans) {
      /* if the type query parameter is in the URL / is true, filter it and return only the vans that has his same type value, otherwise return all the vans */
      const dispayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
      console.log(searchParams.toString())
   
     const vanElements = dispayedVans.map(van => {
   
       return (
         <div key={van.id}>
           <Link to={`${van.id}`} state={{search: `?${searchParams.toString()}`, type: typeFilter}}> {/* this coould be an absolute path by writing: "/vans/:${van.id" */}
             <img src={van.imageUrl} alt={van.name} className='rounded' />
             <div className='mt-3 '>
                 <p className='font-bold'>{van.name}</p>
                 <div className='mb-2'>
                   <span>${van.price}</span>  {/* check where the onclick happen for the vanDetails component to show */}
                   <span>/day</span>
                 </div>
             </div>
             <CategoryLabel bgColor={van.type == "simple" ? "bg-simpleVan" : van.type == "rugged" ? "bg-ruggedVan" : "bg-luxuryVan"}>{van.type}</CategoryLabel>
           </Link>
         </div>)
               
     })
     return(
      <>
         <div className='grid grid-flow-row grid-cols-1 gap-3 mt-6 mb-16 md:pb-36 sm:grid-cols-2 md:grid-cols-3'>
          {vanElements}
        </div>
      </>
     ) 
}
  
  return (
    <motion.div 
      className='h-screen'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <div className='p-5 m-auto bg-vanPalette'>
        <h1 className='text-2xl font-bold sm:text-xl '>Explore our van option</h1>
        <div className='flex flex-col items-start gap-4 mt-3 sm:items-end sm:flex-row '>
          <button  
            className={`p-1 px-4 duration-150 w-full sm:w-auto rounded cursor- ${typeFilter === "simple" ? "bg-simpleVan" : ""} hover:bg-simpleVan hover:text-white bg-filterbtn`}
            onClick={()=> handleFilterChange("type", "simple")}
          > 
            Simple 
          </button>
          <button  
            className={`p-1 px-4 duration-150 w-full sm:w-auto rounded cursor- ${typeFilter === "luxury" ? "bg-luxuryVan" : ""} hover:bg-simpleVan hover:text-white bg-filterbtn`}
            onClick={()=> handleFilterChange("type", "luxury")}
          > 
            Luxury 
          </button>
          <button  
            className={`p-1 px-4 duration-150 w-full sm:w-auto rounded cursor- ${typeFilter === "rugged" ? "bg-ruggedVan" : ""} hover:bg-simpleVan hover:text-white bg-filterbtn`}
            onClick={()=> handleFilterChange("type", "rugged")}
          > 
            Rugged 
          </button>
          {/* render this button whenever a filter is applied or whenever the typeFilter variable is differen than null */}
          {typeFilter != null && <button onClick={()=> setSearchParams({})} className='underline '>Clear filters</button>}
        </div>
        <Suspense fallback={<h2 className='flex items-center gap-4 m-auto text-3xl font-bold text-center mt-28'>Loading...<LiaShuttleVanSolid/></h2>}>
          <Await resolve={dataPromise.vans}>
            {renderVanElements}
          </Await>
        </Suspense>
      </div>
    </motion.div>
  )
}

export default Vans