import React from 'react';
import LandingContent from './SubComponents/LandingContent/LandingContent';
import CardsSection from './SubComponents/CardsSection/CardsSection';
import Reviews from './SubComponents/Reviews/Reviews';
import Footer from '../Footer/Footer';
import BusinessOpportunities from './SubComponents/BusinessOpportunities/BusinessOpportunities';
import './Home.css';
import DevelopmentProcess from './SubComponents/DevelopmentProcess/DevelopmentProcess';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".stagger1", {
            opacity: 0,
            y: -100,
            stagger: 0.15,
            ease: "slow(0.1,1,false)",
            delay: 0.15
        })

        tl.from(".landing-text", {
            opacity: 0,
            y: 10,
            ease: "slow(0.1,1,false)",
        })
    })

    return (
        <>
            <main id='home-main' className='stagger1'>
                <div id='content' className='fdc faic'>
                    <div id="background">
                        <img style={{ width: "100%" }} src={require("./poster.jpg")} alt="Background Image" />
                        {/* Commented it As it Was Lagging Too Much On My Device*/}
                        {/* <video loading='lazy' poster={require('./poster.jpg')} preload='none' src={require('./bg.mp4')} autoPlay loop muted></video> */}
                        <div id='blur'></div>
                    </div>
                    <LandingContent />
                    <BusinessOpportunities />
                    <CardsSection />
                    <DevelopmentProcess />
                    <hr style={{ width: '100%', filter: 'brightness(1.3)' }} />
                    <Reviews />
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Home;
