import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import Logo from './SkyraTech_Logo_Dark.png'

const Footer = () => {
  const BackToTop = () => {
    document.body.scrollTo(0, 0);
  }

  return (
    <section id='footer' className='fdc'>
      <div id='part-1' className='flex gap'>
        <footer>
          <div className="main-container">
            <div className="part-1">
              <figure>
                <img loading='lazy' id='logo' src={Logo} alt='Logo' />
                {/* <img loading='lazy' id='logo' src={require('./SkyratechLight.png')} alt='Logo' /> */}
                {/* <img id='logo' loading='lazy' src={require('./Skyra_Tech_logo.png')} alt='Logo' /> */}
              </figure>
              <article>
                Skyra Tech Solutions Pvt Ltd excels in IT services like open source development, mobile app creation, blockchain, and IoT.
              </article>
              <ul className="links" type='none'>
                <a href="https://www.facebook.com/skyratechsolutions/" target="_blank" rel="noopener noreferrer">
                  <li>
                    <i id='fb' class="ri-facebook-fill"></i>
                  </li>
                </a>
                <a href="https://www.linkedin.com/company/skyratech-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                  <li>
                    <i id='linkedin' class="ri-linkedin-line"></i>
                  </li>
                </a>
                <a href="https://twitter.com/skyratechsolutio" target="_blank" rel="noopener noreferrer">
                  <li>
                    <i id='twitter' class="ri-twitter-x-line"></i>
                  </li>
                </a>
                <a href="https://www.instagram.com/skyratechsolutions/" target="_blank" rel="noopener noreferrer">
                  <li>
                    <i id='ig' class="ri-instagram-line"></i>
                  </li>
                </a>
                <a href="https://www.youtube.com/channel/UC2Z5Q91z7J5Z8Q0Z6J5Z8Q0Z" target="_blank" rel="noopener noreferrer">
                  <li>
                    <i id='yt' class="ri-youtube-line"></i>
                  </li>
                </a>
              </ul>
            </div>
            <div className="part-2">
              <h1 className='heading'>Contact Us</h1>
              <p>703 Vijay Nagar Indore, 452010 India</p>
              <div className="sub-ele">
                <i class="ri-time-line"></i>
                <span>
                  <h3>Opening Hours :</h3>
                  <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                </span>
              </div>
              <div className="sub-ele">
                <i class="ri-phone-fill"></i>
                <h3>Phone Call :</h3>
                <a href='tel:+919981560424'>+91-9981560424</a>
              </div>
            </div>
          </div>
        </footer >
        {/* <div id='article-con'>
          <article id='about' className='fdc m-gap relative'>
            <figure>
              <img loading='lazy' id='logo' src={require('./SkyratechLight.png')} alt='Logo' />
            </figure>
            <p>
              Skyra Tech Solutions Pvt Ltd excels in IT services like open source development, mobile app creation, blockchain, and IoT. They deliver tailored, high-quality solutions with a strong focus on detail and customer satisfaction.
            </p>
          </article>
          <article id='address' className='relative'>
            <h1>Contact Information:</h1>
            <address>
              <p><strong>Skyra Tech Solution Pvt Ltd</strong>,</p>
              <p>703 Vijay Nagar<br />
                Indore, 452010<br />
                India</p>
              <p>Phone : <a href='tel:+919981560424'>+91-9981560424</a><br />
                Email : <a href="mailto:info@skyratech.in">info@skyratech.in</a><br />
                Website : <a href="http://www.skyratech.in" target="_blank">www.skyratech.in</a></p>
            </address>
          </article>
        </div>
        <div id='get-in-touch' className='fdc m-gap'>
          <h1>Get in Touch...</h1>
          <ul type='none' className='flex m-gap'>
            <a href='mailto:info@skyratech.in'>
              <li className='faic'>
                <i id='mail' class="ri-mail-line"></i>
                <span>Email Us</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='twitter' class="ri-twitter-x-line"></i>
                <span>X (Twitter)</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='fb' class="ri-facebook-fill"></i>
                <span>Facebook</span>
              </li>
            </a>
            <a href='https://www.linkedin.com/company/skyratech-solutions2023/?viewAsMember=true'>
              <li className='faic'>
                <i id='linkedin' class="ri-linkedin-line"></i>
                <span>LinkedIn</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='ig' class="ri-instagram-line"></i>
                <span>Instagram</span>
              </li>
            </a>
          </ul>
        </div> */}
      </div >
      <div id='part-2' className='faic center1'>
        <div id='container' className='faic relative'>
          <ul type='none' className='faic'>
            <div className="first">
              <li className='relative'>Copyright © 2024 <a className='relative' href=''>Skyra Tech Solution Pvt Ltd.</a> All Rights Reserved</li>
              <li className='disappear'>|</li>
              <li className='relative disappear'>
                <NavLink to='/privacy-policy'>
                  Privacy Policy
                </NavLink>
              </li>
            </div>
            <a id='back-to-top' className='disappear' href='#' onClick={BackToTop}>
              <span title='Back To Top' class="material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </a>
          </ul>
          <ul type='none' className='appear'>
            <li className='relative'>
              <NavLink to='/privacy-policy'>
                Privacy Policy
              </NavLink>
            </li>
            <a id='back-to-top' href='#' onClick={BackToTop}>
              <span title='Back To Top' class="material-symbols-outlined">
                keyboard_arrow_up
              </span>
            </a>
          </ul>
        </div>
      </div>
    </section >
  )
}

export default Footer