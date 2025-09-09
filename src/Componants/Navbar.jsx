import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBraille } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CGTIlogo from '../assets/CGTI-Logo.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/social.png';
import twitter from '../assets/twitter.png';

const Navbar = ({}) => {
  return (
    <nav>
      <div className='space-y-2 py-3 border-b-1 border-[#F2F5FA] shadow-2xs lg:block hidden'>
        <div className='flex gap-x-13 lg:ml-12 items-center'>
            <div className='flex items-center gap-x-2'>
              <FontAwesomeIcon icon={faAt} fade style={{color: "#74C0FC",}} size="1xl"/>
             <h1 className='text-[#000000]'>cgtirishikesh@gmail.com</h1>
            </div>
            <div className='flex items-center gap-x-2'>
              <FontAwesomeIcon icon={faPhone} fade style={{color: "#74C0FC",}} size="1xl"/>
              <h1 className='text-[#000000]'>+91-7500679066, 7455857367</h1>
            </div>
            <div className='ml-75'>
              <h1 className='text-[#000000]'>Open Hours of Institute Mon - Sat: 7.00 am - 7.00 pm</h1>
            </div>
        </div>

        <div className='flex lg:ml-12'>
          <div className='flex gap-x-2 items-center'>
            <FontAwesomeIcon icon={faLocationDot} beatFade size="1xl" style={{color: "#74C0FC",}} />
            <h1 className='text-[#000000]'>IDPL and Shyampur</h1>
          </div>
          <div className='flex lg:w-7 lg:gap-3 lg:ml-238'>
          <img src={facebook} alt="" />
           <img src={insta} alt="" />
           <img src={twitter} alt="" />
          </div>
        </div>
      </div>

   <div className='flex items-center text-1xl shadow-2sm space-x-15'>
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
    </nav>   
  )
}
export default Navbar
