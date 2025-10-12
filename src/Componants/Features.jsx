import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faLaptopCode,
  faClock,
  faRocket,
  faWifi,
  faBook,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

// Features Data
const FeaturesData = [
  {
    id: 1,
    title: "Expert & Experienced Trainers",
    icon: (
      <FontAwesomeIcon
        icon={faGears}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 2,
    title: "Latest Tricks & Technique",
    icon: (
      <FontAwesomeIcon
        icon={faLaptopCode}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 3,
    title: "Flexible Batch Timings",
    icon: (
      <FontAwesomeIcon
        icon={faClock}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 4,
    title: "Work on Live Project",
    icon: (
      <FontAwesomeIcon
        icon={faRocket}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 5,
    title: "Internet Facility",
    icon: (
      <FontAwesomeIcon
        icon={faWifi}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 6,
    title: "eBook Mobile Access",
    icon: (
      <FontAwesomeIcon
        icon={faBook}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
  {
    id: 7,
    title: "Online Certificate Verification",
    icon: (
      <FontAwesomeIcon
        icon={faCertificate}
        style={{ fontSize: "50px", color: "#005EAA" }}
      />
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-[#F7FAFF] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-10 Heading-text">
          Features & <span className="text-[#155DFC] underline">Facilities</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FeaturesData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 Heading-text">{item.icon}</div>
              <h2 className="text-lg font-semibold Body-text">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
