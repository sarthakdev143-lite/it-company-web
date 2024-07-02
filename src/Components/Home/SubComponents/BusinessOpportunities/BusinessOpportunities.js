import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BusinessOpportunities.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BusinessOpportunities = () => {
    useGSAP(() => {
        const counters = document.querySelectorAll('.content h1 span');
        counters.forEach(counter => {
            gsap.fromTo(counter,
                { innerText: 0 },
                {
                    innerText: 100,
                    scrollTrigger: {
                        trigger: counter,
                        start: 'top 105%',
                    },
                    duration: 2,
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        counter.innerText = Math.round(counter.innerText);
                    }
                }
            );
        });
    }, []);

    return (
        <section id='business-opportunities'>
            <div className="exaggerations">
                <figure>
                    <img className='curvyline' src={require('./line.png')} alt="Curvy Line" />
                </figure>
                <div className="container">
                    <div className="sub-container">
                        <div className="box">
                            <figure>
                                <img src={require('./images/counter-icon1.png')} alt="" />
                            </figure>
                            <div className="content">
                                <h1><span className='count1'>0</span>+</h1>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="box">
                            <figure>
                                <img src={require('./images/counter-icon2.png')} alt="" />
                            </figure>
                            <div className="content">
                                <h1><span className='count2'>0</span>+</h1>
                                <p>Finished Projects</p>
                            </div>
                        </div>
                        <div className="box">
                            <figure>
                                <img src={require('./images/counter-icon3.png')} alt="" />
                            </figure>
                            <div className="content">
                                <h1><span className='count2'>0</span>+</h1>
                                <p>Skilled Experts</p>
                            </div>
                        </div>
                        <div className="box">
                            <figure>
                                <img src={require('./images/counter-icon4.png')} alt="" />
                            </figure>
                            <div className="content">
                                <h1><span className='count4'>0</span>+</h1>
                                <p>Media Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <h1>Unlock Business Opportunities with SkyraTech's Unmatched Web Development Services.</h1>
                <p>Websites offer the best visual representation for any business. Our web development services encompass UI/UX design, graphic design, wireframing, prototyping, and the creation of customized web page content using industry-standard fonts and colors to ensure a user-friendly experience. A well-designed website enhances a business’s credibility across all industries. To achieve the perfect website, it is essential to hire a leading web development company that can deliver :-</p>
            </article>
        </section>
    );
};

export default BusinessOpportunities;
