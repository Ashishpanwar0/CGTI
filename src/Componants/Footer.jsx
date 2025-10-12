import React from "react";
import { Link } from "react-router-dom";
import CGTIlogo from '../assets/CGTIlogo.png';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#141b24] text-gray-300 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-15 Nav-text">
        <div>
          <img
            src={CGTIlogo}
            alt="Computer Guru Training Institute"
            className="w-38 mb-4"
          />
          <p className="text-1xl leading-relaxed text-gray-400 lg:w-[120%] Body-text">
            The best training centers in Rishikesh provide pupils with
            top-notch computer instruction and cutting-edge technology with a
            100% satisfaction rate.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-16 Nav-text">
          <h3 className="text-white  mb-5 text-xl lg:mt-3 Heading-text">Quick Links</h3>
          <ul className="space-y-2 lg:space-y-6 text-1xl">
            {/* {["Home", "About Us", "Courses", "Photo Gallery", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 flex items-center gap-2 transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[12px]"
                    />
                    {item}
                  </a>
                </li>
              )
            )} */}
          <Link to="/" className="block hover:text-blue-500 Nav-text">Home</Link>
          <Link to="/AboutUs" className="block hover:text-blue-500 Nav-text">About</Link>
          <Link to="/Courses" className="block hover:text-blue-500 Nav-text">Courses</Link>
          <Link to="/PhotoGallery" className="block hover:text-blue-500 Nav-text">Photo Gallery</Link>
          <Link to="/ContactUs" className="block hover:text-blue-500 Nav-text">Contact Us</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="Nav-text">
          <h3 className="text-white mb-5 text-xl lg:mt-3 Heading-text">Contact Info</h3>
          <ul className="space-y-3 lg:space-y-6 text-1xl">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-400 mt-1"
              />
              <div>
                <p>+91-7500679066</p>
                <p>+91-7455857367</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-400 mt-1"
              />
              <div>
                <p>support@computerguru.co.in</p>
                <p>cgtirishikesh@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-blue-400 mt-1"
              />
              <p>Rishikesh, Uttarakhand, India</p>
            </li>
          </ul>
        </div>

        {/* Latest News */}
        <div className="lg:ml-10 Nav-text">
          <h3 className="text-white mb-5 text-xl lg:mt-3 Heading-text">Latest News</h3>
          <div className="flex items-start gap-3 mb-4">
            <div>
              <p className="font-medium text-white text-1xl">मॉर्निंग बेल्स</p>
              <p className="text-xs text-gray-400 text-1xl">September 12, 2025</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="/assets/news2.jpg"
              alt="News"
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div>
              <p className="font-medium text-white text-1xl">यमकेश्वर ब्लॉक</p>
              <p className="text-xs text-gray-400 text-1xl">December 28, 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Computer Guru Training Institute — All
        Rights Reserved.
        <br />
        {/* <span className="">Devloper By Ashish Panwar</span> */}
      </div>
    </footer>
  );
};
export default Footer;
