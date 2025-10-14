import React from "react";

const SecondHeader = ({ bgImage, title, subtitle }) => {
  return (
    <section
      className="h-64 md:h-120 bg-cover bg-center flex flex-col justify-center pl-10 md:pl-20 text-white relative lg:mt-[-16px] opacity-78"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-[#00000075]"></div>
      <h1 className="text-5xl md:text-7xl font-extrabold z-10 tracking-[2px] lg:mt-[-40px] Heading-text">{title}</h1>
      <p className="text-lg md:text-2xl font-medium relative z-10 mt-2 tracking-[2px] lg:ml-1 Body-text">
        <a href="/" className="text-gray-200 CGTISpacial">{subtitle}</a>
      </p>
    </section>
  );
};

export default SecondHeader;
