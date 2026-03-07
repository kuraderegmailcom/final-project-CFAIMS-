import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamSection = () => {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: 'kurabachew dereje',
            role: 'Full stack developer',
            image: '/kura.png',
            gradient: 'from-yellow-400 to-orange-400'
        },
        {
            name: 'Alemseged Muleta',
            role: 'Full Stack Developer',
            image: '/kura.png',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            name: 'gutema',
            role: 'Full Stack Developer',
            image: '/kura.png',
            gradient: 'from-blue-400 to-cyan-500'
        },
        {
            name: 'wabi',
            role: 'Full Stack Developer',
            image: '/kura.png',
            gradient: 'from-red-400 to-pink-500'
        },
        {
            name: 'Ergama',
            role: 'Full Stack Developer',
            image: '/kura.png',
            gradient: 'from-purple-400 to-indigo-500'
        }
    ];

    return (
        <section id="team" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(to right, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
                    backgroundPosition: '0 0, 0 0, 0 0, 0 0'
                }}></div>
            </div>

            <div className="relative z-10 px-6 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        {t('team.title', 'Join Our Team')}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300">
                        {t('team.subtitle', 'Meet the talented individuals behind our success')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden transition-all duration-500 transform group hover:scale-105 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden shadow-2xl h-80 rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                <div className="absolute inset-[3px] rounded-3xl overflow-hidden bg-gray-800">
                                    <div className="relative h-full">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90"></div>
                                        
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="mb-1 text-xl font-bold text-white">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-300">
                                                {member.role}
                                            </p>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                    </div>
                                </div>
                            </div>

                            <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="mb-6 text-xl text-gray-300">
                        {t('team.cta', 'Want to be part of our amazing team?')}
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:scale-105"
                    >
                        {t('team.contact', 'Get In Touch')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
