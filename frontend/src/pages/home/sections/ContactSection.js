import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactSection.css';

const ContactSection = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">{t('contact.title')}</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>{t('contact.email')}</h3>
                            <p>info@studenthub.et</p>
                        </div>
                        <div className="contact-item">
                            <h3>{t('contact.phone')}</h3>
                            <p>+251 911 234 567</p>
                        </div>
                        <div className="social-links">
                            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">t</a>
                            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            placeholder={t('contact.name')}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder={t('contact.email')}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder={t('contact.message')}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows="4"
                            required
                        ></textarea>
                        <button type="submit">{t('contact.send')}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
