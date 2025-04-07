import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <>
      <nav>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobFinder
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Browse Jobs
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Login/Sign Up Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
          {/* Menu Icon Button */}
          <button className="md:hidden  text-gray-700" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?  <FaX/> : <FaBars/> }
          </button>
        </div>

        {menuOpen && (
        <div className={`md:hidden bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}>
          <Link to="/" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Home</Link>
          <Link to="/jobs" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Browse Jobs</Link>
          <Link to="/about" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">About</Link>
          <Link to="/contact" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Contact</Link>
          <Link to="/login" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-blue-600 font-semibold">Login</Link>
          <Link to="/signup" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 bg-yellow-500 text-white text-center">Sign Up</Link>
        </div> )}
      </nav>
    </>
  );
};

export default NavBar;
