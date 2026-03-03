import React from 'react';
import api from '../../../utils/api';
import './AllJobPosts.css';

const AllJobPosts = ({ opportunities, fetchOpportunities }) => {
    const deleteOpportunity = async (oppId) => {
        if (!window.confirm('Are you sure you want to delete this opportunity?')) return;
        try {
            await api.delete(`/admin/opportunities/${oppId}`);
            alert('Opportunity deleted!');
            fetchOpportunities();
        } catch (err) {
            alert('Failed to delete opportunity');
        }
    };

    return (
        <div className="all-job-posts">
            <h1 className="section-title">All Job Posts</h1>
            <div className="job-posts-grid">
                {opportunities.map(opp => (
                    <div key={opp._id} className="job-post-card">
                        <div className="job-post-content">
                            <div className="job-post-info">
                                <h3>{opp.title}</h3>
                                <p className="company-name">{opp.recruiterId?.companyName}</p>
                                <p className="job-description">{opp.description}</p>
                                <div className="job-meta">
                                    <span>👥 {opp.applicantsCount} applicants</span>
                                    <span>📍 {opp.location || 'Remote'}</span>
                                    <span>💰 {opp.stipend} ETB</span>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteOpportunity(opp._id)}
                                className="btn-delete"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllJobPosts;
