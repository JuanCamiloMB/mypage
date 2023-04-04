import logo from '../assets/mylogogrey.svg'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import { useEffect } from 'react'

function AboutPage(){

    return(
        <div id='aboutContainer' className=''>
            <nav id='aboutNav'>
                <Link to='/' id='backBtn'>Back</Link>
            </nav>
            <div id='identity'>
                <img src={logo}/>
                <div id='name'>JuanK Manjarres Baena</div>
                <div id='description'>Creative web dev</div>
            </div>
            <p>I'm a System Engineer student and freelancer.</p>
            <p>My interest are Design, Development and Cyber security</p>
            <div id='lists'>
                <div className='mytext list-title'>Work Experience</div>
                <ul>
                    <li>
                        <div className='mytext'>Freelancer</div>
                        <div className='mytext sub'>2023 - Present</div>
                    </li>
                </ul>
                <div className='mytext list-title'>Certifications</div>
                <ul>
                    <li>
                        <div className='mytext'>Google Cloud Foundation certified</div>
                        <div className='mytext sub'>October 2022</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage