import Project from "../components/Project";
import "./ProjectPage.css";
import psychology from "../assets/inkStyle1.jpg";
import { motion } from "framer-motion";
import { Menu } from "../components/Menu";

function ProjectPage() {
  return (
    <>
      <motion.div
        id="ProjectsScreen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        <Menu />
        <div id="ProjectContainer">
          <div id="ProjectGallery">
            <Project image={psychology} title="PhD" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectPage;
