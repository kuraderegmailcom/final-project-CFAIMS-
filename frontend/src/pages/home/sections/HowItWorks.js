import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        { step: '1', icon: '👤', title: t('how.step1'), desc: t('how.step1.desc'), color: 'bg-blue-500' },
        { step: '2', icon: '📝', title: t('how.step2'), desc: t('how.step2.desc'), color: 'bg-purple-500' },
        { step: '3', icon: '🤖', title: t('how.step3'), desc: t('how.step3.desc'), color: 'bg-green-500' },
        { step: '4', icon: '🎓', title: t('how.step4'), desc: t('how.step4.desc'), color: 'bg-orange-500' }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#001E2B]">
            {/* Animated Gradient Waves */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 via-transparent to-teal-900/20 animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                    {t('how.title')}
                </h2>
                <p className="text-xl text-teal-100 text-center mb-16 max-w-3xl mx-auto">
                    Follow these simple steps to start your journey towards professional growth
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative group">
                            {/* Connector Line */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -z-10"></div>
                            )}

                            <div className="text-center">
                                {/* Step Number Badge */}
                                <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-emerald-100 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
