import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardSkeleton } from './LoadingSkeleton';
import FilterSort from './FilterSort';

const FreelanceModal = ({ isOpen, onClose }) => {
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        skill: '',
        location: '',
        minStipend: '',
        maxStipend: '',
        sort: 'newest'
    });

    const fetchOpportunities = async () => {
        try {
            setLoading(true);
            const queryParams = new URLSearchParams({
                type: 'freelance',
                ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
            });

            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/opportunities?${queryParams}`);
            const data = await response.json();

            if (data.success) {
                setOpportunities(data.data);
            }
        } catch (error) {
            console.error('Error fetching freelance opportunities:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchOpportunities();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="p-6 text-white bg-gradient-to-r from-teal-700 to-teal-600">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="mb-2 text-2xl font-bold">Freelance Opportunities</h2>
                            <p className="text-teal-100">Discover exciting freelance projects and build your portfolio while earning</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex items-center justify-center w-8 h-8 text-2xl font-bold text-white transition-colors rounded-full hover:text-gray-200 hover:bg-white hover:bg-opacity-20"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <FilterSort
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        showDuration={false}
                    />

                    {loading ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <CardSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {opportunities.length > 0 ? (
                                opportunities.map((opportunity) => (
                                    <div key={opportunity._id} className="p-6 transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                {opportunity.recruiterId?.logo ? (
                                                    <img
                                                        src={opportunity.recruiterId.logo}
                                                        alt={opportunity.recruiterId.companyName}
                                                        className="object-cover w-12 h-12 rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500">
                                                        {opportunity.recruiterId?.companyName?.charAt(0) || 'C'}
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">
                                                        {opportunity.recruiterId?.companyName}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {opportunity.recruiterId?.location}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                Freelance
                                            </span>
                                        </div>

                                        <h4 className="mb-2 text-lg font-semibold text-gray-800">
                                            {opportunity.title}
                                        </h4>

                                        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                                            {opportunity.description}
                                        </p>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-1 mb-2">
                                                {opportunity.requiredSkills?.slice(0, 3).map((skill, index) => (
                                                    <span key={index} className="px-2 py-1 text-xs text-teal-800 bg-teal-100 rounded">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {opportunity.requiredSkills?.length > 3 && (
                                                    <span className="text-xs text-gray-500">
                                                        +{opportunity.requiredSkills.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                            <span>💰 ${opportunity.stipend || 'Negotiable'}</span>
                                            <span>📍 {opportunity.isRemote ? 'Remote' : opportunity.location}</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400">
                                                Posted: {formatDate(opportunity.createdAt)}
                                            </span>
                                            <Link
                                                to={`/opportunity/${opportunity._id}`}
                                                className="px-4 py-2 text-sm text-white transition-colors bg-teal-600 rounded-md hover:bg-teal-700"
                                                onClick={onClose}
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-12 text-center col-span-full">
                                    <div className="mb-4 text-6xl text-gray-400">🔍</div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-600">
                                        No freelance opportunities found
                                    </h3>
                                    <p className="text-gray-500">
                                        Try adjusting your filters or check back later for new opportunities
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreelanceModal;