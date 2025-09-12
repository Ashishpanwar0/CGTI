import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import SliderCard1 from '../assets/Home-Slider-Card1.svg';
import SliderCard2 from '../assets/Home-Slider-Card2.svg';
import SliderCard3 from '../assets/Home-Slider-Card3.svg';
import SliderCard4 from '../assets/Home-Slider-Card4.svg';

   
const features = [
  { id: "01", title: "100+ Courses", desc: "Explore a variety of new subjects", img: SliderCard3 },
  { id: "02", title: "Lifetime Support", desc: "Lifetime support for upgradation", img: SliderCard2 },
  { id: "03", title: "Experts Instruction", desc: "Certified & experienced instructor", img: SliderCard1 },
  { id: "04", title: "Recommended", desc: "Best reviews from our alumni", img: SliderCard4 },
];
const Slider = () => {
  const images = [
    "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-2.jpg",
    "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-3.jpg",
    "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-1.jpg",
  ];
const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    if (index === images.length - 1) {
      setDirection(-1);
      setIndex(index - 1);
    } else {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setDirection(1);
      setIndex(index + 1);
    } else {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (direction === 1) {
        if (index === images.length - 1) {
          setDirection(-1);
          setIndex(index - 1);
        } else {
          setIndex(index + 1);
        }
      } else {
        if (index === 0) {
          setDirection(1);
          setIndex(index + 1);
        } else {
          setIndex(index - 1);
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [index, direction, images.length]);


  return (
    <>
   <section>
     <div className="relative lg:mt-[-16px] lg:w-full w-full mx-auto overflow-hidden shadow-lg">
      <div
        className="flex transition-transform duration-900 w-full" style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} className="w-full flex-shrink-0 object-cover h-70 sm:h-64 md:h-80 lg:h-[430px] object-center"/>
        ))}
      </div>
      <button
        onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
            <FontAwesomeIcon icon={faCircleRight} beatFade size="xl" />
      </button>

      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
      <FontAwesomeIcon icon={faCircleLeft} beatFade size="xl" />
      </button>
    </div>
   </section>

   {/* Home Carousel Card Start */}
  <section className="flex flex-col gap-y-10 lg:flex-row lg:w-[92%] rounded-sm lg:ml-15 lg:px-2 lg:py-2 bg-white lg:mt-[-20px] shadow-2xl absolute">
  {features.map((feature, index) => (
    <div key={index} className="text-center lg:w-full ">
      <img src={feature.img} alt={`${feature.title} illustration`} className="lg:w-48 lg:h-48  object-contain mx-auto"/>
      <h2 className="mb-2 font-bold">{`${feature.id}. ${feature.title}`}</h2>
      <p className="text-2sm text-[black] tracking-2">{feature.desc}</p>
    </div>
  ))}
</section>
   </>
  );
};

export default Slider;
