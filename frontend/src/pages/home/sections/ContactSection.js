import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="relative py-20 overflow-hidden bg-[#001E2B]">
            {/* Animated Gradient Waves */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl">
                    {t('contact.title')}
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-6 bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 rounded-xl hover:bg-teal-900/30 hover:border-teal-600/30 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-teal-600 rounded-lg">
                                    ✉️
                                </div>
                                <h3 className="text-xl font-semibold text-white">{t('contact.email')}</h3>
                            </div>
                            <p className="ml-16 text-teal-100">kuradere21@gmail.com</p>
                        </div>

                        <div className="p-6 bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 rounded-xl hover:bg-teal-900/30 hover:border-teal-600/30 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-cyan-600 rounded-lg">
                                    📱
                                </div>
                                <h3 className="text-xl font-semibold text-white">{t('contact.phone')}</h3>
                            </div>
                            <p className="ml-16 text-teal-100">+251 945297077</p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a
                                href="https://facebook.com"
                                className="flex items-center justify-center w-12 h-12 text-lg text-white transition-all duration-300 bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                f
                            </a>
                            <a
                                href="https://twitter.com"
                                className="flex items-center justify-center w-12 h-12 text-lg text-white transition-all duration-300 rounded-lg shadow-lg bg-cyan-600 hover:bg-cyan-700 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >

                                in
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder={t('contact.name')}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-3 transition-all duration-300 bg-teal-900/20 border-2 border-teal-700/30 rounded-lg outline-none text-white placeholder-teal-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder={t('contact.email')}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-3 transition-all duration-300 bg-teal-900/20 border-2 border-teal-700/30 rounded-lg outline-none text-white placeholder-teal-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder={t('contact.message')}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="5"
                                required
                                className="w-full px-4 py-3 transition-all duration-300 bg-teal-900/20 border-2 border-teal-700/30 rounded-lg outline-none text-white placeholder-teal-300 resize-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:shadow-xl hover:scale-105"
                        >
                            {t('contact.send')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
