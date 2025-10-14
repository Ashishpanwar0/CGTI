import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Homesidebar from "./Homesidebar";

import CGTIMail from "../assets/CGTIMail.gif";
import CGTIlocation from "../assets/CGTIlocation.gif";
import CGTIPhone from "../assets/CGTIPhone.gif";
import CGTIlogo from "../assets/CGTI-Logo.png";
import CGTIFacbook from "../assets/CGTIFacbook.gif";
import CGTIInsta from "../assets/CGTIInstragram.gif";
import CGTILink from "../assets/CGTILink.gif.gif";
import CGTITwitter from "../assets/CGTITwitter.gif";
import Dotee from "../assets/dots.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("mainNavbar");
      if (navbar) {
        if (window.scrollY > 120) {
          navbar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "z-50",
            "shadow-sm",
            "bg-white"
          );
        } else {
          navbar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "z-50",
            "shadow-lg",
            "bg-white"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {/* Top contact info bar */}
      <div className="space-y-2 px-12 py-3 border-b-1 lg:w-[100%] border-[#F2F5FA] shadow-2xs lg:block hidden tracking-[2px]">
        <div className="flex gap-x-13 items-center">
          <div className="flex items-center gap-x-2">
            <img src={CGTIMail} alt="" className="lg:w-7" />
            <h1 className="text-[#000000]">cgtirishikesh@gmail.com</h1>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={CGTIPhone} alt="" className="lg:w-7" />
            <h1 className="text-[#000000]">+91-7500679066, 7455857367</h1>
          </div>
          <div className="ml-auto">
            <h1 className="text-[#000000]">
              Open Hours of Institute Mon - Sat: 7.00 am - 7.00 pm
            </h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-x-2 items-center">
            <img src={CGTIlocation} alt="" className="lg:w-7" />
            <h1 className="text-[#000000]">IDPL and Shyampur</h1>
          </div>
          <div className="flex lg:gap-3 lg:ml-auto">
            <img src={CGTIFacbook} alt="" className="lg:w-8 h-8" />
            <img src={CGTIInsta} alt="" className="lg:w-8 h-8" />
            <img src={CGTILink} alt="" className="lg:w-8 h-8" />
            <img src={CGTITwitter} alt="" className="lg:w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Navbar (Logo + Links) */}
      <div
        id="mainNavbar"
        className="lg:flex items-center text-1xl shadow-2sm space-x-15 hidden transition-all duration-300"
      >
        <div className="bg-[#005AAC] py-6 w-20">
          {/* <FontAwesomeIcon
            icon={faBraille}
            size="2xl"
            style={{ color: "#FFFFFF" }}
            className="ml-4"
          /> */}
          <img
            src={Dotee}
            alt="CGTIHome"
            className="lg:w-15 ml-1 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
        <div>
          <img src={CGTIlogo} alt="CGTI Logo" className="lg:w-98" />
        </div>

        <div className="space-x-15 lg:ml-19 tracking-[2px]">
          <Link to="/" className="hover:text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/AboutUs" className="hover:text-blue-500 hover:underline">
            About
          </Link>
          <Link to="/Courses" className="hover:text-blue-500 hover:underline">
            Courses
          </Link>
          <Link
            to="/PhotoGallery"
            className="hover:text-blue-500 hover:underline"
          >
            Photo Gallery
          </Link>
          <Link to="/ContactUs" className="hover:text-blue-500 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu Section */}
      <div className="px-4 py-2 lg:shadow-none shadow-2xl z-30 relative">
        <div className="flex items-center justify-between">
          
          <div className="lg:hidden">
            <img src={CGTIlogo} alt="" className="w-80" />
          </div>
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-gray-700"
            >
              {menuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="space-y-3 mt-4 ml-2">
            <Link to="/" className="block hover:text-blue-500">
              Home
            </Link>
            <Link to="/AboutUs" className="block hover:text-blue-500">
              About
            </Link>
            <Link to="/Courses" className="block hover:text-blue-500">
              Courses
            </Link>
            <Link to="/PhotoGallery" className="block hover:text-blue-500">
              Photo Gallery
            </Link>
            <Link to="/ContactUs" className="block hover:text-blue-500">
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* Sidebar (no dark background) */}
      <div
        className={`fixed top-0 left-0 h-full w-[380px] bg-[#1F2531] z-[9999] shadow-2xl transform transition-transform duration-500 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-3 right-2 text-white text-3xl"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>
        <Homesidebar />
      </div>
    </nav>
  );
};

export default Navbar;

/////// this is nevbar new Fix Contant /////
