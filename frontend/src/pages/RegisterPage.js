import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';

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
        <div className="relative flex items-center justify-center min-h-screen p-5 bg-[#0a2e3d]">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0 bg-black/20"></div>

            <div className="relative z-10 flex w-full max-w-[1000px] bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] min-h-[650px] max-h-[85vh] flex-col md:flex-row">
                {/* Left Side - Image Section */}
                <div 
                    className="relative flex items-center justify-center flex-1 p-10 text-white bg-center bg-cover"
                    style={{ backgroundImage: "url('/login-bg.webp')" }}
                >
                    <div className="z-10 text-center">
                        <h1 className="text-[42px] font-bold mb-5 leading-tight">Join Us Today</h1>
                        <p className="text-base leading-relaxed opacity-95 max-w-[350px] mx-auto">
                            Create your account and start your journey with us
                        </p>
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="flex-1 flex items-start justify-center pt-12 px-10 pb-10 bg-[#f8f9fa] overflow-y-auto">
                    <div className="w-full max-w-[400px]">
                        <h2 className="text-4xl font-bold mb-6 text-[#2c3e50]">Register</h2>

                        {/* Role Selection */}
                        <div className="flex gap-2.5 mb-6">
                            <button
                                type="button"
                                onClick={() => setRole('student')}
                                className={`flex-1 py-3 px-4 border-2 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${
                                    role === 'student'
                                        ? 'bg-[#29bdc1] border-[#29bdc1] text-white'
                                        : 'bg-white border-[#ddd] text-[#666] hover:border-[#29bdc1] hover:text-[#29bdc1]'
                                }`}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('recruiter')}
                                className={`flex-1 py-3 px-4 border-2 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${
                                    role === 'recruiter'
                                        ? 'bg-[#29bdc1] border-[#29bdc1] text-white'
                                        : 'bg-white border-[#ddd] text-[#666] hover:border-[#29bdc1] hover:text-[#29bdc1]'
                                }`}
                            >
                                Recruiter
                            </button>
                        </div>

                        {error && (
                            <div className="bg-[#fee] border border-[#fcc] text-[#c33] px-3 py-3 rounded-lg mb-5 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
                            {role === 'student' && (
                                <div className="relative">
                                    <label className="block text-sm font-medium text-[#555] mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name..."
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                        className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                    />
                                </div>
                            )}

                            {role === 'recruiter' && (
                                <>
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-[#555] mb-1.5">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Company name..."
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                            required
                                            className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-[#555] mb-1.5">Contact Person</label>
                                        <input
                                            type="text"
                                            placeholder="Contact person..."
                                            value={formData.contactPerson}
                                            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                            required
                                            className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="relative">
                                <label className="block text-sm font-medium text-[#555] mb-1.5">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email address..."
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-[#555] mb-1.5">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                />
                                <button
                                    type="button"
                                    className="absolute p-1 text-lg transition-opacity bg-transparent border-none cursor-pointer right-4 bottom-3 opacity-60 hover:opacity-100"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-[#555] mb-1.5">Repeat Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    required
                                    className="w-full py-3 px-4 border border-[#ddd] rounded-md text-sm transition-all bg-white focus:outline-none focus:border-[#29bdc1] focus:shadow-[0_0_0_3px_rgba(41,189,193,0.1)] placeholder:text-[#bbb]"
                                />
                            </div>

                            <div className="flex items-center gap-2.5 mt-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="w-[18px] h-[18px] cursor-pointer accent-[#29bdc1]"
                                />
                                <label htmlFor="terms" className="text-[13px] text-[#666] cursor-pointer">
                                    I agree to the <span className="text-[#29bdc1] font-semibold">Terms of User</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 px-4 bg-[#29bdc1] text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all mt-2.5 capitalize hover:bg-[#23a8ac] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(41,189,193,0.3)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loading ? 'Creating Account...' : 'Register'}
                            </button>
                        </form>

                        <p className="text-center mt-5 text-sm text-[#666]">
                            Already have an account?{' '}
                            <Link 
                                to="/login" 
                                className="text-[#29bdc1] no-underline font-semibold transition-colors hover:text-[#23a8ac]"
                            >
                                LOGIN →
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
