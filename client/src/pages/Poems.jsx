import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const { services } = useAuth()
  return (
    <>
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          {services.map((curElem, index) => {
            const { type, writer, content } = curElem;
            return (
              <div className="relative bg-white rounded-2xl shadow-xl p-10 border-l-8 border-red-900" key={index}>

                {/* Decorative element */}
                <span className="absolute -top-6 left-10 bg-red-900 text-white px-6 py-2 rounded-full text-sm tracking-widest">
                  {type}
                </span>

                <h3 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
                  {writer}
                </h3>

                <div className="w-20 h-1 bg-red-900 my-6"></div>

                <p className="text-xl md:text-2xl italic font-serif text-gray-700 leading-relaxed">
                  {content}
                </p>

              </div>

            )
          }
          )}




        </div>
      </section>
    </>
  )
}

export default Service
