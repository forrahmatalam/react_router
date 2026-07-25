import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {

  const [toggle, setToggle] = useState("Home")

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md sticky top-0">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Logo
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <p onClick={()=>setToggle("Home")} className="cursor-pointer hover:text-blue-600 transition">
            Home
          </p>
          <p  onClick={()=>setToggle("About")} className="cursor-pointer hover:text-blue-600 transition">
            About
          </p>
          <p  onClick={()=>setToggle("Contact")} className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </p>
        </div>

        {/* Button */}
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Log In
        </button>
      </nav>

      {/* Pages */}
  
<div> { toggle === "Home" && <Home /> }
  { toggle === "About" && <About /> }
 
   { toggle === "Contact" && <Contact /> }
  
  </div>

    </div>
  );
};

export default App;