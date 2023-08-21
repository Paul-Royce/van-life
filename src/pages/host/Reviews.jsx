import React from 'react'
import {AiTwotoneStar} from "react-icons/ai"
import {ratings, reviewsData} from "./dataReview"


const Reviews = () => {

  const reviewselements = reviewsData.map(review => {
    return(
      <div className='w-auto lg:w-7/12'>
        <div className='flex gap-3 mt-5 '>
          <AiTwotoneStar className='text-star ' />
          <AiTwotoneStar className='text-star ' />
          <AiTwotoneStar className='text-star ' />
          <AiTwotoneStar className='text-star ' />
          <AiTwotoneStar className='text-star ' />
        </div>
        <div className='flex gap-1'>
          <h5 className='font-bold '>{review.name}</h5>
          <p className='text-gray-500 '>{review.date}</p>
        </div>
        <p>{review.text}</p>
        <hr className='mt-5' />
      </div>
    )
  })

  const ratingsElement = ratings.map(rating => {
    return <div className='flex items-center gap-3'>
      <span>{rating.stars} stars</span>
      <div className={`md:w-6/12 w-8/12 md:h-3 h-2 rounded-full ${rating.filled ? "bg-heroBtn" : "bg-grayStat"}`}></div>
      <span>{rating.percentage}%</span>
    </div>
  })
  
  
  return (
    <div className='p-5 m-auto  pb-44 bg-vanPalette'>
      <div className='flex items-center gap-2'>
        <h1 className='text-xl font-bold'>Your Reviews</h1>
        <p>last <span className='font-semibold underline '>30 days</span></p>
      </div>
      <div className='flex'>
        <h3 className='font-bold'>5.0</h3>
      </div>
      <div className='flex flex-col'>
        {ratingsElement}
      </div>
      <div>
        <h4 className='pb-20 mt-5 text-lg font-bold'>Reviews ({reviewsData.length})</h4>
        {reviewselements}
      </div>
    </div>
  )
}

export default Reviews