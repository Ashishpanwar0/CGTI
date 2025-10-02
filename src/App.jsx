import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import ContactUs from "./Pages/ContactUs";
import PhotoGallery from "./Pages/PhotoGallery";
import Courses from "./Pages/Courses";
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
