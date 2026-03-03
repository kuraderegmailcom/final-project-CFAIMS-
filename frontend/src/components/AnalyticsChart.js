import React from 'react';

export const SkillGrowthChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="text-gray-500 text-center py-8">No skill data available</div>;
    }

    const maxLevel = Math.max(...data.map(d => d.level || 0), 5);

    return (
        <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>
            <div className="space-y-4">
                {data.map((skill, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                            <span className="text-sm text-gray-500">{skill.tasksCompleted || 0} tasks</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-primary h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${((skill.level || 0) / maxLevel) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const MonthlyGrowthChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="text-gray-500 text-center py-8">No growth data available</div>;
    }

    const maxValue = Math.max(...data.map(d => Math.max(d.students || 0, d.opportunities || 0)), 10);

    return (
        <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Monthly Growth</h3>
            <div className="flex items-end justify-between h-64 gap-2">
                {data.map((month, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                        <div className="w-full flex gap-1 items-end h-48">
                            <div
                                className="flex-1 bg-primary rounded-t transition-all duration-500 hover:bg-primary/80"
                                style={{ height: `${(month.students / maxValue) * 100}%` }}
                                title={`${month.students} students`}
                            ></div>
                            <div
                                className="flex-1 bg-secondary rounded-t transition-all duration-500 hover:bg-secondary/80"
                                style={{ height: `${(month.opportunities / maxValue) * 100}%` }}
                                title={`${month.opportunities} opportunities`}
                            ></div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{month.month}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm text-gray-600">Students</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary rounded"></div>
                    <span className="text-sm text-gray-600">Opportunities</span>
                </div>
            </div>
        </div>
    );
};
