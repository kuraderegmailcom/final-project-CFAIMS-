import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await api.post('/auth/login', formData);
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect based on role
            if (user.role === 'student') navigate('/student');
            else if (user.role === 'recruiter') navigate('/recruiter');
            else if (user.role === 'admin') navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen p-5 bg-[#0a2e3d]">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0 bg-black/20"></div>

            
            

            {/* Login Container */}
            <div className="relative z-10 flex w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl min-h-[500px]">
                {/* Left Side - Welcome Section */}
                <div
                    className="relative flex items-center justify-center flex-1 p-10 text-white bg-center bg-cover"
                    style={{
                        backgroundImage: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/login-bg.webp')"
                    }}
                >
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] -z-10"></div>

                    <div className="z-10 text-center">
                        <h1 className="mb-5 text-5xl font-bold leading-tight">
                            Welcome Back
                        </h1>
                        <p className="max-w-sm mx-auto text-base leading-relaxed opacity-95">
                            Please log in using your personal information to stay connected with us
                        </p>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="flex items-center justify-center flex-1 p-10 bg-gray-50">
                    <div className="w-full max-w-sm">
                        <h2 className="mb-8 text-4xl font-bold tracking-wide text-center text-gray-800">
                            LOGIN
                        </h2>

                        {error && (
                            <div className="px-4 py-3 mb-5 text-sm text-center text-red-600 border border-red-200 rounded-lg bg-red-50">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-gray-400"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute p-1 text-lg transition-opacity duration-300 -translate-y-1/2 bg-transparent border-none cursor-pointer right-4 top-1/2 opacity-60 hover:opacity-100"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>

                            <div className="-mt-2 text-right">
                                <Link
                                    to="/forgot-password"
                                    className="text-sm transition-colors duration-300 text-cyan-500 hover:text-cyan-600 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 py-3.5 bg-gradient-to-r from-[#1a9b8e] to-[#2ba89d] text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 uppercase tracking-wider hover:from-[#158a7e] hover:to-[#25998e] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        <p className="mt-6 text-sm text-center text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="font-semibold transition-colors duration-300 text-cyan-500 hover:text-cyan-600 hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
