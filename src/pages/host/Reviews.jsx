import React from 'react'
import {AiTwotoneStar} from "react-icons/ai"


const Reviews = () => {

  const ratings = [
    {
      stars: 1,
      filled: true,
      percentage: 100
    },
    {
      stars: 2,
      filled: false,
      percentage: 0
    },
    {
      stars: 3,
      filled: false,
      percentage: 0
    },
    {
      stars: 4,
      filled: false,
      percentage: 0
    },
    {
      stars: 5,
      filled: false,
      percentage: 0
    }
  ]

  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]




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
    <div className='h-screen p-5 m-auto bg-vanPalette'>
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
        <h4 className='mt-5 text-lg font-bold'>Reviews ({reviewsData.length})</h4>
        {reviewselements}
      </div>
    </div>
  )
}

export default Reviews