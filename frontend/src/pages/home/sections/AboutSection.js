import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative py-20 overflow-hidden bg-[#001E2B]">
            {/* Animated Gradient Waves */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
                    <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
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

            <div className="relative z-10 px-6 mx-auto max-w-7xl">
                <h2 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl">
                    {t('about.title')}
                </h2>
                <p className="max-w-4xl mx-auto mb-16 text-xl leading-relaxed text-center text-teal-100">
                    Empowering Ethiopian students to unlock their potential through meaningful opportunities and skill development
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="p-8 transition-all duration-300 transform bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:bg-teal-900/30 hover:border-teal-600/30">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-emerald-500 to-teal-500">
                            🎯
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-white">
                            {t('about.mission')}
                        </h3>
                        <p className="leading-relaxed text-center text-teal-100">
                            {t('about.mission.text')}
                        </p>
                    </div>

                    <div className="p-8 transition-all duration-300 transform bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:bg-teal-900/30 hover:border-teal-600/30">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-teal-500 to-cyan-500">
                            🚀
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-white">
                            {t('about.vision')}
                        </h3>
                        <p className="leading-relaxed text-center text-teal-100">
                            {t('about.vision.text')}
                        </p>
                    </div>

                    <div className="p-8 transition-all duration-300 transform bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:bg-teal-900/30 hover:border-teal-600/30">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                            💡
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-white">
                            {t('about.impact')}
                        </h3>
                        <p className="leading-relaxed text-center text-teal-100">
                            {t('about.impact.text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
