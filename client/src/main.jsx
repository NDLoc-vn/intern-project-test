import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Students from "./pages/Students";
import Hello from "./pages/Hello.jsx";
import EditStudent from "./pages/EditStudent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/students" element={<Students />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  </StrictMode>
);
