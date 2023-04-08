import "./Site.css";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import PhD from "./components/Projects/PhD";
import { AnimatePresence } from "framer-motion";

function Site() {
  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/PhD" element={<PhD />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default Site;
