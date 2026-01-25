import React from 'react'
import { peotrycontent, allama } from '../assets/index.js'
const Home = () => {
  return (
    <>
      {/* Peot Home */}
      <div className=" grid grid-cols-2 max-md:grid-cols-1 justify-center items-center gap-[190px] max-md:gap-[90px] px-10 max-md:px-5 bg-white">
        <div className="Content ">
          <div className='Content-letters flex flex-col gap-2'>
            <p className='text-5xl italic font-serif'>Lafz wahi zinda hote hain jo rooh ko jaga dein, baqi sirf awaaz hoti hai.</p>
            <p className='font-serif'>Click below if you want to learn more about peotry</p>
            <div className="">
              <button className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-600 mt-4'>Read Poems</button>
              <button className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 mt-4'>Learn More</button>
            </div>
          </div>
        </div>
        <div className="Content-image">
          <img src={allama} alt="pen on paper of poems" className='h-[750px] w-[550px]' />
        </div>
      </div>

      {/* Poet */}
      <div className="h-100vh grid grid-cols-2 max-md:grid-cols-1 gap-8 items-center my-20 px-10 max-md:px-5  bg-white">
        <div className="Content-image order-1 max-md:order-2">
          <img src={peotrycontent} alt="pen on paper of poems" className='h-[500px]' />
        </div>
        <div className="Content order-2 max-md:order-1">
          <div className='Content-letters flex flex-col gap-2'>
            <p className='text-4xl italic font-serif'>Khudi ko itna buland kar ke har taqdeer se pehle,
              Khuda bande se khud poochay: bata teri raza kya hai.</p>
            <div className="">
              <button className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-600 mt-4'>Read Poems</button>
              <button className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 mt-4'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
