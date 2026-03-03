import React from 'react';
import './ReportsModeration.css';

const ReportsModeration = ({ analytics }) => {
    return (
        <div className="reports-moderation">
            <h1 className="section-title">Reports & Moderation</h1>
            <div className="reports-grid">
                <div className="report-card">
                    <h3>Application Success Rate</h3>
                    <div className="report-stat">
                        {analytics.totalApplications > 0
                            ? Math.round((analytics.totalApplications / analytics.totalOpportunities) * 100)
                            : 0}%
                    </div>
                    <p>Average applications per opportunity</p>
                </div>
                <div className="report-card">
                    <h3>Platform Growth</h3>
                    <div className="report-stat green">
                        {(analytics.totalStudents || 0) + (analytics.totalRecruiters || 0)}
                    </div>
                    <p>Total registered users</p>
                </div>
            </div>
            <div className="activity-section">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                    <div className="activity-item">
                        <div>
                            <p className="activity-title">New Students Registered</p>
                            <p className="activity-subtitle">Last 7 days</p>
                        </div>
                        <span className="activity-count primary">{analytics.totalStudents || 0}</span>
                    </div>
                    <div className="activity-item">
                        <div>
                            <p className="activity-title">Active Opportunities</p>
                            <p className="activity-subtitle">Currently open</p>
                        </div>
                        <span className="activity-count green">{analytics.activeOpportunities || 0}</span>
                    </div>
                    <div className="activity-item">
                        <div>
                            <p className="activity-title">Pending Approvals</p>
                            <p className="activity-subtitle">Recruiters awaiting approval</p>
                        </div>
                        <span className="activity-count orange">{analytics.pendingRecruiters || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsModeration;
