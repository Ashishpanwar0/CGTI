import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper/modules";
import CGTIanshu from "../Testimonial-photos/CGTIAnahu.jpeg";
import CGTIpriyanshu from "../Testimonial-photos/CGTIPRIYANSHU.jpg";
import ishu from "../Testimonial-photos/CGTIISHU.jpeg";
import jiya from "../Testimonial-photos/CGTIJIYA.jpeg";
import rohit from "../Testimonial-photos/CGTIROHIT.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ashish Panwar",
    course: "Full Stack Development",
    photo: CGTIanshu,
    text: "The training was very professional and practical. I got hands-on experience with real projects and my confidence boosted a lot. Highly recommend this institute!",
  },
  {
    id: 2,
    name: "Ankit Negi",
    course: "UI/UX Design",
    photo: rohit,
    text: "The faculty here are really helpful and knowledgeable. I learned not just design but also how to work in real-life projects. Best place to learn modern tech skills.",
  },
  {
    id: 3,
    name: "Priyanshu",
    course: "Backend Engineering",
    photo: CGTIpriyanshu,
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
  {
    id: 4,
    name: "Ishu",
    course: "Programing",
    photo: ishu,
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
  {
    id: 5,
    name: "Jiya Semwal",
    course: "Backend Engineering",
    photo: jiya,
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
  {
    id: 6,
    name: "Ashish Panwar",
    course: "Full Stack Development",
    photo: CGTIanshu,
    text: "The training was very professional and practical. I got hands-on experience with real projects and my confidence boosted a lot. Highly recommend this institute!",
  },
  {
    id: 7,
    name: "Ashish Panwar",
    course: "Full Stack Development",
    photo: CGTIanshu,
    text: "The training was very professional and practical. I got hands-on experience with real projects and my confidence boosted a lot. Highly recommend this institute!",
  },
];

const Testimonials = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl font-extrabold text-center text-gray-800 mb-12">
          What Our <span className="underline decoration-blue-500">Students</span> Say
        </h2>
        <Swiper
  slidesPerView={1}
  spaceBetween={25}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  modules={[Pagination, Autoplay]} 
>
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                onClick={() => setSelected(t)}
                className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer transition hover:-translate-y-2 hover:shadow-2xl"
               data-aos="zoom-in">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-100"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 Heading-text">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 Body-text">{t.course}</p>
                <p className="mt-4 text-gray-600 line-clamp-3 Body-text">"{t.text}"</p>
                <span className="text-blue-500 mt-3 inline-block text-sm tracking-[1px]">
                  Read More
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Social Media Embed Section */}
        <div className="lg:flex space-y-10 mt-19 gap-x-2">
          <div className="w-full p-5 lg:pl-15 lg:h-150" >
            <div className="w-full">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcomputergurutraininginstitute&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="w-full p-5">
            <iframe
              src="https://www.instagram.com/cgtirishikesh/embed"
              lg:width="88%"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Instagram Post"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal for Read More */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <img
              src={selected.photo}
              alt={selected.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-100"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              {selected.name}
            </h3>
            <p className="text-sm text-gray-500">{selected.course}</p>
            <p className="mt-6 text-gray-700 leading-relaxed text-center">
              "{selected.text}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
