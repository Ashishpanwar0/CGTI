import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";

createMemoryRouter(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>,
);