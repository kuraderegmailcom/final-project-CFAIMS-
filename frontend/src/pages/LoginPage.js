import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './LoginPage.css';

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
        <div className="login-page">
    

            <div className="login-container">
                {/* Left Side - Welcome Section */}
                <div className="login-left">
                    <div className="welcome-content">
                        <h1>Welcome Back</h1>
                        <p>Please log in using your personal information to stay connected with us</p>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="login-right">
                    <div className="login-form-wrapper">
                        <h2>LOGIN</h2>

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group password-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>

                            <div className="forgot-password">
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="login-btn"
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        <p className="signup-link">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
