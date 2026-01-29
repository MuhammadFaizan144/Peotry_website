import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-6">
      <div className="max-w-4xl text-left">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-gray-900 mb-6">
          404
        </h1>

        {/* Poetic Message */}
        <p className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-snug">
          Lafz yahan tak na aa sake,<br />
          aur raasta kahin gum ho gaya.
        </p>

        {/* Description */}
        <p className="mt-5 text-gray-600 max-w-xl">
          Jis safhe ki talaash thi, woh mojood nahi.
          Shayad yeh likha hi kisi aur maqam ke liye gaya tha.
        </p>

        {/* Actions */}
        <div className="mt-10 flex gap-4">
          <NavLink
            to="/"
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Go Home
          </NavLink>

          <NavLink
            to="/poems"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Read Poems
          </NavLink>
        </div>

      </div>
    </div>

  )
}

export default Error
