import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import FilterButton from '../../UI/FilterButton'
import VanItem from '../../components/VanItem'

const Vans = () => {

  const [vans, setVans] = useState(null)

  function fetchVans() {
    fetch("/api/vans")
    .then(resp => resp.json())
    .then(result => setVans(result.vans))
  }

  useEffect(()=> {
    fetchVans()
  }, [])

  function clearfilter(e) {
    console.log(e.target.innerText)
  }

  console.log(vans);
  return (
    <motion.div 
      className='h-screen'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <div className='p-5 m-auto bg-vanPalette'>
        <h1 className='text-xl font-bold '>Explore our van option</h1>
        <div className='flex items-end gap-4 '>
          <FilterButton onClick={clearfilter}>Simple</FilterButton>
          <FilterButton>Luxury</FilterButton>
          <FilterButton>Rugged</FilterButton>
          <span className='underline '>Clear filters</span>
        </div>
        <div className='grid grid-flow-row grid-cols-2 gap-3 mt-6 mb-16 md:grid-cols-3'>
          {vans ? vans.map(van => {
            
            return <VanItem 
                    id={van.id}
                    name={van.name}
                    image={van.imageUrl}
                    price={van.price}
                    type={van.type}
                  />
          }) : <h2 className='font-bold '>Loading...</h2>}
        </div>
      </div>
    </motion.div>
  )
}

export default Vans