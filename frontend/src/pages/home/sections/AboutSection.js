import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">{t('about.title')}</h2>
                <p className="about-subtitle">
                    Empowering Ethiopian students to unlock their potential through meaningful opportunities and skill development
                </p>



                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-card-icon">🎯</div>
                        <h3>{t('about.mission')}</h3>
                        <p>{t('about.mission.text')}</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icon">🚀</div>
                        <h3>{t('about.vision')}</h3>
                        <p>{t('about.vision.text')}</p>
                    </div>
                    <div className="about-card">
                        <div className="about-card-icon">💡</div>
                        <h3>{t('about.impact')}</h3>
                        <p>{t('about.impact.text')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
