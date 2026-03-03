import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import { ToastProvider } from './context/ToastContext';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/student/StudentDashboard';
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <ToastProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route path="/student/*" element={
                        <PrivateRoute role="student">
                            <StudentDashboard />
                        </PrivateRoute>
                    } />

                    <Route path="/recruiter/*" element={
                        <PrivateRoute role="recruiter">
                            <RecruiterDashboard />
                        </PrivateRoute>
                    } />

                    <Route path="/admin/*" element={
                        <PrivateRoute role="admin">
                            <AdminDashboard />
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </ToastProvider>
    );
}

export default App;
