import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">ETHIO STUDENTHUB</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Empowering Ethiopian students through meaningful opportunities and skill development.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-600 text-white px-4 py-2 rounded-lg">
                            <span className="text-xl">🇪🇹</span>
                            <span className="font-semibold">Made in Ethiopia</span>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Platform</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
                                    {t('footer.about')}
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-blue-400 transition-colors duration-300">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="hover:text-blue-400 transition-colors duration-300">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors duration-300">
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors duration-300">
                                    {t('footer.terms')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                f
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; 2026 Ethio StudentHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
