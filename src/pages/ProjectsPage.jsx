import Project from "../components/Project"
import './ProjectPage.css'
import { Link } from 'react-router-dom'
import psychology from '../assets/psychology.jpg'
import Logo from '../assets/mylogogrey.svg'
import { motion } from "framer-motion"

function ProjectPage(){
    return(
        <motion.div 
            id="ProjectsScreen"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <div id="navbar">
                <img id="inicioLogo" src={Logo}/>
                <div id="inicioTxt">JuanK</div>
                <Link to='/about' id="about">About</Link>
            </div>
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