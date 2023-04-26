import "./Site.css";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, useLocation } from "react-router-dom";
import PhD from "./components/Projects/PhD";
import { AnimatePresence } from "framer-motion";
import Empty from "./components/Empty";
import Blob from "./components/Blob";

function Site() {
  const location = useLocation();

  return (
    <>
      <Blob />
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
