import React from 'react'
import './Topbar.css'
import { NavLink } from 'react-router-dom'

const Topbar = () => {
    return (
        <header id='header' className='faic center1 stagger1'>
            <div id='top-navbar-wrapper' className='faic'>
                <nav>
                    <ul type='none' className='faic'>
                        <li><i class="ri-mail-line"></i></li>
                        <li>: info@skyratech.in</li>
                    </ul>
                    <ul type='none' className='faic'>
                        <li><i class="ri-phone-fill"></i></li>
                        <li>: +91-9981560424</li>
                    </ul>
                </nav>
                <nav>
                    <ul type='none' className='faic s-gap'>
                        <li className='pointer'><i class="ri-twitter-x-fill"></i></li>
                        <li className='pointer'><i class="ri-facebook-circle-fill"></i></li>
                        <li className='pointer'><i class="ri-linkedin-line"></i></li>
                        <li className='pointer'><i class="ri-instagram-line"></i></li>
                        <li className='pointer'><i class="ri-youtube-fill"></i></li>
                    </ul>
                    <ul type='none' className='faic s-gap'>
                        <NavLink to='/get-free-estimation' style={{textDecoration: "none"}}>
                            <li id='get-free-esti'>Get Free Estimation</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Topbar