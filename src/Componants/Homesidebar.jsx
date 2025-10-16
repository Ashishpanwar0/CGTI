import react from "react";
import CGTIlogo from "../assets/CGTIlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faSquareXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Homesidebar = ({}) => {
  return (
    <section className="bg-[#1F2531] py-5 space-y-10 items-center lg:w-90 overflow-auto">
      <div className="justify-center text-center">
        <h1 className="Heading-text mb-5 text-[white] font-extrabold">
          COMPUTER GURU TRAINING INSTITUTE
        </h1>
        <img src={CGTIlogo} alt="CGTILOGO" className="lg:ml-16 ml-20" />
      </div>
      <div className="flex text-white">
        <div className=" text-white p-4 rounded-full">
          <FontAwesomeIcon icon={faLocationDot} className="text-4xl mt-1" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold Heading-text">
            Main Branch: IDPL (Rishikesh)
          </h2>
          <p className="Body-text text-sm">
            Gali No. 15, Geeta Nagar, IDPL, Virbhadra, Rishikesh, Dehradun,
            Uttarakhand - 249202
          </p>
        </div>
      </div>
      <div className="flex text-white">
        <div className=" text-white p-4 rounded-full">
          <FontAwesomeIcon icon={faLocationDot} className="text-4xl mt-1" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold Heading-text">
            Branch-2: Shyampur (Rishikesh)
          </h2>
          <p className="Body-text text-sm">
            Guljar Farm, Gali No.22, Hatt Road Shyampur, Rishikesh, Dist.-
            Dehradun, Uttarakhand-249204
          </p>
        </div>
      </div>
      <div className="flex text-white">
        <div className=" text-white p-4 rounded-full">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl mt-1" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold Heading-text">Mail Us</h2>
          <p className="Body-text text-sm">support@computerguru.co.in</p>
          <p className="Body-text text-sm">cgtirishikesh@gmail.com</p>
        </div>
      </div>

      <div className="flex text-white">
        <div className=" text-white p-4 rounded-full ">
          <FontAwesomeIcon icon={faPhone} className="text-4xl mt-1" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold Heading-text">Call Us</h2>
          <p className="Body-text text-sm">+91 8077545036</p>
          <p className="Body-text text-sm">+91 7060032534</p>
        </div>
      </div>
      <div className="flex space-x-4 ml-8">
        <a href="#" className="hover:text-blue-400 transition-all duration-300 bg-[#094D8A] rounded-full p-2">
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#FFFFFF",}}/>
        </a>
        <a href="#" className="hover:text-pink-400 transition-all duration-300 bg-[#094D8A] rounded-full p-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#FFFFFF",}}/>
        </a>
        <a href="#" className="hover:text-red-500 transition-all duration-300 bg-[#094D8A] rounded-full p-2">
          <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#FFFFFF",}}/>
        </a>
        
         <a href="#" className="hover:text-red-500 transition-all duration-300 bg-[#094D8A] rounded-full p-2">
          <FontAwesomeIcon icon={faSquareXTwitter} size="lg" style={{color: "#FFFFFF",}}/>
        </a>
       
        <a href="#" className="hover:text-red-500 transition-all duration-300 bg-[#094D8A] rounded-full p-2">
           <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#FFFFFF",}}/>
        </a>
      </div>
    </section>
  );
};
export default Homesidebar;
