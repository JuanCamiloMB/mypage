import "./Site.css";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, useLocation } from "react-router-dom";
import PhD from "./components/Projects/PhD";
import { AnimatePresence } from "framer-motion";
import Empty from "./components/Empty";
import { useState, useEffect } from "react";

function Site() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({x: event.pageX, y: event.pageY})
  }

  useEffect(() => {
    /* if (location.pathname === "/PhD") {
      document.getElementById("blob").style.display = "none";
    } else {
      document.getElementById("blob").style.display = "initial";
    } */
    const blob = document.getElementById("blob");
    
    blob.animate(
      {
        left: cursorPosition.x + "px",
        top: cursorPosition.y + "px",
      },
      { duration: 3000, fill: "forwards" }
    );
  });

  return (
    <>
      <div id="blob_screen" onMouseMove={handleMouseMove}>
      <div id="blob"></div>
      <div id="blur" ></div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/PhD" element={<PhD />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Site;
