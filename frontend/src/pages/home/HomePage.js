import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorks from './sections/HowItWorks';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Navigation />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
