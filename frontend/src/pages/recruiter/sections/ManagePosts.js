import React, { useState } from 'react';
import api from '../../../utils/api';
import './ManagePosts.css';

const ManagePosts = ({ opportunities, fetchOpportunities, fetchApplications }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        type: 'internship',
        description: '',
        requiredSkills: '',
        duration: '',
        stipend: '',
        location: '',
        isRemote: false
    });

    const handleCreateOpportunity = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                requiredSkills: formData.requiredSkills.split(',').map(s => s.trim()),
                stipend: formData.stipend ? Number(formData.stipend) : 0
            };
            await api.post('/opportunities', payload);
            alert('Opportunity created successfully!');
            setShowCreateModal(false);
            fetchOpportunities();
            setFormData({
                title: '',
                type: 'internship',
                description: '',
                requiredSkills: '',
                duration: '',
                stipend: '',
                location: '',
                isRemote: false
            });
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to create opportunity');
        }
    };

    return (
        <div className="manage-posts">
            <div className="manage-posts-header">
                <h1 className="section-title">Manage Posts</h1>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="btn-create"
                >
                    + Create New Post
                </button>
            </div>
            <div className="posts-grid">
                {opportunities.map(opp => (
                    <div key={opp._id} className="post-card">
                        <div className="post-content">
                            <div>
                                <h3>{opp.title}</h3>
                                <p className="post-description">{opp.description}</p>
                                <div className="post-meta">
                                    <span>👥 {opp.applicantsCount} applicants</span>
                                    <span>📍 {opp.location || 'Remote'}</span>
                                    <span>💰 {opp.stipend} ETB</span>
                                </div>
                            </div>
                            <div className="post-actions">
                                <button
                                    onClick={() => fetchApplications(opp._id)}
                                    className="btn-view"
                                >
                                    View Applications
                                </button>
                                <span className={`status-badge ${opp.status === 'active' ? 'status-active' : 'status-inactive'}`}>
                                    {opp.status.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showCreateModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Create New Opportunity</h2>
                        <form onSubmit={handleCreateOpportunity} className="create-form">
                            <div className="form-field">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label>Type</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="internship">Internship</option>
                                    <option value="freelance">Freelance</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label>Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label>Required Skills (comma-separated)</label>
                                <input
                                    type="text"
                                    value={formData.requiredSkills}
                                    onChange={(e) => setFormData({ ...formData, requiredSkills: e.target.value })}
                                    placeholder="React, Node.js, MongoDB"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-field">
                                    <label>Duration</label>
                                    <input
                                        type="text"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        placeholder="3 months"
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Stipend (ETB)</label>
                                    <input
                                        type="number"
                                        value={formData.stipend}
                                        onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-field">
                                <label>Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                            <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                    checked={formData.isRemote}
                                    onChange={(e) => setFormData({ ...formData, isRemote: e.target.checked })}
                                />
                                <label>Remote Position</label>
                            </div>
                            <div className="form-buttons">
                                <button type="submit" className="btn-submit">
                                    Create Opportunity
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateModal(false)}
                                    className="btn-cancel"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagePosts;
