import React from 'react'
import CardButton from '../UI/CardButton'

const VanItem = props => {

  return (
    <div key={props.key}>
        <img src={props.image} alt={props.name} />
        <div className='flex justify-between '>
            <p>{props.name}</p>
            <span>${props.price}</span>
        </div>
        <span className='block mr-0 '>/day</span>
        <CardButton bgColor={props.checkType}>{props.type}</CardButton>
    </div>
  )
}

export default VanItem