import React from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import CGTIContact from "../assets/CGTIContact.jpg";

function ContactUs() {
  return (
    <>
      <Navbar/>
      <SecondHeader bgImage={CGTIContact} title="Contact Us" subtitle="Home .Contact Us"/>
      <Footer/>
    </>
  );
}

export default ContactUs;
