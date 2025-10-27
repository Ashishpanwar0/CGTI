import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import courseData from "../Componants/coursesData";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-3 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-3 rounded-md text-left bg-[#F2F5FA] hover:bg-blue-300 hover:shadow-lg transition"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] p-4" : "max-h-0"
        } text-gray-700`}
      >
        {content}
      </div>
    </div>
  );
};

function CourseDetails() {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="text-center mt-20 text-xl">Course not found</div>;
  }

  return (
    <>
      <Navbar />
      <SecondHeader
        bgImage={course.bgImage}
        title={course.title}
        subtitle="Home . Course Details"
      />

      <div className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="lg:text-4xl text-xl font-bold mb-4 text-center">{course.title}</h2>
        <p className="text-gray-700 text-justify mb-8 text-lg">{course.desc}</p>

        {/* 1st Semester Start */}
        <AccordionItem
          title="1st Semester"
          content={
            <ul className="list-disc pl-6 space-y-2">
              {course.semester1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />

        {/* 2nd Semester Start */}
        <AccordionItem
          title="2nd Semester"
          content={
            <ul className="list-disc pl-6 space-y-2">
              {course.semester2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />

        {/* Back button (optional) */}
        {/* <div className="text-center mt-10">
          <Link
            to="/courses"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Courses
          </Link>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;
