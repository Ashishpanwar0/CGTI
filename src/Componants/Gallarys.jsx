import React, { useState } from "react";
import img1 from "../Gallery/CGTIGallery1.jpg";
import img2 from "../Gallery/CGTIGallery2.jpg";
import img3 from "../Gallery/CGTIGallery3.jpeg";
import img4 from "../Gallery/CGTIGallery4.jpeg";
import img5 from "../Gallery/CGTIGallery5.jpeg";
import img6 from "../Gallery/CGTIGallery6.jpeg";
import img7 from "../Gallery/CGTIGallery7.jpeg";
import img8 from "../Gallery/CGTIGallery8.jpeg";
import img9 from "../Gallery/CGTIGallery9.jpeg";
import img10 from "../Gallery/CGTIGallery10.jpeg";
import img11 from "../Gallery/CGTIGallery11.jpeg";
import img12 from "../Gallery/CGTIGallery12.jpeg";
import img13 from "../Gallery/CGTIGallery13.jpeg";
import img14 from "../Gallery/CGTIGallery14.jpeg";
import img15 from "../Gallery/CGTIGallery15.jpeg";
import img16 from "../Gallery/CGTIGallery16.jpeg";
import img17 from "../Gallery/CGTIGallery17.jpeg";
// import img18 from "../Gallery/CGTIGallery18.jpeg";
// import img19 from "../Gallery/CGTIGallery19.jpeg";
// import img20 from "../Gallery/CGTIGallery20.jpeg";
// import img21 from "../Gallery/CGTIGallery21.jpeg";
// import img22 from "../Gallery/CGTIGallery22.jpeg";
// import img23 from "../Gallery/CGTIGallery23.jpeg";
// import img24 from "../Gallery/CGTIGallery24.jpeg";
// import img25 from "../Gallery/CGTIGallery25.jpeg";
// import img26 from "../Gallery/CGTIGallery26.jpeg";
// import img27 from "../Gallery/CGTIGallery27.jpeg";
// import img28 from "../Gallery/CGTIGallery28.jpeg";
// import img29 from "../Gallery/CGTIGallery29.jpeg";
// import img30 from "../Gallery/CGTIGallery30.jpeg";


const photos = [
  { id: 1, src: img1, alt: "Gallery 1" },
  { id: 2, src: img2, alt: "Gallery 2" },
  { id: 3, src: img3, alt: "Gallery 2" },
  { id: 4, src: img4, alt: "Gallery 2" },
  { id: 5, src: img5, alt: "Gallery 2" },
  { id: 6, src: img6, alt: "Gallery 2" },
  { id: 7, src: img7, alt: "Gallery 2" },
  { id: 8, src: img8, alt: "Gallery 2" },
  { id: 9, src: img9, alt: "Gallery 2" },
  { id: 10, src: img10, alt: "Gallery 2" },
  { id: 11, src: img11, alt: "Gallery 2" },
  { id: 12, src: img12, alt: "Gallery 2" },
  { id: 13, src: img13, alt: "Gallery 2" },
  { id: 14, src: img14, alt: "Gallery 2" },
  { id: 15, src: img15, alt: "Gallery 2" },
  { id: 16, src: img16, alt: "Gallery 3" },
  { id: 17, src: img17, alt: "Gallery 3" },
  // { id: 18, src: img18, alt: "Gallery 3" },
  // { id: 19, src: img19, alt: "Gallery 3" },
  // { id: 20, src: img20, alt: "Gallery 3" },
  // { id: 21, src: img21, alt: "Gallery 4" },
  // { id: 22, src: img22, alt: "Gallery 4" },
  // { id: 23, src: img23, alt: "Gallery 4" },
  // { id: 24, src: img24, alt: "Gallery 4" },
  // { id: 25, src: img25, alt: "Gallery 4" },
  // { id: 26, src: img26, alt: "Gallery 5" },
  // { id: 27, src: img27, alt: "Gallery 5" },
  // { id: 28, src: img28, alt: "Gallery 5" },
  // { id: 29, src: img29, alt: "Gallery 5" },
  // { id: 30, src: img30, alt: "Gallery 5" },


];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const photosPerPage = 12;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const startIndex = (currentPage - 1) * photosPerPage;
  const currentPhotos = photos.slice(startIndex, startIndex + photosPerPage);

  return (
    <section className="bg-[#F9FAFB] py-18">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl text-center text-gray-800 mb-20 font-bold Heading-text">
          Where Passion Meets <span className="underline decoration-blue-500">Technology</span>
          <br className="hidden lg:block"/>
          <span className="Heading-text">
            Explore Our <span className="underline decoration-blue-500">Learning</span> Moments
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {currentPhotos.map((photo) => (
            <div data-aos="zoom-in"
              key={photo.id}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg w-full max-w-"
              onClick={() => setSelected(photo)}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-60 object-cover rounded-xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <span className="text-white font-semibold text-lg">View</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition font-medium ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <span className="px-4 py-2 font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition font-medium ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Image Popup */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ✕
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
