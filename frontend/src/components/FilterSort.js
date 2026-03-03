import React from 'react';
import { useTranslation } from 'react-i18next';

const FilterSort = ({ filters, setFilters, onSearch }) => {
    const { t } = useTranslation();

    const handleChange = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-soft mb-6">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.type') || 'Type'}
                    </label>
                    <select
                        value={filters.type || ''}
                        onChange={(e) => handleChange('type', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">All Types</option>
                        <option value="internship">Internship</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.sort') || 'Sort By'}
                    </label>
                    <select
                        value={filters.sort || 'newest'}
                        onChange={(e) => handleChange('sort', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                        {t('filter.minStipend') || 'Min Stipend (ETB)'}
                    </label>
                    <input
                        type="number"
                        value={filters.minStipend || ''}
                        onChange={(e) => handleChange('minStipend', e.target.value)}
                        placeholder="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('filter.maxStipend') || 'Max Stipend (ETB)'}
                    </label>
                    <input
                        type="number"
                        value={filters.maxStipend || ''}
                        onChange={(e) => handleChange('maxStipend', e.target.value)}
                        placeholder="50000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <button
                onClick={onSearch}
                className="mt-4 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
                {t('filter.search') || 'Apply Filters'}
            </button>
        </div>
    );
};

export default FilterSort;
