import React from 'react'

import {   PoetAbout ,poetsabout01} from '../assets/index.js'
const About = () => {
  return (
    <>
          {/* Peot Home */}
          <div className=" grid grid-cols-2 max-md:grid-cols-1 justify-center items-center gap-[190px]  max-lg:gap-[50px] max-md:gap-[90px] px-10 max-md:px-5 bg-white">
            <div className="Content ">
              <div className='Content-letters flex flex-col gap-2'>
                <h2 className='text-6xl font-semibold font-serif'>About</h2>
                <p className='text-3xl italic font-serif'>This website is all about Poetry. These poet are belongs to south asia and 
                  have a huge role in build pakistan and telling muslim about their origin of campions in the region british empire
                   </p>
                <div className="">
                  <button className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-600 mt-4'>Read Poems</button>
                </div>
              </div>
            </div>
            <div className="Content-image">
              <img src={PoetAbout} alt="pen on paper of poems" className='h-[650px]' />
            </div>
          </div>
    
          {/* Poet */}
          <div className="h-100vh grid grid-cols-2 max-md:grid-cols-1 gap-8 items-center my-20 px-10 max-md:px-5  bg-white">
            <div className="Content-image order-1 max-md:order-2">
              <img src={poetsabout01} alt="pen on paper of poems" className='h-[500px]' />
            </div>
            <div className="Content order-2 max-md:order-1">
              <div className='Content-letters flex flex-col gap-2'>
                <h2 className='text-6xl font-semibold font-serif'>Major Information</h2>
                <p className='text-3xl italic font-serif'>Major poets writers names include <br /> Allama Iqbal, Faiz Ahmed Faiz, Muhammad Ali Jauhar, Josh Malihabadi, Habib Jalib and so more.</p>
                
              </div>
            </div>
          </div>
        </>
  )
}

export default About
