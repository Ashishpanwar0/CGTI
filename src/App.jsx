import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import ContactUs from "./Pages/ContactUs";
import PhotoGallery from "./Pages/PhotoGallery";
import Courses from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Courses",
      element: <Courses/>,
    },
    {
      path: "PhotoGallery",
      element: <PhotoGallery/>
    },
    {
      path: "ContactUs",
      element: <ContactUs/>,
    },
    {
      path: "AboutUs",
      element: <AboutUs/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
