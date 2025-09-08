import React from 'react'
import { Link } from "react-router-dom";
import CGTIlogo from '../assets/CGTI-Logo.png';

const Navbar = ({}) => {
  return (
    <nav>

      <div>
        
      </div>

   <div className='flex py-4 px-2 justify-center items-center text-1xl gap-x-40'>
    <div> <img src={CGTIlogo} alt="" className='lg:w-100'/></div>
    <div className=' space-x-15'>
    <Link to="/" className='hover:text-blue-500 hover:underline font-bold'>Home</Link>
    <Link to="/About" className='hover:text-blue-500 hover:underline font-bold'>About</Link>
    <Link to="/Courses" className='hover:text-blue-500 hover:underline font-bold'>Courses</Link>
    <Link to="/Photo-Gallery" className='hover:text-blue-500 hover:underline font-bold'>Photo Gallary</Link>
    <Link to="/ContactUs" className='hover:text-blue-500 hover:underline font-bold'>Contact Us</Link>
    </div>
   </div>
    </nav>   
  )
}
export default Navbar
