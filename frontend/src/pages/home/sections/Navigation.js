import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">ETHIO STUDENTHUB</div>
                    <div className="nav-links">
                        <a href="#jobs">Jobs</a>
                        <a href="#internships">Internships</a>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="nav-actions">
                        <div className="search-container">
                            <input type="text" placeholder="Search" className="search-input" />
                            <span className="search-icon">🔍</span>
                        </div>
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="language-selector"
                        >
                            <option value="en">English</option>
                            <option value="am">አማርኛ</option>
                            <option value="om">Afan Oromo</option>
                        </select>
                        <Link to="/login" className="nav-login">
                            {t('hero.login')}
                        </Link>
                        <Link to="/register" className="nav-register">
                            {t('hero.register')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
