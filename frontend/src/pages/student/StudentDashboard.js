import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import Overview from './sections/Overview';
import MyApplications from './sections/MyApplications';
import MyTasks from './sections/MyTasks';
import AIRecommendations from './sections/AIRecommendations';
import SkillProgress from './sections/SkillProgress';
import Messages from './sections/Messages';
import ProfileSettings from './sections/ProfileSettings';
import NotificationPanel from './sections/NotificationPanel';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [profile, setProfile] = useState(null);
    const [opportunities, setOpportunities] = useState([]);
    const [applications, setApplications] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
        fetchOpportunities();
        fetchApplications();
        fetchTasks();
        fetchRecommendations();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await api.get('/students/profile');
            setProfile(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchOpportunities = async () => {
        try {
            const res = await api.get('/opportunities');
            setOpportunities(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchApplications = async () => {
        try {
            const res = await api.get('/applications/my');
            setApplications(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchTasks = async () => {
        try {
            const res = await api.get('/tasks/my');
            setTasks(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchRecommendations = async () => {
        try {
            const res = await api.get('/ai/recommendations');
            setRecommendations(res.data.data);
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
        <div className="student-dashboard">
            <div className="student-sidebar">
                <div className="student-sidebar-header">
                    <h2>StudentHub</h2>
                    <p>Student Dashboard</p>
                </div>
                <nav className="student-nav">
                    {[
                        { id: 'overview', label: 'Overview', icon: '📊' },
                        { id: 'applications', label: 'My Applications', icon: '📝' },
                        { id: 'tasks', label: 'My Tasks', icon: '✅' },
                        { id: 'recommendations', label: 'AI Recommendations', icon: '🤖' },
                        { id: 'skills', label: 'Skill Progress', icon: '📈' },
                        { id: 'messages', label: 'Messages', icon: '💬' },
                        { id: 'profile', label: 'Profile Settings', icon: '👤' }
                    ].map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`student-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
                <button onClick={handleLogout} className="student-logout-btn">
                    Logout
                </button>
            </div>

            <div className="student-content">
                <div className="student-header">
                    <h1>Welcome, {profile?.fullName || 'Student'}!</h1>
                    <button
                        className="notification-btn"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        🔔 Notifications
                    </button>
                </div>

                {showNotifications && <NotificationPanel />}

                {activeTab === 'overview' && <Overview applications={applications} tasks={tasks} recommendations={recommendations} />}
                {activeTab === 'applications' && <MyApplications applications={applications} opportunities={opportunities} fetchApplications={fetchApplications} />}
                {activeTab === 'tasks' && <MyTasks tasks={tasks} />}
                {activeTab === 'recommendations' && <AIRecommendations recommendations={recommendations} fetchApplications={fetchApplications} />}
                {activeTab === 'skills' && <SkillProgress profile={profile} />}
                {activeTab === 'messages' && <Messages />}
                {activeTab === 'profile' && <ProfileSettings profile={profile} />}
            </div>
        </div>
    );
};

export default StudentDashboard;
