import React, {useState} from 'react';
import "./Me.css"

const Me = () => {

    const [show, setShow] = useState(false)
    return(
        <>
            <div id="MePage">
                <div id="side">
                    <div id="name">Juan Camilo Manjarrés Baena</div>
                </div>
                <div id="about">
                    <p>Fifth semester System Engineer student.</p>
                    <p>I see myself as a curious and patient person who enjoy knowing new people and share with them through the science or passion and creativity. I love being in the project’s construction and execution process in order to take it to the top being competitive and proactive.</p>
                    <p>I would like to have a position in a team where I can learn from them, enjoy the project’s and make the feeling lesser ephemeral.</p>

                    <h1>Working experience</h1>
                    <ul>
                        <li>
                            <h2>University gym project</h2>
                            <div className='opaque'>Universidad de Medellín, Medellín – (8/2022 - 11/2022)</div>
                            <div className='details'>Develop a mobile app for students to reserve and desk app for owners to administrate the gym access.</div>
                        </li>
                    </ul>

                    <h1>Education</h1>
                    <ul>
                        <li>
                            <h2>Bachelor's Degree in System Engineer</h2>
                            <div className='opaque'>2022 (currently studying)</div>
                            <div className='details'>Universidad de Medellín - Medellín</div>
                        </li>
                        <li>
                            <h2>Google Cloud certification</h2>
                            <div className='opaque'>2022</div>
                            <div>
                                <input id='btn' type="button" onClick={() => {setShow(!show)}} value="img" />
                                {
                                    show? <img id="certificate" className='hided' src={require("../assets/certificate.png")} alt="Google cloud certificate"/>:null
                                }
                            </div>
                        </li>
                    </ul>

                    <h1>Get in touch</h1>
                    <ul>
                        <li><a href='mailto:juancamilo.manjarres@gmail.com'>Email</a></li>
                        <li><a href='https://www.linkedin.com/in/kmilomanjar/'>LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Me;