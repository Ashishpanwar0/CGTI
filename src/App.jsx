import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from './Componants/MainLayout';
import ContactUs from "./Pages/ContactUs";
import PhotoGallery from "./Pages/PhotoGallery";
import Courses from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
import CoursesDetails from "./Componants/CoursesDetails";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      once: true,
    });
  }, []);
  const router = createBrowserRouter([
    {
      element: <MainLayout />, 
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Courses",
          element: <Courses />,
        },
        {
          path: "PhotoGallery",
          element: <PhotoGallery />,
        },
        {
          path: "ContactUs",
          element: <ContactUs />,
        },
        {
          path: "AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/course/:id",
          element: <CoursesDetails/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
