import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>ETHIO STUDENTHUB</h3>
                        <p className="footer-description">
                            Empowering Ethiopian students through meaningful opportunities and skill development.
                        </p>
                        <div className="footer-badge">
                            <span>🇪🇹</span>
                            <span>Made in Ethiopia</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#about">{t('footer.about')}</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/privacy-policy">{t('footer.privacy')}</Link></li>
                            <li><Link to="/terms-of-service">{t('footer.terms')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="footer-social">
                            <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
                            <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Ethio StudentHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
