import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import PlatformAnalytics from './sections/PlatformAnalytics';
import UserManagement from './sections/UserManagement';
import AllJobPosts from './sections/AllJobPosts';
import ReportsModeration from './sections/ReportsModeration';
import AIMonitoring from './sections/AIMonitoring';
import Settings from './sections/Settings';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('analytics');
    const [analytics, setAnalytics] = useState({});
    const [users, setUsers] = useState([]);
    const [opportunities, setOpportunities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAnalytics();
        fetchUsers();
        fetchOpportunities();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const res = await api.get('/admin/analytics');
            setAnalytics(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchUsers = async () => {
        try {
            const res = await api.get('/admin/users');
            setUsers(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchOpportunities = async () => {
        try {
            const res = await api.get('/admin/opportunities');
            setOpportunities(res.data.data);
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
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h2>ETHIO STUDENTHUB</h2>
                    <p>Admin Dashboard</p>
                </div>
                <nav className="admin-nav">
                    {[
                        { id: 'analytics', label: 'Platform Analytics', icon: '📊' },
                        { id: 'users', label: 'User Management', icon: '👥' },
                        { id: 'opportunities', label: 'All Job Posts', icon: '📝' },
                        { id: 'reports', label: 'Reports & Moderation', icon: '📈' },
                        { id: 'ai', label: 'AI Monitoring', icon: '🤖' },
                        { id: 'settings', label: 'Settings', icon: '⚙️' }
                    ].map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`admin-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
                <button onClick={handleLogout} className="admin-logout-btn">
                    Logout
                </button>
            </div>

            <div className="admin-content">
                {activeTab === 'analytics' && <PlatformAnalytics analytics={analytics} />}
                {activeTab === 'users' && <UserManagement users={users} fetchUsers={fetchUsers} />}
                {activeTab === 'opportunities' && <AllJobPosts opportunities={opportunities} fetchOpportunities={fetchOpportunities} />}
                {activeTab === 'reports' && <ReportsModeration analytics={analytics} />}
                {activeTab === 'ai' && <AIMonitoring />}
                {activeTab === 'settings' && <Settings />}
            </div>
        </div>
    );
};

export default AdminDashboard;
