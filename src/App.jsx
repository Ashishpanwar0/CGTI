import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />
  },
  {
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
