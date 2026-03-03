import React from 'react';
import api from '../../../utils/api';
import './ApplicationsReview.css';

const ApplicationsReview = ({ applications, selectedOpp, fetchApplications }) => {
    const updateApplicationStatus = async (appId, status) => {
        try {
            await api.put(`/applications/${appId}/status`, { status });
            alert('Application status updated!');
            if (selectedOpp) fetchApplications(selectedOpp);
        } catch (err) {
            alert('Failed to update status');
        }
    };

    return (
        <div className="applications-review">
            <h1 className="section-title">Review Applications</h1>
            {!selectedOpp ? (
                <p className="no-selection">Select an opportunity from Manage Posts to view applications</p>
            ) : (
                <div className="applications-grid">
                    {applications.map(app => (
                        <div key={app._id} className="application-card">
                            <div className="application-content">
                                <div className="application-info">
                                    <h3>{app.studentId?.fullName}</h3>
                                    <p className="university">{app.studentId?.university}</p>
                                    <p className="cover-letter">{app.coverLetter}</p>
                                    <div className="skills-list">
                                        {app.studentId?.extractedSkills?.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="application-actions">
                                    <button
                                        onClick={() => updateApplicationStatus(app._id, 'shortlisted')}
                                        className="btn-action btn-shortlist"
                                    >
                                        Shortlist
                                    </button>
                                    <button
                                        onClick={() => updateApplicationStatus(app._id, 'accepted')}
                                        className="btn-action btn-accept"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => updateApplicationStatus(app._id, 'rejected')}
                                        className="btn-action btn-reject"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApplicationsReview;
