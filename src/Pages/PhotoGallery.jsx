import React from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import Gallarys from "../Componants/Gallarys";
import CGTIGallery from "../assets/CGTIGallary1.jpg";
function PhotoGallery() {
  return (
     <>
      <Navbar/>
      <SecondHeader bgImage={CGTIGallery} title="Photo Gallery" subtitle="Home . Courses"/>
      <Gallarys/>
      <Footer/>
    </>
  );
}

export default PhotoGallery;



