import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faLinkedin } from "@fortawesome/free-solid-svg-icons";

import puspa from "../Gallery/CGTIGallery1.jpg";
import priya from "../Gallery/CGTIGallery2.jpg";
import neha from "../Gallery/CGTIGallery3.jpeg";
import sonali from "../Gallery/CGTIGallery4.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Puspendar Bisht",
    position: "Full Stack Developer",
    img: puspa,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Priya Kothari",
    position: "UI/UX Designer",
    img: priya,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Tanu",
    position: "Backend Engineer",
    img: neha,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Sonali",
    position: "Digital Marketer",
    img: sonali,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <>
      {/* Team Section */}
      <section className="bg-[#F8FAFC] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-800 mb-10 text-center Heading-text">
            Our Expert <span className="underline decoration-blue-500">Team Member</span> Will Help to Progress
          </h1>
          <p className="mb-10 max-w-3xl mx-auto Body-text text-justify lg:text-center">
            Our team is here to provide the support and expertise you need. With
            their unwavering commitment to your growth, you can confidently stride
            forward on your educational and career path, knowing that you have a
            trusted partner in your pursuit of success.
          </p>

          {/* Grid Instead of Swiper */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="zoom-in">
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 transition duration-500">
                    <div className="flex gap-4 mb-4">
                      <a href={member.socials.facebook} className="text-white hover:text-blue-500 text-xl transition">
                        {/* <FontAwesomeIcon icon={faFacebook} /> */}
                      </a>
                      <a href={member.socials.twitter} className="text-white hover:text-sky-400 text-xl transition">
                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                      </a>
                      <a href={member.socials.instagram} className="text-white hover:text-pink-500 text-xl transition">
                        {/* <FontAwesomeIcon icon={faInstagram} /> */}
                      </a>
                      <a href={member.socials.linkedin} className="text-white hover:text-blue-600 text-xl transition">
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 ">{member.name}</h3>
                  <p className="text-1xl text-gray-500 CGTISpacial">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

