import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero-section">
            <div className="hero-background" ></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Empowering Students Through Freelance & Internship Opportunities
                </h1>
                <p className="hero-subtitle">
                    Connect with opportunities. Build your future. Grow your skills.
                </p>
                <div className="hero-buttons">
                    <Link to="/register" className="hero-btn-primary">
                        Get Started
                    </Link>
                    <a href="#about" className="hero-btn-secondary">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
