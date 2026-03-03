import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>StudentHub</h3>
                        <p className="footer-description">
                            Empowering Ethiopian students through meaningful opportunities, skill development, and AI-powered career matching.
                        </p>
                        <div className="footer-badge">
                            <span>🇪🇹</span>
                            <span>Made in Ethiopia</span>
                        </div>
                        <div className="footer-social">
                            <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
                            <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
                            <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                            <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#about">{t('footer.about')}</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#about">{t('footer.privacy')}</a></li>
                            <li><a href="#contact">{t('footer.terms')}</a></li>
                            <li><a href="#about">Cookie Policy</a></li>
                            <li><a href="#contact">Disclaimer</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest opportunities</p>
                        <form className="footer-newsletter" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="footer-bottom-text">
                            &copy; 2024 StudentHub. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#about">Privacy</a>
                            <a href="#contact">Terms</a>
                            <a href="#home">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
