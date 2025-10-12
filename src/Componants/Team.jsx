import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import puspa from "../assets/Puspender-team.png";
import priya from "../assets/CGTI-Priya-Teacher-1.png";
import neha from "../assets/CGTI-Neha-Teacher-1.png";
import sonali from "../assets/CGTI-Sonali-Teacher-1.png";

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

const courses = [
  {
    id: 1,
    title: "Diploma Courses",
    desc: "We provides various types of Diploma courses for one year. All these are job oriented courses with basic to advance.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Certificate Courses",
    desc: "The duration of these courses is not very long. These courses are for working or non-working people. Therefore it is easy to complete this type of course in less months.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 3,
    title: "Short Term Courses",
    desc: "This course is done keeping in mind a particular software or model. So it is easy to complete this type of course in less time with best learning.",
    color: "bg-blue-600 text-white",
  },
  {
    id: 4,
    title: "Computer Teacher Training (CTTC)",
    desc: "This program is for those who want to make their career in teaching and training field. In the CTTC course, learners will not only acquire computer knowledge but will also learn how to effectively transfer this knowledge to their students.",
    color: "bg-green-50 text-green-600",
  },
];

const Team = () => {
  return (
    <>
      {/* Team Section */}
      <section className="bg-[#F8FAFC] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="lg:text-5xl text-4xl font-extrabold text-gray-800 mb-10 text-center Heading-text">
            Our Expert <span className="text-[#155DFC] underline">Team Member</span> Will Help to Progress
          </h1>
          <p className="mb-10 text-center max-w-3xl mx-auto Body-text">
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
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 transition duration-500">
                    <div className="flex gap-4 mb-4">
                      <a href={member.socials.facebook} className="text-white hover:text-blue-500 text-xl transition">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href={member.socials.twitter} className="text-white hover:text-sky-400 text-xl transition">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href={member.socials.instagram} className="text-white hover:text-pink-500 text-xl transition">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href={member.socials.linkedin} className="text-white hover:text-blue-600 text-xl transition">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-10 Heading-text">
            Featured Courses for your <span className="text-[#155DFC] underline">Success</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`${course.color} rounded-2xl p-6 shadow hover:shadow-lg transition relative`}
              >
                <span className="absolute bottom-4 right-4 text-6xl font-extrabold opacity-10">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3 className="text-lg font-bold mb-3 Heading-text">{course.title}</h3>
                <p className="text-1xl leading-relaxed Body-text">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
