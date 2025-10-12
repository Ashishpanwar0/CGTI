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
        <h2 className="text-4xl tracking-[1px] text-center text-gray-800 mb-20 font-bold Heading-text">
          Where Passion Meets <span className="text-[#005AAC] underline">Technology</span>
          <br />
          <span className="Heading-text">
            Explore Our <span className="text-[#005AAC] underline">Learning</span> Moments
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {currentPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg w-full max-w-xs"
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
