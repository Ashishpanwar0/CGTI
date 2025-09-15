import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import CGTIHomeMid from '../assets/CGTIHomeMid.png';
import TextBackGroundColoreImage from '../assets/TextBackGroundColoreImage.jpg';

const Courses =[
    {
        id: 1, title: "Advance Diploma in Computer Applications (ADCA)", desc: "As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.",
        ican: <FontAwesomeIcon icon={faGears} beatFade style={{fontSize: "70px",color: "#74C0FC",}}/>,
        module:[
             "Basic Fundamental of computer",
             "Typing (English/Hindi)",
             "Microsoft Office",
             "Fundamentals of Accounts",
             "Accounting Package Tally",
             "Taxation (GST / TDS / TCS)",
        ],
    },
        {
        id: 2, title: "Advance Diploma in Computer Applications (ADCA)", desc: "As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.",
        ican: <FontAwesomeIcon icon={faGears} beatFade style={{fontSize: "70px",color: "#74C0FC",}}/>,
        module:[
             "Basic Fundamental of computer",
             "Typing (English/Hindi)",
             "Microsoft Office",
             "Fundamentals of Accounts",
             "Accounting Package Tally",
             "Taxation (GST / TDS / TCS)",
        ],
    },
        {
        id: 3, title: "Advance Diploma in Computer Applications (ADCA)", desc: "As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.",
        ican: <FontAwesomeIcon icon={faGears} beatFade style={{fontSize: "70px",color: "#74C0FC",}}/>,
        module:[
             "Basic Fundamental of computer",
             "Typing (English/Hindi)",
             "Microsoft Office",
             "Fundamentals of Accounts",
             "Accounting Package Tally",
             "Taxation (GST / TDS / TCS)",
        ],
    },
    {
        id: 3, title: "Advance Diploma in Computer Applications (ADCA)", desc: "As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.",
        ican: <FontAwesomeIcon icon={faGears} beatFade style={{fontSize: "70px",color: "#74C0FC",}}/>,
        module:[
             "Basic Fundamental of computer",
             "Typing (English/Hindi)",
             "Microsoft Office",
             "Fundamentals of Accounts",
             "Accounting Package Tally",
             "Taxation (GST / TDS / TCS)",
        ],
    },
       {
        id: 3, title: "Advance Diploma in Computer Applications (ADCA)", desc: "As we know that computers are become our basic need. We provide fundamental computer knowledge along with a professional computer course to improve your skills.",
        ican: <FontAwesomeIcon icon={faGears} beatFade style={{fontSize: "70px",color: "#74C0FC",}}/>,
        module:[
             "Basic Fundamental of computer",
             "Typing (English/Hindi)",
             "Microsoft Office",
             "Fundamentals of Accounts",
             "Accounting Package Tally",
             "Taxation (GST / TDS / TCS)",
        ],
    },
]

const HomeMid  = ({}) => {
    return(
        <>
            <section className='pt-8 shadow-sm py-6'>
                {/* first Section Start */}
                <div className='lg:flex gap-x-40 lg:px-5 px-8 lg:ml-10 mb-8'>
                   <div className=''>
                     <img src={CGTIHomeMid} alt="" className='lg:w-[100%]'/>
                   </div>
                    <div className='lg:w-130'>
                         <span className="absolute text-[110px] text-[#E3E7ED] lg:mt-[-110px] lg:ml-10 tracking-[10px] font-extrabold select-none 
                 stroke-text">About</span>
                        <h1 className='lg:text-[40px] text-4xl font-bold mb-2 text-[#1F2531] transform-1d lg:mt-0 mt-8'>Computer Guru Training <span className='underline decoration-blue-500'>Institute</span> - Rishikesh</h1>
                        <p className='text-1xl mb-5 text-justify tracking-3 leading-[1.6] text-[#C3C8C7]'>Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education. We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology.</p>
                        <p className='text-[#1F2531] text-justify tracking-3 leading-[1.6] mb-5'>Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.</p>
                        <button className='border-1 rounded-xl px-6 py-3'>Explore More</button>
                    </div>
                </div>

                <div>
                   <h1 className="lg:text-[150px] text-5xl font-extrabold bg-clip-text text-transparent bg-center bg-cove lg:text-center lg:px-0 px-8" style={{ backgroundImage: `url(${TextBackGroundColoreImage})` }}>Lead the Future</h1>
                </div>  
            </section>

            <section>
                <div className='lg:flex bg-[#F2F5FA] lg:h-140 h-120 justify-center lg:px-10 lg:pt-20 pt-10 px-8 space-y-5'>
                    <h1 className='lg:text-4xl font-extrabold lg:w-full text-3xl'><span className='underline decoration-blue-500'>Courses</span> tailored to your needs</h1>
                    <p className='lg:w-2/2'>Our computer courses are carefully designed to provide a comprehensive and dynamic learning experience for students of all levels, from beginners to advanced users.</p>
                </div>
                
              {/* Course Card Section Start */}
<div className="lg:w-full mx-auto px-8 lg:px-18 mt-[-230px] lg:mt-[-380px]">
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
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition duration-300 space-y-5">
            <div className='w-full'>{course.ican}</div>
          <h1 className="text-[22px] font-bold mb-5">{course.title}</h1>
          <p className="text-gray-600 text-1xl mb-8">{course.desc}</p>
          <ul className="space-y-5">
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

            </section>
            </>
    );
};

export default HomeMid