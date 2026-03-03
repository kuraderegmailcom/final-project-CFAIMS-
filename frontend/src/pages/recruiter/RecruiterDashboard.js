import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import Overview from './sections/Overview';
import ManagePosts from './sections/ManagePosts';
import ApplicationsReview from './sections/ApplicationsReview';
import AssignTasks from './sections/AssignTasks';
import FeedbackRatings from './sections/FeedbackRatings';
import Messages from './sections/Messages';
import ProfileSettings from './sections/ProfileSettings';
import './RecruiterDashboard.css';

const RecruiterDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [opportunities, setOpportunities] = useState([]);
    const [applications, setApplications] = useState([]);
    const [selectedOpp, setSelectedOpp] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchOpportunities();
    }, []);

    const fetchOpportunities = async () => {
        try {
            const res = await api.get('/opportunities/my/posts');
            setOpportunities(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchApplications = async (oppId) => {
        try {
            const res = await api.get(`/applications/opportunity/${oppId}`);
            setApplications(res.data.data);
            setSelectedOpp(oppId);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="recruiter-dashboard">
            <div className="recruiter-sidebar">
                <div className="recruiter-sidebar-header">
                    <h2>StudentHub</h2>
                    <p>Recruiter Dashboard</p>
                </div>
                <nav className="recruiter-nav">
                    {[
                        { id: 'overview', label: 'Overview', icon: '📊' },
                        { id: 'posts', label: 'Manage Posts', icon: '📝' },
                        { id: 'applications', label: 'Applications Review', icon: '👥' },
                        { id: 'tasks', label: 'Assign Tasks', icon: '✅' },
                        { id: 'feedback', label: 'Feedback & Ratings', icon: '⭐' },
                        { id: 'messages', label: 'Messages', icon: '💬' },
                        { id: 'profile', label: 'Profile Settings', icon: '👤' }
                    ].map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`recruiter-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
                <button onClick={handleLogout} className="recruiter-logout-btn">
                    Logout
                </button>
            </div>

            <div className="recruiter-content">
                {activeTab === 'overview' && <Overview opportunities={opportunities} />}
                {activeTab === 'posts' && <ManagePosts opportunities={opportunities} fetchOpportunities={fetchOpportunities} fetchApplications={fetchApplications} />}
                {activeTab === 'applications' && <ApplicationsReview applications={applications} selectedOpp={selectedOpp} fetchApplications={fetchApplications} />}
                {activeTab === 'tasks' && <AssignTasks />}
                {activeTab === 'feedback' && <FeedbackRatings />}
                {activeTab === 'messages' && <Messages />}
                {activeTab === 'profile' && <ProfileSettings />}
            </div>
        </div>
    );
};

export default RecruiterDashboard;
