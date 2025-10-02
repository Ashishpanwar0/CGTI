import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Ashish Panwar",
    course: "Full Stack Development",
    photo: "/assets/student1.png",
    text: "The training was very professional and practical. I got hands-on experience with real projects and my confidence boosted a lot. Highly recommend this institute!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    course: "UI/UX Design",
    photo: "/assets/student2.png",
    text: "The faculty here are really helpful and knowledgeable. I learned not just design but also how to work in real-life projects. Best place to learn modern tech skills.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "Backend Engineering",
    photo: "/assets/student3.png",
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
    {
    id: 4,
    name: "Rahul Verma",
    course: "Backend Engineering",
    photo: "/assets/student3.png",
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
    {
    id: 5,
    name: "Rahul Verma",
    course: "Backend Engineering",
    photo: "/assets/student3.png",
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },
    {
    id: 6,
    name: "Rahul Verma",
    course: "Backend Engineering",
    photo: "/assets/student3.png",
    text: "I really loved the flexible timings and practical sessions. Now I feel ready for industry-level backend development. This was a turning point in my career.",
  },

];

const Testimonials = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        {/* <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What Our Students Say
        </h2> */}

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                onClick={() => setSelected(t)}
                className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-100"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.course}</p>
                <p className="mt-4 text-gray-600 line-clamp-3">
                  "{t.text}"
                </p>
                <span className="text-blue-500 mt-3 inline-block text-sm">
                  Read More
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
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
