import React from 'react';
import LandingContent from './SubComponents/LandingContent/LandingContent';
import CardsSection from './SubComponents/CardsSection/CardsSection';
import Reviews from './SubComponents/Reviews/Reviews';
import Footer from '../Footer/Footer';
import BusinessOpportunities from './SubComponents/BusinessOpportunities/BusinessOpportunities';
import './Home.css';
import DevelopmentProcess from './SubComponents/DevelopmentProcess/DevelopmentProcess';

const Home = () => {

    return (
        <>
            <main id='home-main' className='stagger1'>
                <div id='content' className='fdc faic'>
                    <div id="background">
                        <video loading='lazy' src={require('./bg.webp')} autoPlay loop muted></video>
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
