import React from 'react'

const FilterButton = props => {
  return (
    <button  className={`p-1 px-4 rounded cursor-pointer ${props.color} hover:text-white duration-150 bg-filterbtn`}>
        {props.children}
    </button>
  )
}

export default FilterButton