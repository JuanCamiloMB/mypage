import {Menu} from '../components/Menu'
import './AboutPage.css'
import { motion } from 'framer-motion'

function AboutPage(){

    return(
        <motion.div 
            id='aboutScreen'
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            
            <Menu/>

            <div id='aboutContainer' className=''>
                <div id='me'>
                    <p id='p1'>I'm a Systems Engineer student and freelancer.</p>
                    <p id='p2'>My interest are Design, Development and Cyber security</p>

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
            </div>
        </motion.div>
    )
}

export default AboutPage