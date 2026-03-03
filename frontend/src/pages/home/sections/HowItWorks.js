import React from 'react';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        { step: '1', icon: '👤', title: t('how.step1'), desc: t('how.step1.desc') },
        { step: '2', icon: '📝', title: t('how.step2'), desc: t('how.step2.desc') },
        { step: '3', icon: '🤖', title: t('how.step3'), desc: t('how.step3.desc') },
        { step: '4', icon: '🎓', title: t('how.step4'), desc: t('how.step4.desc') }
    ];

    return (
        <section className="how-it-works">
            <div className="how-container">
                <h2 className="how-title">{t('how.title')}</h2>
                <p className="how-subtitle">
                    Follow these simple steps to start your journey towards professional growth
                </p>
                <div className="how-grid">
                    {steps.map((item, idx) => (
                        <div key={idx} className="how-step">
                            <div className="step-number">{item.step}</div>
                            <div className="step-icon">{item.icon}</div>
                            <h3 className="step-title">{item.title}</h3>
                            <p className="step-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
