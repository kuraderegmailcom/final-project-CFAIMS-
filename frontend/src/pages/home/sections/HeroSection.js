import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/student8.png')" }}
            ></div>
            
            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-gradient to-white">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-500/20 animate-pulse"></div>
                    <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl animate-blob"></div>
                    <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-teal-500/20 blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001E2B]/50 to-[#001E2B]/80"></div>

            {/* Content */}
            <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
                <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                    {t('hero.title')}
                </h1>
                <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-teal-100 md:text-2xl">
                    {t('hero.subtitle')}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link 
                        to="/register" 
                        className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 hover:shadow-2xl hover:shadow-teal-600/50 hover:-translate-y-1"
                    >
                        {t('hero.getStarted')}
                    </Link>
                    <a 
                        href="#about" 
                        className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform border-2 rounded-lg bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:-translate-y-1"
                    >
                        {t('hero.learnMore')}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
                <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/30">
                    <div className="w-1 h-3 rounded-full bg-white/50"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
