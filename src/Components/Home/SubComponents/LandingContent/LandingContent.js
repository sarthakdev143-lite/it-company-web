import React from 'react';
import TypedText from '../TypedText';
import './LandingContent.css';

const LandingContent = () => (
    <section id='landing-content' className='fdc'>
        <div id='part-1' className='faic'>
            <aside className='flex landing-text'>
                <h1>Innovative Solutions for Your Business Success</h1>
                <p>Skyra Tech Solutions Pvt Ltd specializes in delivering top-notch web and mobile app development services with a focus on innovation, quality, and customer satisfaction.</p>
            </aside>
        </div>
        <div id='part-2' className='faic'>
            <h1>
                <div>
                    <p>looking for</p>
                </div>
                <div>
                    <TypedText strings={['REMOTE HANDS', 'IT CONSULTANCY', 'CLOUD SUPPORT', 'E-COMMERCE', 'WEB DEVELOPMENT']} />
                </div>
                <div>
                    <p id='child2'>CONSULTING?</p>
                </div>
            </h1>
            <button>contact us today</button>
        </div>
    </section>
);

export default LandingContent;
