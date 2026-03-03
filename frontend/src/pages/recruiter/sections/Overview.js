import React from 'react';
import './Overview.css';

const Overview = ({ opportunities }) => {
    return (
        <div className="overview">
            <h1 className="section-title">Dashboard Overview</h1>
            <div className="overview-grid">
                <div className="overview-card">
                    <h3>Active Posts</h3>
                    <p className="overview-stat primary">
                        {opportunities.filter(o => o.status === 'active').length}
                    </p>
                </div>
                <div className="overview-card">
                    <h3>Total Applicants</h3>
                    <p className="overview-stat green">
                        {opportunities.reduce((sum, o) => sum + (o.applicantsCount || 0), 0)}
                    </p>
                </div>
                <div className="overview-card">
                    <h3>Total Posts</h3>
                    <p className="overview-stat blue">{opportunities.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
