import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SliderCard1 from "../assets/Home-Slider-Card1.svg";
import SliderCard2 from "../assets/Home-Slider-Card2.svg";
import SliderCard3 from "../assets/Home-Slider-Card3.svg";
import SliderCard4 from "../assets/Home-Slider-Card4.svg";

import CGTIBanner1 from "../assets/CGTI-bannerSlider-1.jpg";
import CGTIBanner2 from "../assets/CGTI-bannerSlider-2.jpg";
import CGTIBanner3 from "../assets/CGTI-bannerSlider-3.jpg";
const features = [
  {
    id: "01",
    title: "100+ Courses",
    desc: "Explore a variety of new subjects",
    img: SliderCard3,
  },
  {
    id: "02",
    title: "Lifetime Support",
    desc: "Lifetime support for upgradation",
    img: SliderCard2,
  },
  {
    id: "03",
    title: "Experts Instruction",
    desc: "Certified & experienced instructor",
    img: SliderCard1,
  },
  {
    id: "04",
    title: "Recommended",
    desc: "Best reviews from our alumni",
    img: SliderCard4,
  },
  {
    id: "05",
    title: "Recommended",
    desc: "Best reviews from our alumni",
    img: SliderCard4,
  },
  {
    id: "06",
    title: "Recommended",
    desc: "Best reviews from our alumni",
    img: SliderCard4,
  },
];
const Slider = () => {
  const images = [
    // "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-2.jpg",
    // "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-3.jpg",
    // "https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-banner-1.jpg",
    { id: 1, img: CGTIBanner1, alt: "CGTISlider1" },
    { id: 2, img: CGTIBanner2, alt: "CGTISlider2" },
    { id: 3, img: CGTIBanner3, alt: "CGTISlider3" },
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
    }, 4000); // every 4 sec

    return () => clearInterval(timer);
  }, [index, direction, images.length]);

  return (
    <section className="bg-[#F7FAFF]">
     <section className="bg-[#F7FAFF]">
      <div className="relative lg:mt-[-16px] w-full mx-auto overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.img}
              alt={image.alt}
              className="w-full flex-shrink-0 object-cover h-60 sm:h-72 md:h-96 lg:h-[500px]"
            />
          ))}
        </div>

        {/* Left button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </button>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </button>
      </div>
    </section>

      {/* Home Carousel Card Start */}
      <section className="relative z-20 flex lg:w-[92%] w-full rounded-sm lg:ml-15 lg:px-2 lg:py-4 bg-white lg:mt-[-20px] shadow-sm py-3">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="text-center lg:w-full">
                <img
                  src={feature.img}
                  alt={`${feature.title} illustration`}
                  className="w-50 h-50 lg:w-40 lg:h-40  object-contain mx-auto"
                />
                <h2 className="lg:mb-2 font-bold Heading-text tracking-[1px]">{`${feature.id}. ${feature.title}`}</h2>
                <p className="text-2sm text-[black] Body-text">
                  {feature.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Slider;
