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
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl px-6 mx-auto">
                <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 md:text-5xl">
                    {t('contact.title')}
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-blue-600 rounded-lg">
                                    ✉️
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{t('contact.email')}</h3>
                            </div>
                            <p className="ml-16 text-gray-700">kuradere21@gmail.com</p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-purple-600 rounded-lg">
                                    📱
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{t('contact.phone')}</h3>
                            </div>
                            <p className="ml-16 text-gray-700">+251 945297077</p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a
                                href="https://facebook.com"
                                className="flex items-center justify-center w-12 h-12 text-lg text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                f
                            </a>
                            <a
                                href="https://twitter.com"
                                className="flex items-center justify-center w-12 h-12 text-lg text-white transition-all duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-600 hover:scale-110"
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
                                className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder={t('contact.email')}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder={t('contact.message')}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="5"
                                required
                                className="w-full px-4 py-3 transition-all duration-300 border-2 border-gray-200 rounded-lg outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:scale-105"
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
