import React from 'react';
import MessagesPanel from '../../../components/MessagesPanel';
import './Messages.css';

const Messages = () => {
    return (
        <div className="messages-section">
            <h1 className="section-title">Messages</h1>
            <MessagesPanel />
        </div>
    );
};

export default Messages;
