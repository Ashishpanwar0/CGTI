import React from "react";
import CGTISlider1 from '../assets/CGTIHomeMid.png';
import SecondHeader from '../Componants/SecondHeader';
import PhotoGallery from "./PhotoGallery";
import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";

const AboutUs = ({}) => {
    return(
        <>
        <Navbar/>
        <SecondHeader bgImage={CGTISlider1} title="About Us"/>
        <Footer/>
        </>
    );
};

export default  AboutUs