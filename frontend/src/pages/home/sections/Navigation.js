import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FreelanceModal from '../../../components/FreelanceModal';
import InternshipModal from '../../../components/InternshipModal';

const Navigation = () => {
    const { t, i18n } = useTranslation();
    const [showFreelanceModal, setShowFreelanceModal] = useState(false);
    const [showInternshipModal, setShowInternshipModal] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleFreelanceClick = () => {
        setShowFreelanceModal(true);
        setShowInternshipModal(false);
    };

    const handleInternshipClick = () => {
        setShowInternshipModal(true);
        setShowFreelanceModal(false);
    };

    const closeModals = () => {
        setShowFreelanceModal(false);
        setShowInternshipModal(false);
    };

    // Close modals when pressing Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModals();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <nav className="bg-[#001E2B] shadow-lg sticky top-0 z-50 py-4 border-b border-teal-900/30">
                <div className="px-5 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between gap-8">
                        <div className="flex items-center gap-2 text-base font-bold text-white">
                            ETHIO STUDENTHUB
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Freelance Button */}
                            <button
                                onClick={handleFreelanceClick}
                                className="flex items-center gap-1 text-sm font-medium text-teal-100 transition-colors hover:text-teal-400"
                            >
                                Freelance
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Internships Button */}
                            <button
                                onClick={handleInternshipClick}
                                className="flex items-center gap-1 text-sm font-medium text-teal-100 transition-colors hover:text-teal-400"
                            >
                                Internships
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <a href="#home" className="text-sm font-medium text-teal-100 transition-colors hover:text-teal-400">Home</a>
                            <a href="#about" className="text-sm font-medium text-teal-100 transition-colors hover:text-teal-400">About</a>
                            <a href="#contact" className="text-sm font-medium text-teal-100 transition-colors hover:text-teal-400">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-4 py-2 pr-10 text-sm text-white placeholder-teal-300 transition-all border rounded-md bg-teal-900/30 border-teal-700/30 w-52 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                                />
                                <span className="absolute text-sm text-teal-300 -translate-y-1/2 pointer-events-none right-3 top-1/2">🔍</span>
                            </div> */}
                            <select
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="px-3 py-2 text-sm text-white transition-colors border rounded-md cursor-pointer bg-teal-900/30 border-teal-700/30 focus:outline-none focus:border-teal-500"
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

            {/* Modals */}
            <FreelanceModal
                isOpen={showFreelanceModal}
                onClose={closeModals}
            />
            <InternshipModal
                isOpen={showInternshipModal}
                onClose={closeModals}
            />
        </>
    );
};

export default Navigation;