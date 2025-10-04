import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CGTIMid1 from "../assets/CGTIMid2.png";
import CGTIMid2 from "../assets/CGTIMid2.1.png";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-5 lg:w-[98%]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-3 rounded-sm text-left bg-[#F2F5FA] hover:bg-blue-300 hover:shadow-xl"
      >
        {title}
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 p-4" : "max-h-0"
        } text-gray-600`}
      >
        {content}
      </div>
    </div>
  );
};

const HomeMid2 = () => {
  return (
    <section className="pt-15 bg-[#F8FAFC]">
      {/* First Section Start */}
      <div className="grid lg:grid-cols-2 w-full px-8 lg:gap-x-4">
        <div className="flex justify-center mb-8 lg:mb-0">
          <img
            src={CGTIMid1}
            alt="CGTI Image"
            className="w-full max-w-md lg:max-w-full rounded-xl lg:mt-4"
          />
        </div>
        <div className="space-y-6 text-justify">
          <span className="lg:text-4xl font-bold tracking-[2px]">
            What we promise for the
          </span>
          <br />
          <span className="lg:text-4xl font-bold">
            bright future of the <span className="text-[#155DFC] underline">student</span>
          </span>
          <p className="mt-5 mb-10 lg:w-[88%] tracking-[1px]">
            we are always supportive of empowering our students with the
            necessary knowledge, skills and opportunities for a bright and
            successful future.
          </p>
          <ul className="space-y-5 lg:w-[90%]">
            <li className="flex tracking-[2px] items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4">
                <strong>Quality Education:</strong> We provide high-quality
                education with a focus on the latest curriculum and expert
                instructors dedicated to your success.
              </span>
            </li>
            <li className="flex tracking-[2px] items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4">
                <strong>Industry Relevance:</strong> Our courses are designed to
                meet the demands of the ever-evolving technology industry,
                ensuring that you are well prepared for real-world challenges.
              </span>
            </li>
            <li className="flex tracking-[2px] items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4">
                <strong>Flexibility:</strong> With flexible scheduling options
                including 1 Year Diploma, 6 Months Certificate Course, Short
                Term and Professional Course, we meet your unique needs and
                commitments.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section Start */}
      <div className="grid lg:grid-cols-2 w-full px-5 mt-10">
        <div className="space-y-6 text-justify lg:mt-20 lg:ml-10">
          <span className="lg:text-4xl font-bold tracking-[2px]">
            What <span className="text-[#155DFC] underline">We</span> do ?
          </span>
          <p className="mt-5 mb-10 lg:w-[88%] tracking-[1px]">
            We believe that our growth as a training institute goes hand in hand
            with the growth and success of our students. Everyone in the CGTI
            family has a responsibility to collaboratively influence the
            practices, values and tools that make people successful IT
            professionals. We promote students' career development by creating
            opportunities that enable everyone to learn, think and innovate.
            Here at CGTI Technology, we help people develop their skills through
            computer software related courses.
          </p>
          <button className="border rounded-xl px-6 py-3 bg-[#005EAA] hover:bg-[#D4A017] text-white">
            Explore More
          </button>
        </div>
        <div className="justify-center mb-8 lg:mb-0">
          <img
            src={CGTIMid2}
            alt="CGTI Image"
            className="w-full max-w-md lg:max-w-[93%] rounded-xl lg:mt-4"
          />
        </div>
      </div>

      {/* Third Section Start */}
      <div className="grid lg:grid-cols-2 gap-x-10">
        {/* Right Side  start */}
        <div className="px-5 lg:ml-12 lg:mt-10">
          <h1 className="text-5xl font-bold mb-5">Develop Your <span className="text-[#155DFC] underline">Career</span></h1>
          <p className="mb-5 w-[90%]">
            Have you passed class 12th or graduation? Or you want to make your
            bright future in the field of computer.
          </p>
          {/* Accordion Items */}
          <AccordionItem
            title="Learn Computer from Basic to Advanced"
            content=" 1 Year Diploma, 6 Months Certificate Course, Short Term Course,
              Professional Course, Data Entry Operator Course, Typing:
              Hindi/English"
          />
          <AccordionItem
            title="Wide Range of Courses"
            content="We have a variety of courses available. Students can offer any course according to their interest."
          />
          <AccordionItem
            title="Choose any flexible time for your course"
            content="Students can choose any flexible timing for the course as per their convenience. We learn students individually and group so that the student’s attention remains focused on education."
          />
          <AccordionItem
            title="Well Educated Faculty"
            content="All our teachers are experts in their respective fields. Communicates very well with the students and keeps the focus on the students regarding their education."
          />
          <AccordionItem
            title="Authoritative Certificate for All Over India"
            content="Our certificates are recognised by the Government. You can also verify these certificates online on our student’s portal."
          />
        </div>
        {/* left side start */}
        <div className="lg:w-[90%] shadow-xl px-8 py-8 lg:mt-[-20px] relative z-20 rounded-sm hover:shadow-2xl">
          <h1 className="text-5xl font-bold pt-6 mb-5">
            Book <span className="text-[#155DFC] underline">Free</span> Demo Class
          </h1>
          <p className="mb-5">
            Thank you for reaching out to UtechSoftware! Please fill the form
            right. Our team will contact you shortly.
          </p>
          <form action="" className="space-y-10">
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <textarea
              name=""
              id=""
              placeholder="Message *"
              className="bg-[#E8EDF6] px-2 py-3 w-full h-50 hover:shadow-xl"
            ></textarea>

            <button className="border rounded-xl px-6 py-3 bg-[#005EAA] hover:bg-[#D4A017] text-white">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeMid2;
