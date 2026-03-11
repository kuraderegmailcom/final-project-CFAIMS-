import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './home/sections/Navigation';
import Footer from './home/sections/Footer';
import { CardSkeleton } from '../components/LoadingSkeleton';

const OpportunityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [opportunity, setOpportunity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOpportunity = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/opportunities/${id}`);
                const data = await response.json();

                if (data.success) {
                    setOpportunity(data.data);
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching opportunity:', error);
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchOpportunity();
    }, [id, navigate]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <Navigation />
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto">
                        <CardSkeleton />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!opportunity) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <Navigation />
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Opportunity Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                    >
                        Go Back Home
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-teal-600 hover:text-teal-700 flex items-center gap-2"
                >
                    ← Back to opportunities
                </button>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            {opportunity.recruiterId?.logo && (
                                <img
                                    src={opportunity.recruiterId.logo}
                                    alt={opportunity.recruiterId.companyName}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                            )}
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                    {opportunity.title}
                                </h1>
                                <h2 className="text-lg font-semibold text-gray-600">
                                    {opportunity.recruiterId?.companyName}
                                </h2>
                                <p className="text-gray-500">
                                    {opportunity.recruiterId?.location}
                                </p>
                            </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${opportunity.type === 'freelance'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                            }`}>
                            {opportunity.type === 'freelance' ? 'Freelance' : 'Internship'}
                        </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">💰 Stipend</h3>
                            <p className="text-lg font-bold text-teal-600">
                                ${opportunity.stipend || 'Negotiable'}
                            </p>
                        </div>

                        {opportunity.duration && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-700 mb-2">⏱️ Duration</h3>
                                <p className="text-lg font-bold text-teal-600">
                                    {opportunity.duration}
                                </p>
                            </div>
                        )}

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">📍 Location</h3>
                            <p className="text-lg font-bold text-teal-600">
                                {opportunity.isRemote ? 'Remote' : opportunity.location}
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Description</h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {opportunity.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {opportunity.requiredSkills?.map((skill, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {opportunity.deadline && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Application Deadline</h3>
                            <p className="text-red-600 font-medium">
                                📅 {formatDate(opportunity.deadline)}
                            </p>
                        </div>
                    )}

                    <div className="border-t pt-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Posted on {formatDate(opportunity.createdAt)}
                            </div>
                            <button className="bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default OpportunityDetail;