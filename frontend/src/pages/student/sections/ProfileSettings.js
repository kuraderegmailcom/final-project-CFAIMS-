import React from 'react';
import './ProfileSettings.css';

const ProfileSettings = ({ profile }) => {
    return (
        <div className="profile-settings">
            <h2 className="section-title">Profile Settings</h2>
            <div className="profile-card">
                <div className="profile-field">
                    <label>Full Name</label>
                    <p>{profile?.fullName}</p>
                </div>
                <div className="profile-field">
                    <label>University</label>
                    <p>{profile?.university || 'Not set'}</p>
                </div>
                <div className="profile-field">
                    <label>Major</label>
                    <p>{profile?.major || 'Not set'}</p>
                </div>
                <div className="profile-field">
                    <label>Skills</label>
                    <div className="skills-list">
                        {profile?.extractedSkills?.map((skill, idx) => (
                            <span key={idx} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
