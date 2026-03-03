import React from 'react';
import './Overview.css';

const Overview = ({ applications, tasks, recommendations }) => {
    return (
        <div className="overview">
            <div className="overview-grid">
                <div className="overview-card">
                    <h3>Total Applications</h3>
                    <p className="overview-stat primary">{applications.length}</p>
                </div>
                <div className="overview-card">
                    <h3>Active Tasks</h3>
                    <p className="overview-stat green">{tasks.filter(t => t.status !== 'completed').length}</p>
                </div>
                <div className="overview-card">
                    <h3>Completed Tasks</h3>
                    <p className="overview-stat blue">{tasks.filter(t => t.status === 'completed').length}</p>
                </div>
                <div className="overview-card">
                    <h3>AI Matches</h3>
                    <p className="overview-stat purple">{recommendations.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
