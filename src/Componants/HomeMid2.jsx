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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    education: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/cgti_backend/demo.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Demo booked successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          location: "",
          education: "",
          message: "",
        });
      } else {
        setStatus("Failed to book demo. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try later.");
    }
  };
  return (
    <section className="pt-15 bg-[#F8FAFC]">
      {/* First Section Start */}
      <div className="grid lg:grid-cols-2 w-full px-6 lg:gap-x-4">
        <div className="flex justify-center mb-8 lg:mb-0">
          <img
            src={CGTIMid1}
            alt="CGTI Image"
            className="w-full max-w-md lg:max-w-full rounded-xl lg:mt-4"
          />
        </div>
        <div className="space-y-6 text-justify" data-aos="zoom-in">
          <span className="lg:text-5xl text-3xl font-bold Heading-text sm:text-center">
            What we promise for the
          </span><br className="lg:block hidden"/>
          <span className="lg:text-5xl text-3xl font-bold Heading-text lg:ml-0 ml-1">
            bright future of the {""} <span className="underline decoration-blue-500 font-bold">student</span>
          </span>
          <p className="mt-5 mb-10 lg:w-[88%] Body-text">
            we are always supportive of empowering our students with the
            necessary knowledge, skills and opportunities for a bright and
            successful future.
          </p>
          <ul className="space-y-5 lg:w-[90%]">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4 Body-text">
                <strong>Quality Education:</strong> We provide high-quality
                education with a focus on the latest curriculum and expert
                instructors dedicated to your success.
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4 Body-text">
                <strong>Industry Relevance:</strong> Our courses are designed to
                meet the demands of the ever-evolving technology industry,
                ensuring that you are well prepared for real-world challenges.
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <span className="ml-4 Body-text">
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
      <div className="grid lg:grid-cols-2 w-full px-6 mt-10 lg:tracking-[1px]">
        <div className="space-y-6 text-justify lg:mt-20 lg:ml-10" data-aos="zoom-in">
          <span className="lg:text-5xl text-3xl font-bold Heading-text">
            What <span className="underline decoration-blue-500">We</span> do ?
          </span>
          <p className="mt-5 mb-10 lg:w-[88%] Body-text">
            We believe that our growth as a training institute goes hand in hand
            with the growth and success of our students. Everyone in the CGTI
            family has a responsibility to collaboratively influence the
            practices, values and tools that make people successful IT
            professionals. We promote students' career development by creating
            opportunities that enable everyone to learn, think and innovate.
            Here at CGTI Technology, we help people develop their skills through
            computer software related courses.
          </p>
          <a href="/AboutUs"><button className="border Nav-text rounded-xl px-6 py-3 bg-[#F6CE22] hover:bg-[#f6cf22e3] text-black border-white">
            Explore More
          </button></a>
        </div>
        <div className="justify-center mb-8 lg:mb-0">
          <img
            src={CGTIMid2}
            alt="CGTI Image"
            className="w-full max-w-md lg:max-w-[93%] rounded-xl lg:mt-4 mt-15"
          />
        </div>
      </div>

      {/* Third Section Start */}
      <div className="grid lg:grid-cols-2 gap-x-10">
        {/* Right Side  start */}
        <div className="px-5 lg:ml-12 lg:mt-10 Body-text">
          <h1 className="lg:text-5xl font-bold mb-5 Heading-text text-3xl">Develop Your <span className="decoration-blue-500 underline">Career</span></h1>
          <p className="mb-5 w-[90%] Body-text">
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
          <h1 className="Heading-text lg:text-5xl text-3xl font-bold pt-3 mb-5">
            Book <span className="underline decoration-blue-500">Free</span> Demo Class
          </h1>
          <p className="mb-5 Body-text">
            Thank you for reaching out to UtechSoftware! Please fill the form
            right. Our team will contact you shortly.
          </p>
         <form onSubmit={handleSubmit} className="space-y-5 Body-text">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              type="text"
              placeholder="Contact No *"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="Location"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <input
              name="education"
              value={formData.education}
              onChange={handleChange}
              type="text"
              placeholder="Higher Education"
              className="bg-[#E8EDF6] px-2 py-3 w-full rounded-sm hover:shadow-xl"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-[#E8EDF6] px-2 py-3 w-full h-32 hover:shadow-xl"
            ></textarea>

            <button
              type="submit"
              className="border Nav-text rounded-xl px-6 py-3 bg-[#F6CE22] hover:bg-[#f6cf22e3] text-black border-white"
            >
              Book Demo
            </button>
          </form>
          {status && <p className="mt-4 text-green-600">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default HomeMid2;
