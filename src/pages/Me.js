import React, {useEffect, useState} from 'react';
import './Me.css'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const Me = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((elements) => {
            elements.forEach((element) => {
                if (element.isIntersecting){
                    element.target.classList.add('visible')
                } else{
                    element.target.classList.remove('visible')
                }
            })       
        })
        const hiddenElement = document.querySelector('#name')
        observer.observe(hiddenElement)
    })

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    })


    /* const [show, setShow] = useState(false) */
    return(
        <>
            <div id="MePage" className='container-fluid row my-5'>
                <div id="side" className='col-md d-flex justify-content-center display-1'>
                    <div id="name" className='text-center mx-5 px-5 title-hidden'>Juan Camilo Manjarrés Baena</div>
                </div>
                <div id="about" className='col-md fs-4 container my-5'>
                    <section className='row hidden'>
                        <p>Fifth semester System Engineer student.</p>
                        <p>I see myself as a curious and patient person who enjoy knowing new people and share with them through the science or passion and creativity. I love being in the project’s construction and execution process in order to take it to the top being competitive and proactive.</p>
                        <p>I would like to have a position in a team where I can learn from them, enjoy the project’s and make the feeling lesser ephemeral.</p>
                    </section>
                    {/* <h1>Working experience</h1>
                    <ul>
                        <li className='my-5'>
                            <h2>University gym project</h2>
                            <div className='fs-6'>Universidad de Medellín, Medellín – (8/2022 - 11/2022)</div>
                            <div className='fs-6'>Develop a mobile app for students to reserve and desk app for owners to administrate the gym access.</div>
                        </li>
                    </ul> */}
                    <section className='row hidden'>
                        <h1>Education</h1>
                        <ul>
                            <li className='my-5'>
                                <h2>Bachelor's Degree in System Engineer</h2>
                                <div className='fs-6'>2022 (currently studying)</div>
                                <div className='fs-6'>Universidad de Medellín - Medellín</div>
                            </li>
                            <li className='my-5'>
                                <h2 className=''>Google Cloud certification</h2>
                                <div className='fs-6'>October 2022</div>
                                <div className='fs-6'>Google Cloud Foundations</div>
                                {/* <div>
                                    {
                                        show? <ShowButton icon={<AiFillCaretRight />} f={() => {setShow(!show)}} />: <ShowButton icon={<AiFillCaretDown />} f={() => {setShow(!show)}} />
                                    }
                                    {
                                        show? <img id="certificate" className='img-fluid' src={require("../assets/certificate.png")} alt="Google cloud certificate"/>:null
                                    }
                                </div> */}
                            </li>
                        </ul>
                    </section>
                    <section className='row hidden'>
                        <h1>Get in touch</h1>
                        <ul>
                            <li className='fs-1 my-3'><a href='mailto:juancamilo.manjarres@gmail.com'>Email</a></li>
                            <li className='fs-1 my-3'><a href='https://www.linkedin.com/in/kmilomanjar/'>LinkedIn</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
};

/* const ShowButton = ({icon, f}) => {
    return(
        <div>
            <button onClick={f}>{icon}</button>
        </div>
    )
    } */


export default Me;