import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faLaptopCode,
  faClock,
  faRocket,
  faWifi,
  faBook,
  faCertificate,
  faUserGraduate,
  faBriefcase,
  faChalkboardTeacher,
  faDisplay,
  faHandshake,
  faHeadphones,
  faStar,
  faLayerGroup,
  faTrophy,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/home3-bg1.jpg";
const FeaturesData = [
 {
    id: 1,
    title: "Expert & Experienced Trainers",
    icon: <FontAwesomeIcon icon={faGears} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 2,
    title: "Latest Tricks & Techniques",
    icon: <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 3,
    title: "Flexible Batch Timings",
    icon: <FontAwesomeIcon icon={faClock} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 4,
    title: "Work on Live Projects",
    icon: <FontAwesomeIcon icon={faRocket} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 5,
    title: "Internet Facility",
    icon: <FontAwesomeIcon icon={faWifi} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 6,
    title: "eBook Mobile Access",
    icon: <FontAwesomeIcon icon={faBook} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 7,
    title: "Online Certificate Verification",
    icon: <FontAwesomeIcon icon={faCertificate} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 8,
    title: "Practical Based Learning",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 9,
    title: "Job Oriented Courses",
    icon: <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 10,
    title: "Personal Guidance",
    icon: <FontAwesomeIcon icon={faUserGraduate} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 11,
    title: "Smart Classroom Setup",
    icon: <FontAwesomeIcon icon={faDisplay} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 12,
    title: "Industry-Level Projects",
    icon: <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 13,
    title: "Internship Opportunities",
    icon: <FontAwesomeIcon icon={faHandshake} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 14,
    title: "Doubt Clearing Sessions",
    icon: <FontAwesomeIcon icon={faHeadphones} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 15,
    title: "Top Rated Institute",
    icon: <FontAwesomeIcon icon={faStar} style={{ fontSize: "50px", color: "" }} />,
  },
  {
    id: 16,
    title: "Award Winning Education Center",
    icon: <FontAwesomeIcon icon={faTrophy} style={{ fontSize: "50px", color: "#005EAA" }} />,
  },
];

const Features = () => {
  return (
    <section className="bg-[#F2F5FA] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-10 Heading-text">
          Features & <span className="text-[#155DFC] underline">Facilities</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FeaturesData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 Heading-text">{item.icon}</div>
              <h2 className="text-lg font-semibold Body-text">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* new Section */}
      <div className="bg-cover bg-center lg:h-120 mt-20 lg:flex lg:py-0 py-10" style={{backgroundImage: `url(${bgImage})`}}>
          <div className="lg:px-12 lg:w-[68%] px-5 lg:mt-35 lg:pt-0 lg:text-start text-center">
            <h1 className="lg:text-4xl text-2xl text-white font-extrabold mb-8 Nav-text">We Provides Top-Quality Industry Relevant Computer Courses.</h1>
            <p className="lg:text-xl text-white Body-text">Get free counselling by our experienced counsellors. We offer you free demo and trial classes to evaluate your eligibility for the course.</p>
          </div>
          <div className="lg:mt-10 text-center lg:text-start space-y-5"> 
             <FontAwesomeIcon icon={faPhoneFlip} className="text-8xl mt-5 lg:ml-20" beat style={{color: "#ffffff",}} />
              <h1 className="text-2xl lg:mt-2 text-white font-extrabold Body-text">for enquiry Call us <span className="text-black underline text-4xl">now</span></h1>
              <h1 className="text-3xl text-white font-bold">+91-75006 79066</h1>
              <a href="/ContactUs"><button
                type="submit"
                className="Nav-text tracking-[1px] bg-[#00BBF0] hover:bg-[#00bcf094] text-black py-4 px-6 rounded-lg font-semibold transition duration-300" >
                Contact Us
              </button></a>
          </div>
      </div>
    </section>
  );
};
export default Features;
