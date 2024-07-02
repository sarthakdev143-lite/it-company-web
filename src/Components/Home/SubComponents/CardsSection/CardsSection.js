import React from 'react';
import Card from './Card';
import './CardsSection.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const cardsData = [
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-2-300x200.jpg',
        number: '01',
        title: 'Cutting-Edge Technology Expertise :',
        content: <>
            <p>Skyra Tech Solutions boasts a team of skilled professionals well-versed in the latest technologies and frameworks. Whether it's web development, mobile app development, or software solutions, the company leverages cutting-edge tools to deliver innovative and efficient solutions to its clients.</p>
        </>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-1-300x200.jpg',
        number: '02',
        title: 'Customer-Centric Approach :',
        content: <p>One of the key features of Skyra Tech Solutions is its unwavering commitment to customer satisfaction. The company prioritizes understanding the unique needs and challenges of each client and tailors its solutions accordingly. From initial consultation to project delivery and support, Skyra Tech Solutions maintains open communication and transparency to ensure client satisfaction at every step of the process.</p>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-7-300x200.jpg',
        number: '03',
        title: 'Comprehensive Service Offerings :',
        content: <p>Skyra Tech Solutions offers a wide range of services spanning web development, mobile app development, e-commerce solutions, software development, wireframing, and prototyping. This comprehensive suite of offerings enables clients to address all their digital needs under one roof, streamlining the development process and ensuring consistency and coherence across projects.</p>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2017/06/project-4-300x200.jpg',
        number: '04',
        title: 'Innovative Solutions :',
        content: <>
            <p>Skyra Tech Solutions prides itself on its ability to deliver innovative and customized solutions that not only meet but exceed client expectations. By staying abreast of industry trends and emerging technologies, the company is able to offer forward-thinking solutions that drive business growth and success for its clients.</p>
        </>
    },
    {
        image: 'https://zentech-it.com/wp-content/uploads/2021/08/trader-using-bitcoin-crypto-payment-service-app-wi-YJ9M2ZM-scaled-300x200.jpg',
        number: '05',
        title: 'Proven Track Record :',
        content:
            <p>With a track record of successful projects and satisfied clients, Skyra Tech Solutions has established itself as a reliable and trusted partner in the digital landscape. Whether working with startups, SMEs, or large enterprises, the company consistently delivers high-quality results that drive tangible value and ROI for its clients.</p>
    }
];

const CardsSection = () => {

    useGSAP(() => {
        const cards = document.querySelectorAll("#card");

        const animateCards = (elements) => {
            gsap.from(elements, {
                opacity: 0,
                duration: 0.5,
                stagger: 0.15,
                y: -30,
                scrollTrigger: {
                    trigger: elements,
                    scroller: "body",
                    start: "top 90%",
                }
            });
        };

        if (window.innerWidth > 1004) {
            // This Should Work For Desktops
            animateCards(cards);
        } else {
            // This Should Work For Mobile Devices
            cards.forEach(card => animateCards(card));
        }
    });


    return (
        <section id='cards' className='flex relative'>
            {cardsData.map((card, index) => (
                <Card key={index} image={card.image} number={card.number} title={card.title}>
                    {card.content}
                </Card>
            ))}
        </section>
    )
}

export default CardsSection