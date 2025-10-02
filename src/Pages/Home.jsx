import React from "react";
import Navbar from "../Componants/Navbar";
import Carousel from "../Componants/Carousel";
import HomeMid from "../Componants/HomeMid";
import HomeMid2 from "../Componants/HomeMid2";
import Features from "../Componants/Features";
import Team from "../Componants/Team";
const Home = ({}) => {
  return (
    <>
      <Navbar />
      <Carousel/>
      <HomeMid/>
      <HomeMid2/>
      <Features/>
      <Team/>
    </>
  );
};

export default Home;
