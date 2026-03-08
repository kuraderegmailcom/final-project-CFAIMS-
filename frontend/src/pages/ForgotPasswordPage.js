import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        try {
            const response = await api.post('/auth/forgot-password', { email });
            setMessage(response.data.message || 'Password reset link has been sent to your email');
            setEmail('');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send reset email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen p-5 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b]">
            <Link
                to="/login"
                className="absolute top-7 left-7 text-white no-underline text-base flex items-center gap-1.5 transition-all duration-300 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 hover:-translate-x-1"
            >
                ← Back to Login
            </Link>

            <div className="w-full max-w-lg">
                <div className="bg-white rounded-xl p-12 shadow-2xl">
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                        Forgot Password?
                    </h2>
                    <p className="text-center text-gray-600 text-base mb-8 leading-relaxed">
                        Enter your email address and we'll send you a link to reset your password
                    </p>

                    {message && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg mb-5 text-sm text-center">
                            {message}
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-4 rounded-lg mb-5 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-4 py-3.5 bg-gradient-to-r from-[#1a9b8e] to-[#2ba89d] text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:from-[#158a7e] hover:to-[#25998e] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
