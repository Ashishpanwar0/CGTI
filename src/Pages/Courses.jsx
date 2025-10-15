import React from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import CGTICourses from  "../assets/CGTI Courses.jpg";

import img1 from "../Coursesgallery/Courses-1.png";
import img2 from "../Coursesgallery/Courses-2.png";
import img3 from "../Coursesgallery/Courses-3.jpg";
import img4 from "../Coursesgallery/Courses-4.png";
import img5 from "../Coursesgallery/Courses-5.jpg";
import img6 from "../Coursesgallery/Courses-6.png";
import img7 from "../Coursesgallery/Courses-7.png";
import img8 from "../Coursesgallery/Courses-8.png";
import img9 from "../Coursesgallery/Courses-9.jpg";





const CourseSection = [
  {
    id: 1,
    src: img1, alt: "Course1",
    title: "Advance Diploma in Computer Application (ADCA)"
  },
  {
    id: 2,
    src: img2, alt: "Course2",
    title: "Advance Diploma in Computer Application & Programming (ADCAP)"
  },
  {
    id: 3,
    src: img3, alt: "Course3",
    title: "Advance Diploma in Desktop Publishing / Graphic Designing (ADDP)"
  },
  {
    id: 4,
   src: img4, alt: "Course4",
    title: "Advance Diploma in Website Designing (ADWD)"
  },
  {
    id: 5,
   src: img5, alt: "Course5",
    title: "Diploma In Financial Accounting (DFA)"
  },
  {
    id: 6,
   src: img6, alt: "Course6",
    title: "Certificate in Computer Application (CCA)"
  },
  {
    id: 7,
   src: img7, alt: "Course7",
    title: "Computer Teacher Training Course (CTTC)"
  },
  {
    id: 8,
   src: img8, alt: "Course8",
    title: "Certificate in Data Entry Operator"
  },
  {
    id: 9,
   src: img9, alt: "Course9",
    title: "Typing: Hindi/English"
  },
]

function Courses() {
  return(
     <>
      <Navbar/>
      <SecondHeader bgImage={CGTICourses} title="Courses " subtitle="Home . Courses" />
     <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:px-10 py-20 p-5" data-aos="zoom-in">
        {CourseSection.map((course) => (
          <div key={course.id} className="text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition">
            <img
              src={course.src}
              alt={course.alt}
              className="w-full h-60 object-cover rounded-md"
            />
            <h1 className="mt-3 text-lg font-semibold text-gray-800 Heading-text">
              {course.title}
            </h1>
          </div>
        ))}
      </section>
      <Footer/>
    </>
  );
}

export default Courses;
