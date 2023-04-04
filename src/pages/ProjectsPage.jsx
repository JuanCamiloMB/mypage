import Project from "../components/Project"
import './ProjectPage.css'
import { Link } from 'react-router-dom'
function ProjectPage(){

    return(
        <div id="ProjectContainer">
            <nav>
                <div className="inicioTxt">JuanK</div>
                <Link to='/about' id="about">About</Link>
            </nav>
            <Project/>
        </div>
    )
}

export default ProjectPage