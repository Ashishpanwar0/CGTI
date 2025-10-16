import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears,
  faPaintBrush,
  faCode,
  faLaptopCode,
  faLayerGroup, } from "@fortawesome/free-solid-svg-icons";
import CGTIHomeMid from "../assets/CGTIHomeMid.png";
import TextBackGroundColoreImage from "../assets/TextBackGroundColoreImage.jpg";
const Courses = [
  {
    id: 1,
    title: "Advance Diploma in Computer Applications (ADCA)",
    desc: "Gain complete knowledge of computers with a focus on office tools, accounting, and taxation. Ideal for students starting their computer education journey.",
    ican: (
      <FontAwesomeIcon
        icon={faGears}
        style={{ fontSize: "60px", color: "#000000" }}/>
    ),
    module: [
      "Basic Fundamentals of Computer",
      "Typing (English/Hindi)",
      "Microsoft Office",
      "Fundamentals of Accounts",
      "Accounting Package (Tally)",
      "Taxation (GST / TDS / TCS)",
    ],
  },
  {
    id: 2,
    title: "Advance Diploma in Desktop Publishing / Graphic Designing (ADDP)",
    desc: "Learn professional graphic designing and publishing with industry-standard tools like Photoshop, Illustrator, and CorelDRAW for print and digital media.",
    ican: (
      <FontAwesomeIcon
        icon={faPaintBrush}
        style={{ fontSize: "60px", color: "#000000" }}
      />
    ),
    module: [
      "Basic Fundamentals of Computer",
      "Adobe Photoshop",
      "CorelDRAW",
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
  },
  {
    id: 3,
    title: "Programming Fundamentals (C, C++, Java, Python)",
    desc: "Start your programming journey by learning logic building and coding fundamentals with the most popular programming languages.",
    ican: (
      <FontAwesomeIcon
        icon={faCode}
        style={{ fontSize: "60px", color: "#000000"}}
      />
    ),
    module: [
      "Introduction to Programming",
      "C Language",
      "C++ (Object-Oriented Programming)",
      "Core Java",
      "Python Programming",
      "Project Work & Assignments",
    ],
  },
  {
    id: 4,
    title: "Web Design & Development",
    desc: "Master front-end and back-end development to build responsive and interactive websites using modern web technologies.",
    ican: (
      <FontAwesomeIcon
        icon={faLaptopCode}
        style={{ fontSize: "60px", color: "#000000"}}
     />
    ),
    module: [
      "HTML, CSS, JavaScript",
      "Responsive Web Design",
      "Bootstrap & Tailwind CSS",
      "React.js",
      "Node.js & Express.js",
      "MySQL / MongoDB",
    ],
  },
  {
    id: 5,
    title: "Programming and Full Stack Development",
    desc: "Become a professional full-stack developer by learning both front-end and back-end technologies with real-world project experience.",
    ican: (
      <FontAwesomeIcon
        icon={faLayerGroup}
        style={{ fontSize: "60px", color: "#000000" }}
      />
    ),
    module: [
      "HTML, CSS, JavaScript (Front-End)",
      "React.js & Tailwind CSS",
      "Node.js & Express.js",
      "Database (MySQL / MongoDB)",
      "API Development",
      "Final Project: Full Stack Application",
    ],
  },
];

const HomeMid = ({}) => {
  return (
    <section className="bg-[#F8FAFC] py-8">
      <section className="pt-8 py-6 ">
        {/* first Section Start */}
        <div className="grid lg:grid-cols-2 gap-x-18 lg:px-5 px-2 mb-8" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className="md:px-6"> 
            <img src={CGTIHomeMid} alt="" className="lg:w-[100%] md:w-[100%]" />
          </div>
          <div className="px-6 lg:px-0">
            {/* <span
              className="absolute text-[110px] text-[#E3E7ED] lg:mt-[-110px] lg:ml-10 tracking-[10px] font-extrabold select-none 
                 stroke-text"
            >
              About
            </span> */}
            <h1 className="lg:text-[45px] text-2xl font-bold mb-5 text-[#1F2531] transform-1d lg:mt-0 mt-8 Heading-text tracking-[1px]">
              Computer Guru Training{" "}<span className="underline decoration-blue-500">Institute</span> -
              Rishikesh
            </h1>
            <p className="text-1xl mb-5 text-justify Body-text lg:w-[90%] text-[#c3c8c7] ">
              Computer Guru Institute is one of the best training institutes in
              Rishikesh, offering modern technology and excellent computer
              training to students with 100% satisfaction. The institute has
              highly qualified teachers, updated systems, modern labs, and many
              facilities for our learners, ensuring proper guidance, practical
              exposure, and career-oriented knowledge that helps students build
              a strong foundation for their bright future ahead.
            </p>
            <p className="text-[#1F2531] text-justify Heading-text lg:w-[90%] mb-5">
              Our institute not only focuses on computer skills but also on
              overall personality development, communication, and confidence
              building. We believe that true education comes with practical
              exposure, so every student gets hands-on training with real-life
              projects and assignments.
            </p>

            <p className="text-[#1F2531] text-justify lg:w-[90%] mb-5 Heading-text">
              With flexible class timings, affordable fee structure, and
              career-oriented courses, Computer Guru Training Institute has
              become the first choice for students in Rishikesh who want to make
              a strong career in the digital era.
            </p>

            <p className="text-[#1F2531] text-justify Heading-text lg:w-[90%] mb-8">
              Our vision is to empower every student with computer knowledge so
              that they are ready to face future challenges and grab better
              opportunities in both education and employment.
            </p>
            <button className="border-1 rounded-xl px-6 py-3 tracking-[1px] Nav-text bg-blue-700 hover:bg-blue-800 text-white">
              Explore More
            </button>
          </div>
        </div>

        <div>
          <h1
            className="lg:text-[150px] text-[40px] md:text-[60px] font-extrabold bg-clip-text text-transparent bg-center bg-cove lg:text-center lg:px-0 px-8 Heading-text"
            style={{ backgroundImage: `url(${TextBackGroundColoreImage})` }}
          >
            Lead the Future
          </h1>
        </div>
      </section>

      <section>
        <div className="lg:flex bg-[#F2F5FA] lg:h-140 h-120 justify-center lg:px-10 lg:pt-20 pt-10 px-8 space-y-5">
          <h1 className="lg:text-4xl font-extrabold lg:w-full text-3xl Heading-text">
            <span className="underline decoration-blue-500 Heading-text">Courses</span>{" "}
            tailored to your needs
          </h1>
          <p className="lg:w-2/2 Body-text">
            Our computer courses are carefully designed to provide a
            comprehensive and dynamic learning experience for students of all
            levels, from beginners to advanced users.
          </p>
        </div>

        {/* Course Card Section Start */}
        <div className="lg:w-full mx-auto px-8 lg:px-18 mt-[-230px] lg:mt-[-380px]" data-aos="zoom-in">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition duration-300 space-y-5">
                  <div className="w-full">{course.ican}</div>
                  <h1 className="text-[22px] font-bold mb-5 Heading-text">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 text-1xl mb-8 Body-text">
                    {course.desc}
                  </p>
                  <ul className="space-y-5 Body-text">
                    {course.module.map((mod, i) => (
                      <li key={i}>
                        <span className="text-teal-500 mr-2">✔</span>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5 text-center">
          <h1 className="mb-6 text-xl lg:text-5xl px-6 text-[blue-700] lg:text-black">
            We have all the courses to help you improve your career.
          </h1>
          <a href="/Courses">
            <button className="border-1 rounded-xl px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white Nav-text tracking-[1px]">
            Explore More
          </button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default HomeMid;
