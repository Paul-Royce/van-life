import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import FilterButton from '../UI/FilterButton'
import VanItem from '../components/VanItem'


const Vans = () => {

  const [vans, setVans] = useState([])

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
      className='h-screen p-5 m-auto bg-vanPalette'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
        <h1 className='text-xl font-bold '>Explore our van option</h1>
        <div className='flex items-end gap-4 '>
          <FilterButton onClick={clearfilter}>Simple</FilterButton>
          <FilterButton>Luxury</FilterButton>
          <FilterButton>Rugged</FilterButton>
          <span className='underline '>Clear filters</span>
        </div>
        <div className='grid grid-flow-row grid-cols-2 gap-3'>
          {vans.map(van => {
            function checkType() {
              if(van.type == "Simple") {
                return "bg-simpleVan"
              } else if (van.type == "Rugged") {
                return "bg-ruggedVan"
              } else {
                return "luxuryVan"
              }
            }
            return <VanItem 
                    key={van.id}
                    checkType={checkType}
                    name={van.name}
                    image={van.imageUrl}
                    price={van.price}
                    type={van.type}
                  />
          })}
        </div>
    </motion.div>
  )
}

export default Vans