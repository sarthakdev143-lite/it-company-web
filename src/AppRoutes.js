import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NoPage from './Components/NoPage/NoPage';
import useDocumentTitle from './Components/useDocumentTitle';
import Home from './Components/Home/Home';

// Lazy loading components
const AboutUs = lazy(() => import('./Components/AboutUs/AboutUs'));
const Policy = lazy(() => import('./Components/Policy/Policy'));

const WebDevelopment = lazy(() => import('./Components/Services/WebDevelopment'));
const MobileAppDevelopment = lazy(() => import('./Components/Services/MobileAppDevelopment'));
const ECommerceDevelopment = lazy(() => import('./Components/Services/ECommerceDevelopment'));
const SoftwareDevelopment = lazy(() => import('./Components/Services/SoftwareDevelopment'));
const WireframingPrototyping = lazy(() => import('./Components/Services/WireframingPrototyping'));
const ManagedServices = lazy(() => import('./Components/Services/ManagedServices'));

const Healthcare = lazy(() => import('./Components/Verticals/Healthcare'));
const Consumer = lazy(() => import('./Components/Verticals/Consumer'));
const TravelTourism = lazy(() => import('./Components/Verticals/TravelTourism'));
const Education = lazy(() => import('./Components/Verticals/Education'));
const FoodRestaurant = lazy(() => import('./Components/Verticals/FoodRestaurant'));
const Warehouse = lazy(() => import('./Components/Verticals/Warehouse'));
const RealEstate = lazy(() => import('./Components/Verticals/RealEstate'));
const BankingFinance = lazy(() => import('./Components/Verticals/BankingFinance'));
const EnergyUtility = lazy(() => import('./Components/Verticals/EnergyUtility'));
const Ecommerce = lazy(() => import('./Components/Verticals/Ecommerce'));
const Manufacturing = lazy(() => import('./Components/Verticals/Manufacturing'));

const OpenSource = lazy(() => import('./Components/Technologies/OpenSource'));
const Enterprise = lazy(() => import('./Components/Technologies/Enterprise'));
const RubyOnRails = lazy(() => import('./Components/Technologies/RubyOnRails'));
const IoT = lazy(() => import('./Components/Technologies/IoT'));
const Blockchain = lazy(() => import('./Components/Technologies/Blockchain'));
const CloudComputing = lazy(() => import('./Components/Technologies/CloudComputing'));
const Testing = lazy(() => import('./Components/Technologies/Testing'));

const Career = lazy(() => import('./Components/Career/Career'));
const ContactUs = lazy(() => import('./Components/ContactUs/ContactUs'));
const GetFreeEsti = lazy(() => import('./Components/GetFreeEsti/GetFreeEsti'));

const AppRoutes = () => {
    const titles = {
        '/': 'Home',
        '/about': 'About Us',
        '/privacy-policy': 'Privacy Policy',
        '/web-development': 'Web Development',
        '/mobile-app-development': 'Mobile App Development',
        '/ecommerce-development': 'E-Commerce Development',
        '/software-development': 'Software Development',
        '/wireframing-&-prototyping': 'Wireframing & Prototyping',
        '/managed-services': 'Managed Services',
        '/healthcare': 'Healthcare',
        '/consumer': 'Consumer',
        '/travel-&-tourism': 'Travel & Tourism',
        '/education': 'Education',
        '/food-&-restaurnt': 'Food & Restaurant',
        '/warehouse': 'Warehouse',
        '/real-estate': 'Real Estate',
        '/banking-&-finance': 'Banking & Finance',
        '/energy-&-utility': 'Energy & Utility',
        '/ecommerce': 'Ecommerce',
        '/manufacturing': 'Manufacturing',
        '/open-source': 'Open Source',
        '/enterprise': 'Enterprise',
        '/ruby-on-rails': 'Ruby on Rails',
        '/iot': 'IoT',
        '/blockchain': 'Blockchain',
        '/cloud-computing': 'Cloud Computing',
        '/testing': 'Testing',
        '/career': 'Career',
        '/contact-us': 'Contact Us',
        '/get-free-estimation': 'Get Free Estimation',
        '*': '404 - Not Found'
    };

    useDocumentTitle(titles);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/privacy-policy" element={<Policy />} />

                    {/* Services routes */}
                    <Route path="/web-development" element={<WebDevelopment />} />
                    <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
                    <Route path="/ecommerce-development" element={<ECommerceDevelopment />} />
                    <Route path="/software-development" element={<SoftwareDevelopment />} />
                    <Route path="/wireframing-&-prototyping" element={<WireframingPrototyping />} />
                    <Route path="/managed-services" element={<ManagedServices />} />

                    {/* Verticals routes */}
                    <Route path="/healthcare" element={<Healthcare />} />
                    <Route path="/consumer" element={<Consumer />} />
                    <Route path="/travel-&-tourism" element={<TravelTourism />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/food-&-restaurnt" element={<FoodRestaurant />} />
                    <Route path="/warehouse" element={<Warehouse />} />
                    <Route path="/real-estate" element={<RealEstate />} />
                    <Route path="/banking-&-finance" element={<BankingFinance />} />
                    <Route path="/energy-&-utility" element={<EnergyUtility />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    <Route path="/manufacturing" element={<Manufacturing />} />

                    {/* Technologies routes */}
                    <Route path="/open-source" element={<OpenSource />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/ruby-on-rails" element={<RubyOnRails />} />
                    <Route path="/iot" element={<IoT />} />
                    <Route path="/blockchain" element={<Blockchain />} />
                    <Route path="/cloud-computing" element={<CloudComputing />} />
                    <Route path="/testing" element={<Testing />} />

                    {/* Other routes */}
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/get-free-estimation" element={<GetFreeEsti />} />

                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
