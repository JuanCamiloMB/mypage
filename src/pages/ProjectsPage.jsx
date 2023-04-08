import Project from "../components/Project"
import './ProjectPage.css'
import psychology from '../assets/psychology.jpg'
import { motion } from "framer-motion"
import {Menu} from "../components/Menu"

function ProjectPage(){
    return(
        <motion.div 
            id="ProjectsScreen"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <Menu/>
            <div id="ProjectContainer">
                <div id="ProjectGallery">
                    <Project image={psychology} title='PhD'/>
                    <Project image="https://www.aces.edu/wp-content/uploads/2022/08/shutterstock_162620897-600x400.jpg" title='fox'/>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectPage