import React from 'react';
import api from '../../../utils/api';
import './MyApplications.css';

const MyApplications = ({ applications, opportunities, fetchApplications }) => {
    const applyToOpportunity = async (opportunityId) => {
        try {
            await api.post('/applications', { opportunityId, coverLetter: 'I am interested in this opportunity.' });
            alert('Application submitted successfully!');
            fetchApplications();
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to apply');
        }
    };

    return (
        <div className="my-applications">
            <h2 className="section-title">My Applications</h2>
            <div className="applications-grid">
                {applications.map(app => (
                    <div key={app._id} className="application-card">
                        <div className="application-content">
                            <div>
                                <h3>{app.opportunityId?.title}</h3>
                                <p className="company">{app.opportunityId?.recruiterId?.companyName}</p>
                                <p className="applied-date">Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
                            </div>
                            <span className={`status-badge status-${app.status}`}>
                                {app.status.toUpperCase()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="section-title mt-8">Browse Opportunities</h2>
            <div className="opportunities-grid">
                {opportunities.map(opp => (
                    <div key={opp._id} className="opportunity-card">
                        <div className="opportunity-content">
                            <div>
                                <h3>{opp.title}</h3>
                                <p className="company">{opp.recruiterId?.companyName}</p>
                                <p className="description">{opp.description}</p>
                                <div className="skills-list">
                                    {opp.requiredSkills?.map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                                <div className="opportunity-meta">
                                    <span>💰 {opp.stipend ? `${opp.stipend} ETB` : 'Unpaid'}</span>
                                    <span>📍 {opp.location || 'Remote'}</span>
                                    <span>⏱️ {opp.duration}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => applyToOpportunity(opp._id)}
                                className="btn-apply"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApplications;
