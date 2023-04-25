import "./Site.css";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, useLocation } from "react-router-dom";
import PhD from "./components/Projects/PhD";
import { AnimatePresence } from "framer-motion";
import Empty from "./components/Empty";
import { useEffect } from "react";

function Site() {
  const location = useLocation();

  useEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (event) => {
      /* console.log(event) */

      const { clientX, clientY } = event;

      blob.animate(
        {
          left: clientX + "px",
          top: clientY + "px",
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  });

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/PhD" element={<PhD />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Site;
