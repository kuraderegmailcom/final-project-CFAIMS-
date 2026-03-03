import React from 'react';
import './NotificationPanel.css';

const NotificationPanel = () => {
    return (
        <div className="notification-panel">
            <h3>Quick Messages from Recruiters</h3>
            <div className="notifications-list">
                <div className="notification-item">
                    <p className="notification-text">No new messages</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPanel;
