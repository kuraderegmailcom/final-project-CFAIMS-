import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="px-6 mx-auto max-w-7xl">
                <h2 className="mb-6 text-4xl font-bold text-center text-gray-900 md:text-5xl">
                    {t('about.title')}
                </h2>
                <p className="max-w-4xl mx-auto mb-16 text-xl leading-relaxed text-center text-gray-600">
                    Empowering Ethiopian students to unlock their potential through meaningful opportunities and skill development
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                            🎯
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                            {t('about.mission')}
                        </h3>
                        <p className="leading-relaxed text-center text-gray-600">
                            {t('about.mission.text')}
                        </p>
                    </div>

                    <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                            🚀
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                            {t('about.vision')}
                        </h3>
                        <p className="leading-relaxed text-center text-gray-600">
                            {t('about.vision.text')}
                        </p>
                    </div>

                    <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                            💡
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                            {t('about.impact')}
                        </h3>
                        <p className="leading-relaxed text-center text-gray-600">
                            {t('about.impact.text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
