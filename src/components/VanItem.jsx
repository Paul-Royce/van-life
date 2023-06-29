import React from 'react'
import CategoryLabel from '../UI/CategoryLabel'
import { Link } from 'react-router-dom'

const VanItem = props => {

  return (
    <div key={props.id}>
      <Link to={`/vans/${props.id}`}>
        <img src={props.image} alt={props.name} className='rounded ' />
        <div className='mt-3 '>
            <p className='font-bold'>{props.name}</p>
            <div className='mb-2'>
              <span>${props.price}</span>
              <span>/day</span>
            </div>
        </div>
        <CategoryLabel bgColor={props.type == "simple" ? "bg-simpleVan" : props.type == "rugged" ? "bg-ruggedVan" : "bg-luxuryVan"}>{props.type}</CategoryLabel>
      </Link>
    </div>
  )
}

export default VanItem