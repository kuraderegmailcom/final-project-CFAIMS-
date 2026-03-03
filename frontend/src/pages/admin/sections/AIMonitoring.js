import React from 'react';
import './AIMonitoring.css';

const AIMonitoring = () => {
    return (
        <div className="ai-monitoring">
            <h1 className="section-title">AI Monitoring</h1>
            <div className="ai-stats-grid">
                <div className="ai-stat-card">
                    <h3>AI Recommendations Generated</h3>
                    <p className="ai-stat-number">0</p>
                    <p className="ai-stat-desc">Total recommendations made</p>
                </div>
                <div className="ai-stat-card">
                    <h3>Resume Analysis</h3>
                    <p className="ai-stat-number">0</p>
                    <p className="ai-stat-desc">CVs processed</p>
                </div>
                <div className="ai-stat-card">
                    <h3>Match Accuracy</h3>
                    <p className="ai-stat-number">0%</p>
                    <p className="ai-stat-desc">Average match score</p>
                </div>
            </div>
            <div className="ai-info">
                <p>AI monitoring features will be available soon. Track AI performance, recommendation accuracy, and system health.</p>
            </div>
        </div>
    );
};

export default AIMonitoring;
