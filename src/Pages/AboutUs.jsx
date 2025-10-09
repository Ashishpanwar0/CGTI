import React from "react";
import CGTISlider1 from '../assets/CGTIHomeMid.png';
import SecondHeader from '../Componants/SecondHeader';
import Footer from "../Componants/Footer";
import Navbar from "../Componants/Navbar";
import CGTIAbout from "../assets/CGTIAbout-Banner.jpg"
import CGTIlogo from "../assets/CGTIlogo2.png"
const AboutUs = ({}) => {
    return(
        <>
        <Navbar/>
        <SecondHeader bgImage={CGTIAbout} title="About Us " subtitle="Home . About Us" />

        <section className="grid grid-cols-2 p-20">
            <div >
        <img src={CGTIlogo} alt=""className="ml-30" />
        <h3 className="ml-20 mt-5 text-xl"><b>Computer Guru Training Institute</b></h3>
            </div>
            <div>
                <p><b>Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education.</b> </p>
                <p>We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology. Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.</p>

            </div>
        </section>
        <Footer/>
        </>
    );
};

export default  AboutUs