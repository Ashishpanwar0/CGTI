import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import puspa from '../assets/Puspender-team.png';
import priya from '../assets/CGTI-Priya-Teacher-1.png';
import neha from '../assets/CGTI-Neha-Teacher-1.png';
import sonali from '../assets/CGTI-Sonali-Teacher-1.png';



const teamMembers = [
  {
    id: 1,
    name: "Puspendar Bist",
    position: "Full Stack Developer",
    img: puspa,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "UI/UX Designer",
    img: priya,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "Backend Engineer",
    img: neha,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Sneha Gupta",
    position: "Digital Marketer",
    img: sonali,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold  text-gray-800 mb-10">
         Our Expert Team Member Will Help to Progress
        </h1>
        <p className="mb-10">Our team is here to provide the support and expertise you need. With their unwavering commitment to your growth, you can confidently stride forward on your educational and career path, knowing that you have a trusted partner in your pursuit of success.</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-100 object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 transition duration-500">
                    <div className="flex gap-4 mb-4">
                      <a href={member.socials.facebook} className="text-white hover:text-blue-500 text-xl transition"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href={member.socials.twitter} className="text-white hover:text-sky-400 text-xl transition"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href={member.socials.instagram} className="text-white hover:text-pink-500 text-xl transition"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href={member.socials.linkedin} className="text-white hover:text-blue-600 text-xl transition"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
