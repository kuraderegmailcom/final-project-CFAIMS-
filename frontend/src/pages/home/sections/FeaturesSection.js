import React from 'react';
import { useTranslation } from 'react-i18next';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const { t } = useTranslation();

    const features = [
        { title: t('features.ai'), desc: t('features.ai.desc'), icon: '🤖' },
        { title: t('features.task'), desc: t('features.task.desc'), icon: '📋' },
        { title: t('features.multilingual'), desc: t('features.multilingual.desc'), icon: '🌍' },
        { title: t('features.performance'), desc: t('features.performance.desc'), icon: '📊' },
        { title: t('features.secure'), desc: t('features.secure.desc'), icon: '🔒' }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <h2 className="features-title">{t('features.title')}</h2>
                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
