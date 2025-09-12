import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
  );
};

export default Slider;
