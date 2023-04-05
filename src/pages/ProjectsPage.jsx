import Project from "../components/Project"
import './ProjectPage.css'
import { Link } from 'react-router-dom'
import psychology from '../assets/psychology.jpg'

function ProjectPage(){
    return(
        <div id="ProjectsScreen">
            <div id="navbar">
                <div className="inicioTxt">JuanK</div>
                <Link to='/about' id="about">About</Link>
            </div>
            <div id="ProjectContainer">
                <div id="ProjectGallery">
                    <Project image={psychology} title='PhD'/>
                    <Project image="https://www.aces.edu/wp-content/uploads/2022/08/shutterstock_162620897-600x400.jpg" title='fox'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage