import { useTranslation } from 'react-i18next';

const FilterSort = ({ filters, setFilters, onSearch, onFilterChange, showDuration = true }) => {
    const { t } = useTranslation();

    const handleChange = (field, value) => {
        const newFilters = { ...filters, [field]: value };

        if (setFilters) {
            setFilters(newFilters);
        }

        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch();
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid md:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.skill') || 'Skill'}
                    </label>
                    <input
                        type="text"
                        value={filters.skill || ''}
                        onChange={(e) => handleChange('skill', e.target.value)}
                        placeholder="e.g. React, Python"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.location') || 'Location'}
                    </label>
                    <input
                        type="text"
                        value={filters.location || ''}
                        onChange={(e) => handleChange('location', e.target.value)}
                        placeholder="e.g. Addis Ababa"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                {showDuration && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Duration
                        </label>
                        <select
                            value={filters.duration || ''}
                            onChange={(e) => handleChange('duration', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <option value="">Any Duration</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6+ months">6+ months</option>
                        </select>
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.sort') || 'Sort By'}
                    </label>
                    <select
                        value={filters.sort || 'newest'}
                        onChange={(e) => handleChange('sort', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="newest">Newest</option>
                        <option value="stipend">Highest Stipend</option>
                        <option value="match">Best Match</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.minStipend') || 'Min Stipend'}
                    </label>
                    <input
                        type="number"
                        value={filters.minStipend || ''}
                        onChange={(e) => handleChange('minStipend', e.target.value)}
                        placeholder="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.maxStipend') || 'Max Stipend'}
                    </label>
                    <input
                        type="number"
                        value={filters.maxStipend || ''}
                        onChange={(e) => handleChange('maxStipend', e.target.value)}
                        placeholder="50000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
            </div>

            {onSearch && (
                <button
                    onClick={handleSearch}
                    className="mt-4 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                    {t('filter.search') || 'Apply Filters'}
                </button>
            )}
        </div>
    );
};

export default FilterSort;
