import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
    const { t } = useTranslation();

    const features = [
        { title: t('features.ai'), desc: t('features.ai.desc'), icon: '🤖', gradient: 'from-blue-500 to-cyan-500' },
        { title: t('features.task'), desc: t('features.task.desc'), icon: '📋', gradient: 'from-purple-500 to-pink-500' },
        { title: t('features.multilingual'), desc: t('features.multilingual.desc'), icon: '🌍', gradient: 'from-green-500 to-emerald-500' },
        { title: t('features.performance'), desc: t('features.performance.desc'), icon: '📊', gradient: 'from-orange-500 to-red-500' },
        { title: t('features.secure'), desc: t('features.secure.desc'), icon: '🔒', gradient: 'from-indigo-500 to-blue-500' },
        { title: t('features.apply'), desc: t('features.apply.desc'), icon: '💼', gradient: 'from-pink-500 to-rose-500' }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#001E2B]">
            {/* Animated Gradient Waves */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 via-transparent to-teal-900/20 animate-pulse"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(6, 95, 70, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(6, 95, 70, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    {t('features.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group bg-teal-900/20 backdrop-blur-sm border border-teal-700/20 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-teal-900/30 hover:border-teal-600/30"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-teal-100 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
