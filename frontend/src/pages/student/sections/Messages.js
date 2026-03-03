import React from 'react';
import MessagesPanel from '../../../components/MessagesPanel';
import './Messages.css';

const Messages = () => {
    return (
        <div className="messages-section">
            <h2 className="section-title">Messages</h2>
            <MessagesPanel />
        </div>
    );
};

export default Messages;
