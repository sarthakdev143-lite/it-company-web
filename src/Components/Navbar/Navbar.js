import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import '../littles.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSideMenuActive, setIsSideMenuActive] = useState(false);

    useEffect(() => {
        const handleMenuClick = () => setIsSideMenuActive(true);

        const menu_icon = document.querySelector(".menu-icon");

        if (menu_icon) {
            menu_icon.addEventListener("click", handleMenuClick);
        }

        return () => {
            if (menu_icon) {
                menu_icon.removeEventListener("click", handleMenuClick);
            }
        };
    }, []);

    return (
        <>
            <div id='navbar-wrapper' className='stagger1'>
                <header className='faic center1'>
                    <nav className='faic'>
                        <section className='faic'>
                            <NavLink to='/'>
                                <figure>
                                    <img id='logo' loading='lazy' src={require('./Skyra_Tech_logo.png')} alt='Logo' />
                                </figure>
                            </NavLink>
                        </section>
                        <section className='faic'>
                            <ul className='faic gap' type='none'>
                                <li>
                                    <NavLink to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>
                                        About
                                    </NavLink>
                                </li>
                                <li id='dropdown'>
                                    <a className='pointer'>Services <i class="ri-arrow-drop-down-line"></i></a>
                                    <ul className='fdc' id="dropdown-content" type='none'>
                                        <li className='faic'>
                                            <NavLink to='web-development'>
                                                Web Development
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='mobile-app-development'>
                                                Mobile App Development
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='ecommerce-development'>
                                                E-Commerce Development
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='software-development'>
                                                Software Development
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='wireframing-&-prototyping'>
                                                Wireframing & Prototyping
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='managed-services'>
                                                Managed Services
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li id='dropdown'>
                                    <a className="pointer">Verticals <i class="ri-arrow-drop-down-line"></i></a>
                                    <ul className='fdc' id='dropdown-content' type='none'>
                                        <li className='faic'>
                                            <NavLink to='healthcare'>
                                                Healthcare
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='consumer'>
                                                Consumer
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='travel-&-tourism'>
                                                Travel & Tourism
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='education'>
                                                Education
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='food-&-restaurnt'>
                                                Food & Restaurant
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='warehouse'>
                                                Warehouse
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='real-estate'>
                                                Real Estate
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='banking-&-finance'>
                                                Banking & Finance
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='energy-&-utility'>
                                                Energy & Utility
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='ecommerce'>
                                                E-Commerce
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='manufacturing'>
                                                Manufacturing
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li id='dropdown'>
                                    <a className='pointer'>Technologies <i class="ri-arrow-drop-down-line"></i></a>
                                    <ul className='fdc' id="dropdown-content" type='none'>
                                        <li className='faic'>
                                            <NavLink to='open-source'>
                                                Open Source
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='enterprise'>
                                                Enterprise
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='ruby-on-rails'>
                                                Ruby On Rails
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='/iot'>
                                                Internet of Things (IoT)
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='/blockchain'>
                                                Blockchain
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='cloud-computing'>
                                                Cloud Computing
                                            </NavLink>
                                        </li>
                                        <li className='faic'>
                                            <NavLink to='testing'>
                                                Testing
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to='career'>
                                        Career
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='contact-us'>
                                        Contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className='faic'>
                            <span class="menu-icon pointer material-symbols-outlined">
                                menu
                            </span>
                        </section>
                    </nav>
                </header>
            </div>
            <NavLink to='/get-free-estimation'>
                <li type='none' id='get-free-esti' className='responsive'>Get Free Estimation</li>
            </NavLink>
            <SideMenu isActive={isSideMenuActive} closeMenu={() => setIsSideMenuActive(false)} />
        </>
    )
}

export default Navbar