import React from 'react'

const Service = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          
          <div className="relative bg-white rounded-2xl shadow-xl p-10 border-l-8 border-red-900">
            
            {/* Decorative element */}
            <span className="absolute -top-6 left-10 bg-red-900 text-white px-6 py-2 rounded-full text-sm tracking-widest">
              POEM
            </span>

            <h3 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              Writer
            </h3>

            <div className="w-20 h-1 bg-red-900 my-6"></div>

            <p className="text-xl md:text-2xl italic font-serif text-gray-700 leading-relaxed">
              A poem is a specific, tangible piece of writing with artistic language,
              while poetry is the broader, abstract art form or genre that encompasses
              all poems and their techniques.
            </p>

          </div>

        </div>
      </section>
    </>
  )
}

export default Service
