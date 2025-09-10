import React from "react";
import Navbar from "./Componants/Navbar.jsx"; // 👈 check spelling: "Components" vs "Componants"
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
