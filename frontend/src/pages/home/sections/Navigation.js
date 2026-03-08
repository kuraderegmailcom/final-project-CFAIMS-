import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="bg-[#001E2B] shadow-lg sticky top-0 z-50 py-4 border-b border-teal-900/30">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2 text-base font-bold text-white">
                        ETHIO STUDENTHUB
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#jobs" className="text-teal-100 text-sm font-medium hover:text-teal-400 transition-colors">Jobs</a>
                        <a href="#internships" className="text-teal-100 text-sm font-medium hover:text-teal-400 transition-colors">Internships</a>
                        <a href="#home" className="text-teal-100 text-sm font-medium hover:text-teal-400 transition-colors">Home</a>
                        <a href="#about" className="text-teal-100 text-sm font-medium hover:text-teal-400 transition-colors">About</a>
                        <a href="#contact" className="text-teal-100 text-sm font-medium hover:text-teal-400 transition-colors">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="py-2 px-4 pr-10 bg-teal-900/30 border border-teal-700/30 rounded-md text-sm w-52 text-white placeholder-teal-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none text-teal-300">🔍</span>
                        </div>
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="py-2 px-3 bg-teal-900/30 border border-teal-700/30 rounded-md text-sm cursor-pointer text-white focus:outline-none focus:border-teal-500 transition-colors"
                        >
                            <option value="en" className="bg-[#001E2B]">English</option>
                            <option value="am" className="bg-[#001E2B]">አማርኛ</option>
                            <option value="om" className="bg-[#001E2B]">Afan Oromo</option>
                        </select>
                        <Link
                            to="/login"
                            className="py-2 px-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-md hover:from-teal-700 hover:to-cyan-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-600/30 transition-all"
                        >
                            {t('hero.login')}
                        </Link>
                        <Link
                            to="/register"
                            className="py-2 px-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-md hover:from-teal-700 hover:to-cyan-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-600/30 transition-all"
                        >
                            {t('hero.register')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
