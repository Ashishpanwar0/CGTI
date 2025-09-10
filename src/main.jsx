import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Courses from "./Pages/Courses.jsx";
import PhotoGallery from "./Pages/PhotoGallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout
    children: [
      { index: true, element: <Home /> }, // 👈 better than path: "/"
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "courses", element: <Courses /> },
      { path: "gallery", element: <PhotoGallery /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
