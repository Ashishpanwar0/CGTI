import React from "react";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import SecondHeader from "../Componants/SecondHeader";
import CGTICourses from  "../assets/CGTI Courses.jpg"
// const CoursesList = [
// {
// Image: m,
// title : "Advance Diploma in Computer Application (ADCA)"
// },
// {
// Image: m,
// title : "Advance Diploma in Computer Application & Programming (ADCAP)"
// },
// {
// Image: m,
// title : "Advance Diploma in Desktop Publishing / Graphic Designing (ADDP)"
// },
// {
// Image: m,
// title : "Advance Diploma in Website Designing (ADWD)"
// },
// {
// Image: m,
// title : "Diploma In Financial Accounting (DFA)"
// },
// {
// Image: m,
// title : "Certificate in Computer Application (CCA)"
// },
// {
// Image: m,
// title : "Computer Teacher Training Course (CTTC)"
// },
// {
// Image: m,
// title : "Certificate in Data Entry Operator"
// },
// {
// Image: m,
// title : "Typing: Hindi/English"
// }
function Courses() {
  return(
     <>
      <Navbar/>
      <SecondHeader bgImage={CGTICourses} title="Courses " subtitle="Home . Courses" />
      <section>

      </section>
      <Footer/>
    </>
  );
}

export default Courses;
