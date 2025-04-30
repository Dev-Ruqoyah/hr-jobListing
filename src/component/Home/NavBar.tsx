import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from 'react-scroll'
import { Link as LinkRouter } from "react-router-dom";



const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <>
      <nav className="bg-white fixed w-full px-4 z-999">
        <div className="container max-w-6xl mx-auto  py-4 flex justify-between items-center px-3">
          {/* Logo */}
          <LinkRouter to="/"  className="text-2xl cursor-pointer font-bold text-blue-600">
            JobFinder
          </LinkRouter>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <LinkRouter to="/" className="text-gray-700 cursor-pointer hover:text-blue-600">
              Home
            </LinkRouter>
            <LinkRouter to="/jobs" className="text-gray-700 cursor-pointer hover:text-blue-600">
              Browse Jobs
            </LinkRouter>
            <Link to="company" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-blue-600">
              Company
            </Link>
            <Link to="blog" smooth={true} duration={500} className="text-gray-700 cursor-pointer hover:text-blue-600">
              Blog
            </Link>
          </div>

          {/* Login/Sign Up Buttons */}
          <div className="hidden md:flex  space-x-4">
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
  <div className="md:hidden fixed top-14 left-0 w-full bg-white z-[1000] shadow-lg transition-all duration-500 ease-in-out">
    <div className="">
      <LinkRouter to="/" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Home</LinkRouter>
      <LinkRouter to="/jobs" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Browse Jobs</LinkRouter>
      <Link to="company" smooth={true} duration={500} onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Company</Link>
      <Link to="blog" smooth={true} duration={500} onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-gray-700 hover:bg-gray-200">Blog</Link>
      <LinkRouter to="/login" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 text-blue-600 font-semibold">Login</LinkRouter>
      <LinkRouter to="/signup" onClick={()=>setMenuOpen(false)} className="block px-6 py-2 bg-yellow-500 text-white text-center">Sign Up</LinkRouter>
    </div>
  </div>
)}

      </nav>
    </>
  );
};

export default NavBar;
