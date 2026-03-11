import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FreelanceOpportunities = () => {
    const navigate = useNavigate();
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        skill: '',
        location: '',
        duration: '',
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
        fetchOpportunities();
    }, [filters]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black bg-opacity-50">
            <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl mx-auto">
                <div className="bg-[#001E2B] shadow-lg sticky top-0 z-50 py-4 border-b border-teal-900/30">
                    <h1 className="mb-2 text-3xl font-bold text-white">Freelance Opportunities</h1>
                    <p className="text-sm text-white text-opacity-90">Discover exciting freelance opportunity</p>
                    <button
                        className="absolute flex items-center justify-center w-8 h-8 text-xl text-white transition-colors bg-white rounded-md top-5 right-5 bg-opacity-20 hover:bg-opacity-30"
                        onClick={handleClose}
                    >
                        ×
                    </button>
                </div>

                <div className="p-6 border-b border-gray-200 bg-gray-50">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">filter:skill</label>
                            <input
                                type="text"
                                value={filters.skill}
                                onChange={(e) => handleFilterChange('skill', e.target.value)}
                                placeholder="e.g. React, Python"
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">filter:location</label>
                            <input
                                type="text"
                                value={filters.location}
                                onChange={(e) => handleFilterChange('location', e.target.value)}
                                placeholder="e.g. Addis Ababa"
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">Duration</label>
                            <select
                                value={filters.duration}
                                onChange={(e) => handleFilterChange('duration', e.target.value)}
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Any Duration</option>
                                <option value="1-3 months">1-3 months</option>
                                <option value="3-6 months">3-6 months</option>
                                <option value="6+ months">6+ months</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">filter:sort</label>
                            <select
                                value={filters.sort}
                                onChange={(e) => handleFilterChange('sort', e.target.value)}
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="newest">Newest</option>
                                <option value="stipend">Highest Stipend</option>
                                <option value="match">Best Match</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">filter:minStipend</label>
                            <input
                                type="number"
                                value={filters.minStipend}
                                onChange={(e) => handleFilterChange('minStipend', e.target.value)}
                                placeholder="0"
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">filter:maxStipend</label>
                            <input
                                type="number"
                                value={filters.maxStipend}
                                onChange={(e) => handleFilterChange('maxStipend', e.target.value)}
                                placeholder="50000"
                                className="w-full px-3 py-2 text-sm transition-all bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                    {loading ? (
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="p-4 bg-white border border-gray-200 rounded-lg">
                                    <div className="h-48 bg-gray-100 rounded-md animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            {opportunities.length > 0 ? (
                                opportunities.map((opportunity) => (
                                    <div key={opportunity._id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                                    {opportunity.recruiterId?.companyName || 'TechCorp Solutions'}
                                                </h3>
                                                <p className="text-xs text-gray-600">
                                                    {opportunity.recruiterId?.location || 'Addis Ababa, Ethiopia'}
                                                </p>
                                            </div>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded whitespace-nowrap">
                                                Freelance
                                            </span>
                                        </div>

                                        <h4 className="mb-2 text-base font-semibold text-gray-900">{opportunity.title}</h4>

                                        <p className="mb-3 text-xs leading-relaxed text-gray-600 line-clamp-2">
                                            {opportunity.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {opportunity.requiredSkills?.slice(0, 3).map((skill, index) => (
                                                <span key={index} className="px-2 py-1 text-xs font-medium text-indigo-600 rounded bg-indigo-50">
                                                    {skill}
                                                </span>
                                            ))}
                                            {opportunity.requiredSkills?.length > 3 && (
                                                <span className="text-xs text-gray-500">
                                                    +{opportunity.requiredSkills.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        <div className="pt-3 mt-3 border-t border-gray-100">
                                            <Link to={`/opportunity/${opportunity._id}`}>
                                                <button className="w-full px-4 py-2 text-sm font-medium text-white transition-colors bg-indigo-600 rounded-md hover:bg-indigo-700">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 py-16 text-center">
                                    <div className="mb-4 text-6xl">🔍</div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-700">No freelance opportunities found</h3>
                                    <p className="text-sm text-gray-600">Try adjusting your filters or check back later for new opportunities</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreelanceOpportunities;
