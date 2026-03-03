import React from 'react';
import './PlatformAnalytics.css';

const PlatformAnalytics = ({ analytics }) => {
    return (
        <div className="platform-analytics">
            <h1 className="section-title">Platform Analytics</h1>
            <div className="analytics-grid">
                <div className="analytics-card">
                    <h3>Total Students</h3>
                    <p className="stat-number primary">{analytics.totalStudents || 0}</p>
                </div>
                <div className="analytics-card">
                    <h3>Total Recruiters</h3>
                    <p className="stat-number green">{analytics.totalRecruiters || 0}</p>
                </div>
                <div className="analytics-card">
                    <h3>Total Opportunities</h3>
                    <p className="stat-number blue">{analytics.totalOpportunities || 0}</p>
                </div>
                <div className="analytics-card">
                    <h3>Total Applications</h3>
                    <p className="stat-number purple">{analytics.totalApplications || 0}</p>
                </div>
                <div className="analytics-card">
                    <h3>Active Opportunities</h3>
                    <p className="stat-number orange">{analytics.activeOpportunities || 0}</p>
                </div>
                <div className="analytics-card">
                    <h3>Pending Recruiters</h3>
                    <p className="stat-number red">{analytics.pendingRecruiters || 0}</p>
                </div>
            </div>
        </div>
    );
};

export default PlatformAnalytics;
