import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (


    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md sticky top-0">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer"> Logo </h1>

        <div className="flex items-center gap-8 text-gray-700 font-medium">
       
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/contact" >Contact</NavLink>

        </div>

        {/* Button */}
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Log In
        </button>
      </nav>
   
  )
}

export default Navbar
