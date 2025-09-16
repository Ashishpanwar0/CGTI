import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille, faBars, faTimes, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CGTIMail from '../assets/CGTIMail.gif';
import CGTIlocation from '../assets/CGTIlocation.gif';
import CGTIPhone from '../assets/CGTIPhone.gif';
import CGTIlogo from '../assets/CGTI-Logo.png';
import CGTIFacbook from '../assets/CGTIFacbook.gif';
import CGTIInsta from '../assets/CGTIInstragram.gif';
import CGTILink from '../assets/CGTILink.gif.gif';
import CGTITwitter from '../assets/CGTITwitter.gif';

const Navbar = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className='space-y-2 px-12 py-3 border-b-1 lg:w-[100%] border-[#F2F5FA] shadow-2xs lg:block hidden'>
        <div className='flex gap-x-13 items-center'>
            <div className='flex items-center gap-x-2'>
             <img src={CGTIMail} alt="" className='lg:w-7'/>
             <h1 className='text-[#000000]'>cgtirishikesh@gmail.com</h1>
            </div>
            <div className='flex items-center gap-x-2'>
             <img src={CGTIPhone} alt="" className='lg:w-7'/>
              <h1 className='text-[#000000]'>+91-7500679066, 7455857367</h1>
            </div>
            <div className='ml-auto'>
              <h1 className='text-[#000000]'>Open Hours of Institute Mon - Sat: 7.00 am - 7.00 pm</h1>
            </div>
        </div>

        <div className='flex'>
          <div className='flex gap-x-2 items-center'>
            <img src={CGTIlocation} alt="" className='lg:w-7'/>
            <h1 className='text-[#000000]'>IDPL and Shyampur</h1>
          </div>
          <div className='flex lg:gap-3 lg:ml-auto'>
           <img src={CGTIFacbook} alt="" className='lg:w-8 h-8'/>
           <img src={CGTIInsta} alt="" className='lg:w-8 h-8'/>
           <img src={CGTILink} alt="" className='lg:w-8 h-8'/>
           <img src={CGTITwitter} alt="" className='lg:w-8 h-8'/>
          </div>
        </div>
      </div>

   <div className='lg:flex items-center text-1xl shadow-2sm space-x-15 hidden'>
    <div className='bg-[#005AAC] py-9 w-20'>
      <FontAwesomeIcon icon={faBraille} size="2xl" style={{color: "#FFFFFF",}} className='ml-4'/>
    </div>
    <div><img src={CGTIlogo} alt="" className='lg:w-98'/></div>
    <div className=' space-x-15 lg:ml-30'>
    <Link to="/" className='hover:text-blue-500 hover:underline'>Home</Link>
    <Link to="/About" className='hover:text-blue-500 hover:underline'>About</Link>
    <Link to="/Courses" className='hover:text-blue-500 hover:underline'>Courses</Link>
    <Link to="/Photo-Gallery" className='hover:text-blue-500 hover:underlinn'>Photo Gallary</Link>
    <Link to="/ContactUs" className='hover:text-blue-500 hover:underline'>Contact Us</Link>
    </div>
   </div>  

{/* mobile Menu Start */}
<div className=' px-4 py-2 lg:shadow-non shadow-2xl z-30  relative'>
    <div className='flex items-center justify-between'>
      <div className='lg:hidden'><img src={CGTIlogo} alt="" className='w-80'/></div>
      <div>
         <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl text-gray-700">
        {menuOpen ?  <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
    </button> 
      </div>
    </div> 
    {
      menuOpen && (
        <div className='space-y-3 mt-4 ml-2'>
          <Link to="/" className="block hover:text-blue-500">Home</Link>
          <Link to="/About" className="block hover:text-blue-500">About</Link>
          <Link to="/Courses" className="block hover:text-blue-500">Courses</Link>
          <Link to="/Photo-Gallery" className="block hover:text-blue-500">Photo Gallery</Link>
          <Link to="/ContactUs" className="block hover:text-blue-500">Contact Us</Link>
        </div>
      )}
</div>
    </nav>
  )   
}
export default Navbar
