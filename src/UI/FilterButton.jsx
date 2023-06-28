import React from 'react'

const FilterButton = props => {
  return (
    <button onClick={e => props.onClick(e)} className='p-1 px-4 rounded cursor-pointer bg-filterbtn'>
        {props.children}
    </button>
  )
}

export default FilterButton