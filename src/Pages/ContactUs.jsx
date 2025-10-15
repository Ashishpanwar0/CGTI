import React, { useState } from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import CGTIContact from "../assets/CGTIContact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Homesidebar from "../Componants/Homesidebar";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Server error. Please try again later.");
    }
  };
  return (
    <>
      <Navbar />
      <SecondHeader
        bgImage={CGTIContact}
        title="Contact Us"
        subtitle="Home . Contact Us"
      />
      <div className="w-full h-[450px] lg:h-[550px] mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.4252132153156!2d78.26272599356918!3d30.085775079023144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f2d1f679cf3%3A0x9ad4907d5c7e26b!2z4KSV4KSC4KSq4KWN4KSv4KWC4KSf4KSwIOCkl-ClgeCksOClgSDgpJ_gpY3gpLDgpYfgpKjgpL_gpILgpJcg4KSH4KSC4KS44KWN4KSf4KS_4KSf4KWN4KSv4KWC4KSf!5e0!3m2!1shi!2sin!4v1760195704749!5m2!1shi!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Computer Guru Training Institute Location"
        ></iframe>
      </div>

      {/* ======= Contact Info Section ======= */}
      <section className="bg-[#F2F5FA] py-16 px-6 lg:px-20 shadow-4xl lg:w-[90%] mx-auto rounded-2xl -mt-15 relative z-10">
        <h1 className="text-5xl font-extrabold tracking-[1px] mb-6 text-gray-800 Heading-text">
          Get in <span className="text-blue-600 underline">Touch</span>
        </h1>
        <p className="text-gray-600 mb-12 lg:w-[80%] Body-text">
          Have any doubts? Want to speak to us? Just reach out and we will get
          back to you as soon as possible.
        </p>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ======= Left Side ======= */}
          <div className="space-y-10">
            <div className="flex gap-x-6">
              <div className="bg-blue-700 text-white p-4 rounded-full shadow-md">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-4xl mt-1"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 Heading-text">
                  Main Branch: IDPL (Rishikesh)
                </h2>
                <p className="text-gray-600 Body-text">
                  Gali No. 15, Geeta Nagar, IDPL, Virbhadra, Rishikesh,
                  Dehradun, Uttarakhand - 249202
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="bg-blue-700 text-white p-4 rounded-full shadow-md">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-4xl mt-1"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 Heading-text">
                  Branch-2: Shyampur (Rishikesh)
                </h2>
                <p className="text-gray-600 Body-text">
                  Guljar Farm, Gali No.22, Hatt Road Shyampur, Rishikesh, Dist.-
                  Dehradun, Uttarakhand-249204
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="bg-blue-700 text-white p-4 rounded-full shadow-md">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 Heading-text">
                  Mail Us
                </h2>
                <p className="text-gray-600 Body-text">
                  support@computerguru.co.in
                </p>
                <p className="text-gray-600 Body-text">
                  cgtirishikesh@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="bg-blue-700 text-white p-4 rounded-full shadow-md">
                <FontAwesomeIcon icon={faPhone} className="text-4xl mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 Heading-text">
                  Call Us
                </h2>
                <p className="text-gray-600 Body-text">+91 8077545036</p>
                <p className="text-gray-600 Body-text">+91 7060032534</p>
              </div>
            </div>
          </div>

          {/* ======= Right Side: Contact Form ======= */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300" data-aos="zoom-in">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 Heading-text">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full Nav-text tracking-[1px] bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-lg font-medium text-green-600">
                {status}
              </p>
            )}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Footer />
      <Homesidebar />
    </>
  );
}

export default ContactUs;
