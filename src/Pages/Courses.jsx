import React from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import CGTICourses from  "../assets/CGTI Courses.jpg"
function Courses() {
  return(
     <>
      <Navbar/>
      <SecondHeader bgImage={CGTICourses} title="Courses " subtitle="Home . Courses" />
      <Footer/>
    </>
  );
}

export default Courses;
