import React from "react";
import CGTIAbout from "../assets/CGTIAbout-Banner.jpg";
import CGTIlogo from "../assets/CGTIlogo2.png";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <SecondHeader bgImage={CGTIAbout} title="About Us" subtitle="Home • About Us"/>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:px-25 lg:py-20 px-5 py-10 items-center">
        <div className=" items-center md:items-start text-center md:text-left">
          <img src={CGTIlogo} alt="CGTI Logo" className="w-64 md:w-50 mb-5 mx-auto md:mx-0 lg:ml-50"/>
          <h3 className="text-xl font-bold">
            COMPUTER GURU TRAINING INSTITUTE
          </h3>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p className="font-semibold">
            Computers have become an inevitable part of human life. Nowadays, we
            live in a world where Alexa plays music and Siri sets alarms on the
            phone. We cannot overlook the importance of computers in education
            with the launch of so many education portals and apps that have made
            it necessary to use computers in education.
          </p>
          <p>
            We know that the future is going to be digital with computers and
            smart devices. It will not change under any circumstances. Actually,
            with time, a lot of things are becoming digital in our daily routine
            of living. So, the way technology must be progressing, everyone is
            updated with the new technology. <b>Computer Guru Institute</b> is
            one of the best training institutes in Rishikesh, which provides new
            technology and excellent computer training to the students with
            100% satisfaction. Computer Guru Training Institute has highly
            qualified teachers with updated systems and many facilities for our
            students.
          </p>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default AboutUs;
