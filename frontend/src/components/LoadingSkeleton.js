import React from 'react';

export const CardSkeleton = () => (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
);

export const TableSkeleton = () => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="animate-pulse">
            <div className="h-12 bg-gray-200"></div>
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-16 bg-gray-100 border-t border-gray-200"></div>
            ))}
        </div>
    </div>
);

export const StatSkeleton = () => (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
    </div>
);
