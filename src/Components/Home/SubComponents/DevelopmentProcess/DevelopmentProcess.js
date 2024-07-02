import React from 'react'
import './DevelopmentProcess.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DevelopmentProcess = () => {

    useGSAP(() => {
        const materials = document.querySelectorAll(".stagger2");

        const animateProcess = (elements) => {
            gsap.from(elements, {
                opacity: 0,
                x: -25,
                stagger: 0.4,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: elements,
                    scroller: "body",
                    start: "top 90%",
                }
            })
        }

        if (window.innerWidth >= 1060) {
            // This Should Work For Desktop
            animateProcess(materials);
        } else {
            // This Should Work For Mobile Devices
            materials.forEach(material => animateProcess(material));
        }
    })

    return (
        <section id='development-process'>
            <h1 id='heading'>Our Development Process</h1>
            <div className="card-container">
                <div className="card stagger2">
                    <figure>
                        <img src={require('./images/define-requirements.png')} alt="" />
                    </figure>
                    <article>
                        <h1>Define Requirements</h1>
                        <p>In this phase, we gather all necessary information to understand the project scope and requirements. This involves meetings with stakeholders to ensure all details are captured accurately.</p>
                    </article>
                </div>
                <div id="next" className='stagger2'>
                    <img id='next1' src={require('./arrow.png')} alt="" />
                    <i id='next2' class="ri-arrow-down-double-line"></i>
                </div>
                <div className="card stagger2">
                    <figure>
                        <img src={require('./images/design-prototyping.png')} alt="" />
                    </figure>
                    <article>
                        <h1>Design & Prototyping</h1>
                        <p>During this stage, we create design prototypes that illustrate the layout and functionality of the project. These prototypes are refined based on feedback to ensure they meet the project requirements and user expectations.</p>
                    </article>
                </div>
                <div id="next" className='stagger2'>
                    <img id='next1' src={require('./arrow.png')} alt="" />
                    <i id='next2' class="ri-arrow-down-double-line"></i>
                </div>
                <div className="card stagger2">
                    <figure>
                        <img src={require('./images/final-solution.png')} alt="" />
                    </figure>
                    <article>
                        <h1>Final Solution</h1>
                        <p>The final solution phase involves the implementation of the design and functionality into a complete, working product. We conduct thorough testing to ensure everything works seamlessly and meets the highest quality standards.</p>
                    </article>
                </div>
            </div>
        </section >
    )
}

export default DevelopmentProcess