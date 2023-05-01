import Project from "../components/Project";
import "./ProjectPage.css";
import psychology from "../assets/inkStyle1.jpg";
import { motion } from "framer-motion";
import { Menu } from "../components/Menu";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function ProjectPage() {
  return (
    <>
      <motion.div
        id="ProjectsScreen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ transition }}
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
