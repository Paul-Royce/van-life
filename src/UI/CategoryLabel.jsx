import React from 'react'

const CategoryLabel = props => {
  return (
    <span className={`block w-fit p-1 md:p-2 md:px-5 px-4 text-white rounded ${props.bgColor}`}>
        {props.children}
    </span>
  )
}

export default CategoryLabel