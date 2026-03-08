import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorks from './sections/HowItWorks';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import TeamSection from './sections/TeamSection';
import Footer from './sections/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <AboutSection />
            <ContactSection />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default HomePage;
