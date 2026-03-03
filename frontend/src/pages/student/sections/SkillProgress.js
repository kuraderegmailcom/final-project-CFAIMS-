import React from 'react';
import './SkillProgress.css';

const SkillProgress = ({ profile }) => {
    return (
        <div className="skill-progress">
            <h2 className="section-title">Skill Progress Analytics</h2>
            <div className="skills-overview">
                <div className="skills-card">
                    <h3>Your Skills</h3>
                    <div className="skills-list">
                        {profile?.extractedSkills?.map((skill, idx) => (
                            <span key={idx} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="progress-info">
                    <p>Track your skill development and progress over time. Complete tasks and projects to improve your skills.</p>
                </div>
            </div>
        </div>
    );
};

export default SkillProgress;
