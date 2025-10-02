import React, { useState } from "react";

const photos = [
  { id: 1, src: "/assets/gallery1.jpg", alt: "Gallery 1" },
  { id: 2, src: "/assets/gallery2.jpg", alt: "Gallery 2" },
  { id: 3, src: "/assets/gallery3.jpg", alt: "Gallery 3" },
  { id: 4, src: "/assets/gallery4.jpg", alt: "Gallery 4" },
  { id: 5, src: "/assets/gallery5.jpg", alt: "Gallery 5" },
  { id: 6, src: "/assets/gallery6.jpg", alt: "Gallery 6" },
  { id: 7, src: "/assets/gallery7.jpg", alt: "Gallery 7" },
  { id: 8, src: "/assets/gallery8.jpg", alt: "Gallery 8" },
  { id: 9, src: "/assets/gallery9.jpg", alt: "Gallery 9" },
  { id: 10, src: "/assets/gallery10.jpg", alt: "Gallery 10" },
  { id: 11, src: "/assets/gallery11.jpg", alt: "Gallery 11" },
  { id: 12, src: "/assets/gallery12.jpg", alt: "Gallery 12" },
  { id: 13, src: "/assets/gallery13.jpg", alt: "Gallery 13" },
  { id: 14, src: "/assets/gallery14.jpg", alt: "Gallery 14" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const photosPerPage = 8;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const startIndex = (currentPage - 1) * photosPerPage;
  const currentPhotos = photos.slice(startIndex, startIndex + photosPerPage);

  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {currentPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg w-full max-w-xs"
              onClick={() => setSelected(photo)}
            >
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

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition ${
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
            className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
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
