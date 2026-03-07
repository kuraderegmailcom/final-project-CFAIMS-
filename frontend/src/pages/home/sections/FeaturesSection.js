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
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    {t('features.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
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
