import React from 'react'
import imageAbout from "../assets/image-about.jpg"
import Button from '../UI/Button'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='h-full bg-vanPalette'>
        <img className='w-full md:w-fit md:ml-6 md:rounded-lg ' src={imageAbout} alt='A person sitting on the roof of a van'/>
        <div className='p-6 space-y-8'>
          <h1 className='text-2xl font-bold '>
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          {/* section */}
          <div className='space-y-2 '>
            <p>
              Our mission is to enliven your road trip with the perfect travel van rental. <br />
              Our vans are recertified before each trip to ensure  
              your travel plans can go off without a hitch. 
              (Hitch costs extra 😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
          </div>
          
          {/* section */}
          <div className='flex flex-col gap-5 p-5 md:w-[500px] rounded bg-cusrOrange'>
            <h2 className='text-xl font-bold'>Your destination is waiting.Your van is ready.</h2>
            <Button path="/vans" addClasses="text-white bg-black w-fit rounded-lg px-2" >Explore our vans</Button>
          </div>

        </div>
        <Footer />
    </div>
  )
}

export default About