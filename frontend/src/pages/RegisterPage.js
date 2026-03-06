import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './RegisterPage.css';

const RegisterPage = () => {
    const [role, setRole] = useState('student');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        companyName: '',
        contactPerson: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!agreeTerms) {
            setError('Please agree to the Terms of User');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const payload = {
                email: formData.email,
                password: formData.password,
                role
            };

            if (role === 'student') {
                payload.fullName = formData.fullName;
            } else if (role === 'recruiter') {
                payload.companyName = formData.companyName;
                payload.contactPerson = formData.contactPerson;
            }

            const response = await api.post('/auth/register', payload);
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            if (user.role === 'recruiter' && !user.isApproved) {
                alert('Registration successful! Your account is pending admin approval.');
                navigate('/login');
            } else {
                if (user.role === 'student') navigate('/student');
                else if (user.role === 'recruiter') navigate('/recruiter');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">

            <div className="register-container">
                {/* Left Side - Image Section */}
                <div className="register-left">
                    <div className="overlay-content">
                        <h1>Join Us Today</h1>
                        <p>Create your account and start your journey with us</p>
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="register-right">
                    <div className="register-form-wrapper">
                        <h2>Register</h2>

                        {/* Role Selection */}
                        <div className="role-selection">
                            <button
                                type="button"
                                onClick={() => setRole('student')}
                                className={`role-btn ${role === 'student' ? 'active' : ''}`}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('recruiter')}
                                className={`role-btn ${role === 'recruiter' ? 'active' : ''}`}
                            >
                                Recruiter
                            </button>
                        </div>

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="register-form">
                            {role === 'student' && (
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name..."
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>
                            )}

                            {role === 'recruiter' && (
                                <>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Company name..."
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Person</label>
                                        <input
                                            type="text"
                                            placeholder="Contact person..."
                                            value={formData.contactPerson}
                                            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Email address..."
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group password-group">
                                <label>Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
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

                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="terms-checkbox">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                />
                                <label htmlFor="terms">
                                    I agree to the <span>Terms of User</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="register-btn"
                            >
                                {loading ? 'Creating Account...' : 'Register'}
                            </button>
                        </form>

                        <p className="signin-link">
                            Already have an account? <Link to="/login">LOGIN →</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
