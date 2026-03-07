import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="bg-cyan-500 shadow-md sticky top-0 z-50 py-4">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2 text-base font-bold text-blue-900">
                        ETHIO STUDENTHUB
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#jobs" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">Jobs</a>
                        <a href="#internships" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">Internships</a>
                        <a href="#home" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
                        <a href="#about" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">About</a>
                        <a href="#contact" className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="py-2 px-4 pr-10 border border-gray-300 rounded-md text-sm w-52 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none">🔍</span>
                        </div>
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm cursor-pointer focus:outline-none focus:border-blue-600 transition-colors"
                        >
                            <option value="en">English</option>
                            <option value="am">አማርኛ</option>
                            <option value="om">Afan Oromo</option>
                        </select>
                        <Link
                            to="/login"
                            className="py-2 px-5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
                        >
                            {t('hero.login')}
                        </Link>
                        <Link
                            to="/register"
                            className="py-2 px-5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
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
