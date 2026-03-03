import React from 'react';
import api from '../../../utils/api';
import './AIRecommendations.css';

const AIRecommendations = ({ recommendations, fetchApplications }) => {
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
        <div className="ai-recommendations">
            <h2 className="section-title">AI Recommendations</h2>
            <div className="recommendations-grid">
                {recommendations.map((rec, idx) => (
                    <div key={idx} className="recommendation-card">
                        <div className="recommendation-content">
                            <div className="recommendation-info">
                                <div className="recommendation-header">
                                    <h3>{rec.opportunity?.title}</h3>
                                    <span className="match-score">
                                        {rec.matchScore}% Match
                                    </span>
                                </div>
                                <p className="company">{rec.opportunity?.recruiterId?.companyName}</p>

                                <div className="skills-section">
                                    <p className="skills-label">Matching Skills:</p>
                                    <div className="skills-list">
                                        {rec.matchingSkills?.map((skill, i) => (
                                            <span key={i} className="skill-tag matching">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {rec.missingSkills?.length > 0 && (
                                    <div className="skills-section">
                                        <p className="skills-label">Skills to Learn:</p>
                                        <div className="skills-list">
                                            {rec.missingSkills.map((skill, i) => (
                                                <span key={i} className="skill-tag missing">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => applyToOpportunity(rec.opportunity._id)}
                                className="btn-apply"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIRecommendations;
