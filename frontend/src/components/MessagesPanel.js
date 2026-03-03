import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const MessagesPanel = () => {
    const [conversations, setConversations] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchConversations();
    }, []);

    const fetchConversations = async () => {
        try {
            const res = await api.get('/messages/conversations');
            setConversations(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchMessages = async (userId) => {
        try {
            const res = await api.get(`/messages/${userId}`);
            setMessages(res.data.data);
            setSelectedUser(userId);
        } catch (err) {
            console.error(err);
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedUser) return;

        try {
            await api.post('/messages', {
                receiverId: selectedUser,
                content: newMessage
            });
            setNewMessage('');
            fetchMessages(selectedUser);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-4 h-[600px]">
            {/* Conversations List */}
            <div className="bg-white rounded-lg shadow overflow-y-auto">
                <div className="p-4 border-b">
                    <h3 className="font-bold text-lg">Messages</h3>
                </div>
                <div className="divide-y">
                    {conversations.map((conv, idx) => (
                        <div
                            key={idx}
                            onClick={() => fetchMessages(conv.senderId._id === selectedUser ? conv.receiverId._id : conv.senderId._id)}
                            className="p-4 hover:bg-gray-50 cursor-pointer"
                        >
                            <p className="font-semibold">
                                {conv.senderId.email === localStorage.getItem('user') ? conv.receiverId.email : conv.senderId.email}
                            </p>
                            <p className="text-sm text-gray-600 truncate">{conv.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Messages Area */}
            <div className="col-span-2 bg-white rounded-lg shadow flex flex-col">
                {selectedUser ? (
                    <>
                        <div className="p-4 border-b">
                            <h3 className="font-bold">Chat</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.senderId === JSON.parse(localStorage.getItem('user')).id ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-lg ${msg.senderId === JSON.parse(localStorage.getItem('user')).id
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-200 text-gray-900'
                                            }`}
                                    >
                                        <p>{msg.content}</p>
                                        <p className="text-xs mt-1 opacity-75">
                                            {new Date(msg.createdAt).toLocaleTimeString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage} className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Select a conversation to start messaging
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagesPanel;
