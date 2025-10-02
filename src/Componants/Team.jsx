    import React from "react";
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/pagination";
    import { Pagination } from "swiper/modules";

    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
    import puspender from "../assets/Puspender-team.png";
import priya from "../assets/CGTI-Priya-Teacher-1.png";
import sonali from "../assets/CGTI-Sonali-Teacher-1.png";
import neha from "../assets/CGTI-Neha-Teacher-1.png";

    // Team Data
    const teamMembers = [
    {
        id: 1,
        name: "Ashish Panwar",
        position: "Full Stack Developer",
        img: puspender,
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
        img: sonali,
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
        img: neha,
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
        <section className="bg-[#F7FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold  mb-10">Our Expert Team Member Will Help to Progress</h2>
            <p className="mb-10">Our team is here to provide the support and expertise you need. With their unwavering commitment to your growth, you can confidently stride forward on your educational and career path, knowing that you have a trusted partner in your pursuit of success.</p>
            <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
                <div className="bg-white shadow-md rounded-xl overflow-hidden group relative">
                    {/* Image */}
                    <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-100 object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href={member.socials.facebook} className="text-white hover:text-blue-500 text-xl">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href={member.socials.twitter} className="text-white hover:text-sky-400 text-xl">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href={member.socials.instagram} className="text-white hover:text-pink-500 text-xl">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={member.socials.linkedin} className="text-white hover:text-blue-700 text-xl">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    </div>

                    {/* Details */}
                    <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
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
