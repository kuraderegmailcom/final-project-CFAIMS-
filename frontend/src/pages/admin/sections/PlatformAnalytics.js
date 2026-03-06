import React, { useState, useEffect } from 'react';
import './PlatformAnalytics.css';

const PlatformAnalytics = ({ analytics }) => {
    const [timeRange, setTimeRange] = useState('30d');
    const [recruitmentFunnel, setRecruitmentFunnel] = useState([]);
    const [taskHealth, setTaskHealth] = useState({});
    const [skillDemandSupply, setSkillDemandSupply] = useState({});
    const [platformGrowth, setPlatformGrowth] = useState([]);
    const [opportunityDistribution, setOpportunityDistribution] = useState({});

    useEffect(() => {
        generateAnalyticsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRange]);

    const generateAnalyticsData = () => {
        // 1. Recruitment Funnel - Lifecycle Tracking
        setRecruitmentFunnel([
            { stage: 'Applications Received', count: 1847, percentage: 100, color: '#6366f1' },
            { stage: 'Profile Reviewed', count: 1456, percentage: 78.8, color: '#8b5cf6' },
            { stage: 'Shortlisted', count: 892, percentage: 48.3, color: '#a855f7' },
            { stage: 'Interview Scheduled', count: 423, percentage: 22.9, color: '#c084fc' },
            { stage: 'Final Round', count: 187, percentage: 10.1, color: '#d8b4fe' },
            { stage: 'Offer Extended', count: 94, percentage: 5.1, color: '#e9d5ff' },
            { stage: 'Accepted', count: 76, percentage: 4.1, color: '#4ecdc4' }
        ]);

        // 2. Task Completion & Health - Workflow Management
        setTaskHealth({
            inProgress: 234,
            underReview: 89,
            completed: 567,
            overdue: 23,
            total: 913,
            completionRate: 62.1,
            avgCompletionTime: 4.2,
            onTimeRate: 87.3
        });

        // 3. Skill Demand vs Supply - Skill Tracking
        setSkillDemandSupply({
            skills: [
                'Web Development',
                'Mobile Development',
                'UI/UX Design',
                'Data Analysis',
                'Content Writing',
                'Digital Marketing',
                'Project Management',
                'Graphic Design'
            ],
            demand: [85, 72, 68, 78, 45, 52, 38, 61],
            supply: [92, 58, 74, 65, 88, 71, 42, 79],
            categories: [
                { name: 'Development', value: 45, stipend: 125000 },
                { name: 'Design', value: 28, stipend: 89000 },
                { name: 'Marketing', value: 15, stipend: 67000 },
                { name: 'Writing', value: 12, stipend: 45000 }
            ]
        });

        // 4. Platform Growth & Engagement - Area Chart
        const growth = Array.from({ length: 30 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (29 - i));
            return {
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                postings: Math.floor(Math.random() * 50) + 80 + i * 2,
                applications: Math.floor(Math.random() * 100) + 150 + i * 3,
                matches: Math.floor(Math.random() * 30) + 40 + i * 1.5
            };
        });
        setPlatformGrowth(growth);

        // 5. Internship vs Freelance Distribution
        setOpportunityDistribution({
            internships: {
                count: 342,
                percentage: 58.4,
                avgStipend: 8500,
                avgDuration: 3.5
            },
            freelance: {
                count: 244,
                percentage: 41.6,
                avgPayment: 12000,
                avgDuration: 1.2
            },
            byCategory: [
                { category: 'Technology', internship: 145, freelance: 98 },
                { category: 'Design', internship: 87, freelance: 76 },
                { category: 'Marketing', internship: 65, freelance: 42 },
                { category: 'Content', internship: 45, freelance: 28 }
            ]
        });
    };

    const getMaxValue = (arr) => Math.max(...arr);

    return (
        <div className="platform-analytics-pro">
            {/* Header */}
            <div className="analytics-header">
                <div className="header-left">
                    <h1 className="analytics-title">Platform Analytics</h1>
                    <p className="analytics-subtitle">Recruitment lifecycle and performance insights</p>
                </div>
                <div className="header-controls">
                    <select
                        className="time-range-selector"
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                    >
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                        <option value="90d">Last 90 Days</option>
                        <option value="1y">Last Year</option>
                    </select>
                    <button className="export-btn">
                        <span className="export-icon">↓</span>
                        Export Report
                    </button>
                </div>
            </div>

            {/* Key Metrics Bar */}
            <div className="key-metrics-bar">
                <div className="metric-item">
                    <span className="metric-label">Total Applications</span>
                    <span className="metric-value">{(recruitmentFunnel[0]?.count || 0).toLocaleString()}</span>
                    <span className="metric-change positive">+12.4%</span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">Conversion Rate</span>
                    <span className="metric-value">{(recruitmentFunnel[recruitmentFunnel.length - 1]?.percentage || 0)}%</span>
                    <span className="metric-change negative">-1.2%</span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">Active Tasks</span>
                    <span className="metric-value">{taskHealth.total || 0}</span>
                    <span className="metric-change positive">+8.7%</span>
                </div>
                <div className="metric-item">
                    <span className="metric-label">Skill Match Rate</span>
                    <span className="metric-value">78.3%</span>
                    <span className="metric-change positive">+5.1%</span>
                </div>
            </div>

            {/* Main Analytics Grid */}
            <div className="analytics-grid-pro">

                {/* 1. Recruitment Funnel - Vertical Funnel Chart */}
                <div className="analytics-card funnel-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Recruitment Funnel</h3>
                            <p className="card-subtitle">Application lifecycle tracking</p>
                        </div>
                        <div className="funnel-stats">
                            <span className="stat-badge">
                                <strong>{(recruitmentFunnel[recruitmentFunnel.length - 1]?.percentage || 0)}%</strong> Success Rate
                            </span>
                        </div>
                    </div>
                    <div className="funnel-container">
                        {recruitmentFunnel.length > 0 && recruitmentFunnel.map((stage, index) => {
                            const dropoff = index > 0 ? (recruitmentFunnel[index - 1].percentage - stage.percentage).toFixed(1) : 0;
                            return (
                                <div key={index} className="funnel-stage">
                                    <div className="funnel-stage-bar" style={{ width: `${stage.percentage}%`, background: stage.color }}>
                                        <div className="funnel-stage-content">
                                            <span className="stage-name">{stage.stage}</span>
                                            <span className="stage-count">{stage.count.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <div className="funnel-stage-meta">
                                        <span className="stage-percentage">{stage.percentage}%</span>
                                        {dropoff > 0 && <span className="stage-dropoff">-{dropoff}%</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="funnel-insights">
                        <div className="insight-box warning">
                            <span className="insight-icon">⚠</span>
                            <div>
                                <strong>Bottleneck Detected</strong>
                                <p>48% drop-off at shortlisting stage - Review AI matching criteria</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Task Completion & Health - Semi-Doughnut Gauge */}
                <div className="analytics-card task-health-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Task Completion Health</h3>
                            <p className="card-subtitle">Workflow management overview</p>
                        </div>
                    </div>
                    <div className="gauge-container">
                        <svg viewBox="0 0 200 120" className="semi-doughnut">
                            <defs>
                                <linearGradient id="completedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#059669" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 30 100 A 70 70 0 0 1 170 100"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="20"
                                strokeLinecap="round"
                            />
                            <path
                                d="M 30 100 A 70 70 0 0 1 170 100"
                                fill="none"
                                stroke="url(#completedGrad)"
                                strokeWidth="20"
                                strokeDasharray={`${((taskHealth.completed || 0) / (taskHealth.total || 1)) * 220} 220`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="gauge-center">
                            <div className="gauge-value">{taskHealth.completionRate || 0}%</div>
                            <div className="gauge-label">Completion Rate</div>
                        </div>
                    </div>
                    <div className="task-breakdown">
                        <div className="task-stat completed">
                            <div className="stat-dot"></div>
                            <span className="stat-name">Completed</span>
                            <span className="stat-count">{taskHealth.completed || 0}</span>
                        </div>
                        <div className="task-stat review">
                            <div className="stat-dot"></div>
                            <span className="stat-name">Under Review</span>
                            <span className="stat-count">{taskHealth.underReview || 0}</span>
                        </div>
                        <div className="task-stat progress">
                            <div className="stat-dot"></div>
                            <span className="stat-name">In Progress</span>
                            <span className="stat-count">{taskHealth.inProgress || 0}</span>
                        </div>
                        <div className="task-stat overdue">
                            <div className="stat-dot"></div>
                            <span className="stat-name">Overdue</span>
                            <span className="stat-count">{taskHealth.overdue || 0}</span>
                        </div>
                    </div>
                    <div className="task-metrics">
                        <div className="metric-row">
                            <span>Avg. Completion Time</span>
                            <strong>{taskHealth.avgCompletionTime || 0} days</strong>
                        </div>
                        <div className="metric-row">
                            <span>On-Time Rate</span>
                            <strong>{taskHealth.onTimeRate || 0}%</strong>
                        </div>
                    </div>
                </div>

                {/* 3. Skill Demand vs Supply - Radar Chart */}
                <div className="analytics-card skill-radar-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Skill Demand vs Supply</h3>
                            <p className="card-subtitle">Market alignment analysis</p>
                        </div>
                        <div className="radar-legend">
                            <span className="legend-item demand">
                                <i className="legend-line"></i>Recruiter Demand
                            </span>
                            <span className="legend-item supply">
                                <i className="legend-line"></i>Student Supply
                            </span>
                        </div>
                    </div>
                    <div className="radar-chart-container">
                        <svg viewBox="0 0 300 300" className="radar-chart">
                            {/* Grid circles */}
                            {[20, 40, 60, 80, 100].map((r, i) => (
                                <circle
                                    key={i}
                                    cx="150"
                                    cy="150"
                                    r={r}
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="1"
                                />
                            ))}
                            {/* Axis lines */}
                            {(skillDemandSupply.skills || []).map((_, i) => {
                                const angle = (i * 360) / (skillDemandSupply.skills || []).length - 90;
                                const rad = (angle * Math.PI) / 180;
                                const x = 150 + 100 * Math.cos(rad);
                                const y = 150 + 100 * Math.sin(rad);
                                return (
                                    <line
                                        key={i}
                                        x1="150"
                                        y1="150"
                                        x2={x}
                                        y2={y}
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                    />
                                );
                            })}
                            {/* Demand polygon */}
                            {(skillDemandSupply.demand || []).length > 0 && (
                                <polygon
                                    points={(skillDemandSupply.demand || []).map((val, i) => {
                                        const angle = (i * 360) / (skillDemandSupply.skills || []).length - 90;
                                        const rad = (angle * Math.PI) / 180;
                                        const x = 150 + (val / 100) * 100 * Math.cos(rad);
                                        const y = 150 + (val / 100) * 100 * Math.sin(rad);
                                        return `${x},${y}`;
                                    }).join(' ')}
                                    fill="rgba(239, 68, 68, 0.2)"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                />
                            )}
                            {/* Supply polygon */}
                            {(skillDemandSupply.supply || []).length > 0 && (
                                <polygon
                                    points={(skillDemandSupply.supply || []).map((val, i) => {
                                        const angle = (i * 360) / (skillDemandSupply.skills || []).length - 90;
                                        const rad = (angle * Math.PI) / 180;
                                        const x = 150 + (val / 100) * 100 * Math.cos(rad);
                                        const y = 150 + (val / 100) * 100 * Math.sin(rad);
                                        return `${x},${y}`;
                                    }).join(' ')}
                                    fill="rgba(59, 130, 246, 0.2)"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                />
                            )}
                            {/* Labels */}
                            {(skillDemandSupply.skills || []).map((skill, i) => {
                                const angle = (i * 360) / (skillDemandSupply.skills || []).length - 90;
                                const rad = (angle * Math.PI) / 180;
                                const x = 150 + 120 * Math.cos(rad);
                                const y = 150 + 120 * Math.sin(rad);
                                return (
                                    <text
                                        key={i}
                                        x={x}
                                        y={y}
                                        textAnchor="middle"
                                        fontSize="10"
                                        fill="#6b7280"
                                    >
                                        {skill}
                                    </text>
                                );
                            })}
                        </svg>
                    </div>
                    <div className="skill-treemap">
                        <h4 className="treemap-title">Skill Categories by Volume</h4>
                        <div className="treemap-grid">
                            {(skillDemandSupply.categories || []).map((cat, i) => (
                                <div
                                    key={i}
                                    className="treemap-cell"
                                    style={{
                                        flex: cat.value,
                                        background: `linear-gradient(135deg, ${['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'][i]} 0%, ${['#4f46e5', '#7c3aed', '#9333ea', '#a855f7'][i]} 100%)`
                                    }}
                                >
                                    <span className="cell-name">{cat.name}</span>
                                    <span className="cell-value">{cat.value}%</span>
                                    <span className="cell-stipend">₹{(cat.stipend / 1000).toFixed(0)}K avg</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Platform Growth - Smooth Area Chart */}
                <div className="analytics-card growth-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Platform Growth & Engagement</h3>
                            <p className="card-subtitle">30-day activity trends</p>
                        </div>
                        <div className="growth-legend">
                            <span className="legend-item postings">
                                <i className="legend-dot"></i>Job Postings
                            </span>
                            <span className="legend-item applications">
                                <i className="legend-dot"></i>Applications
                            </span>
                            <span className="legend-item matches">
                                <i className="legend-dot"></i>Successful Matches
                            </span>
                        </div>
                    </div>
                    <div className="area-chart-container">
                        <div className="chart-y-axis">
                            {[300, 200, 100, 0].map(val => (
                                <span key={val} className="y-tick">{val}</span>
                            ))}
                        </div>
                        <div className="area-chart">
                            <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="area-svg">
                                <defs>
                                    <linearGradient id="applicationsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                                    </linearGradient>
                                    <linearGradient id="postingsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
                                    </linearGradient>
                                    <linearGradient id="matchesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                                    </linearGradient>
                                </defs>
                                {/* Applications area */}
                                <path
                                    d={`M 0 200 ${platformGrowth.map((d, i) =>
                                        `L ${(i / (platformGrowth.length - 1)) * 600} ${200 - (d.applications / 300) * 200}`
                                    ).join(' ')} L 600 200 Z`}
                                    fill="url(#applicationsGrad)"
                                />
                                <path
                                    d={`M ${platformGrowth.map((d, i) =>
                                        `${(i / (platformGrowth.length - 1)) * 600},${200 - (d.applications / 300) * 200}`
                                    ).join(' L ')}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                />
                                {/* Postings area */}
                                <path
                                    d={`M 0 200 ${platformGrowth.map((d, i) =>
                                        `L ${(i / (platformGrowth.length - 1)) * 600} ${200 - (d.postings / 300) * 200}`
                                    ).join(' ')} L 600 200 Z`}
                                    fill="url(#postingsGrad)"
                                />
                                <path
                                    d={`M ${platformGrowth.map((d, i) =>
                                        `${(i / (platformGrowth.length - 1)) * 600},${200 - (d.postings / 300) * 200}`
                                    ).join(' L ')}`}
                                    fill="none"
                                    stroke="#8b5cf6"
                                    strokeWidth="2"
                                />
                                {/* Matches area */}
                                <path
                                    d={`M 0 200 ${platformGrowth.map((d, i) =>
                                        `L ${(i / (platformGrowth.length - 1)) * 600} ${200 - (d.matches / 300) * 200}`
                                    ).join(' ')} L 600 200 Z`}
                                    fill="url(#matchesGrad)"
                                />
                                <path
                                    d={`M ${platformGrowth.map((d, i) =>
                                        `${(i / (platformGrowth.length - 1)) * 600},${200 - (d.matches / 300) * 200}`
                                    ).join(' L ')}`}
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div className="chart-x-axis">
                                {platformGrowth.filter((_, i) => i % 5 === 0).map((d, i) => (
                                    <span key={i} className="x-tick">{d.date}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Internship vs Freelance Distribution */}
                <div className="analytics-card distribution-card">
                    <div className="card-header">
                        <div>
                            <h3 className="card-title">Opportunity Distribution</h3>
                            <p className="card-subtitle">Internship vs Freelance breakdown</p>
                        </div>
                    </div>
                    <div className="distribution-overview">
                        <div className="dist-item internship">
                            <div className="dist-icon">💼</div>
                            <div className="dist-content">
                                <span className="dist-label">Internships</span>
                                <span className="dist-value">{opportunityDistribution.internships?.count}</span>
                                <span className="dist-percentage">{opportunityDistribution.internships?.percentage}%</span>
                            </div>
                            <div className="dist-meta">
                                <span>Avg: ₹{opportunityDistribution.internships?.avgStipend}/mo</span>
                                <span>{opportunityDistribution.internships?.avgDuration} months</span>
                            </div>
                        </div>
                        <div className="dist-item freelance">
                            <div className="dist-icon">🎯</div>
                            <div className="dist-content">
                                <span className="dist-label">Freelance Tasks</span>
                                <span className="dist-value">{opportunityDistribution.freelance?.count}</span>
                                <span className="dist-percentage">{opportunityDistribution.freelance?.percentage}%</span>
                            </div>
                            <div className="dist-meta">
                                <span>Avg: ₹{opportunityDistribution.freelance?.avgPayment}/task</span>
                                <span>{opportunityDistribution.freelance?.avgDuration} months</span>
                            </div>
                        </div>
                    </div>
                    <div className="category-comparison">
                        <h4 className="comparison-title">By Category</h4>
                        {opportunityDistribution.byCategory?.map((cat, i) => (
                            <div key={i} className="comparison-row">
                                <span className="cat-name">{cat.category}</span>
                                <div className="cat-bars">
                                    <div className="cat-bar-group">
                                        <div
                                            className="cat-bar internship-bar"
                                            style={{ width: `${(cat.internship / 145) * 100}%` }}
                                            title={`${cat.internship} internships`}
                                        >
                                            <span className="bar-label">{cat.internship}</span>
                                        </div>
                                    </div>
                                    <div className="cat-bar-group">
                                        <div
                                            className="cat-bar freelance-bar"
                                            style={{ width: `${(cat.freelance / 98) * 100}%` }}
                                            title={`${cat.freelance} freelance`}
                                        >
                                            <span className="bar-label">{cat.freelance}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlatformAnalytics;
