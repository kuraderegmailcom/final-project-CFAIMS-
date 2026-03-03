import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const bgColor = type === 'success' ? 'bg-emerald-500' :
        type === 'error' ? 'bg-red-500' :
            type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';

    return (
        <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-in`}>
            <div className="flex items-center space-x-3">
                <span>{message}</span>
                <button onClick={onClose} className="text-white hover:text-gray-200">
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Toast;
