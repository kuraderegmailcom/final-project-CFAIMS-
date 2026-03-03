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
                    <div className="nav-logo">StudentHub</div>
                    <div className="nav-links">
                        <a href="#home">{t('home')}</a>
                        <a href="#about">{t('hero.about')}</a>
                        <a href="#contact">{t('hero.contact')}</a>
                    </div>
                    <div className="nav-actions">
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
