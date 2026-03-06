const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Email transporter configuration
const createTransporter = () => {
    return nodemailer.createTransporter({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
};

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password, role, ...profileData } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create user
        const user = await User.create({ email, password, role });

        // Create role-specific profile
        if (role === 'student') {
            await Student.create({ userId: user._id, ...profileData });
        } else if (role === 'recruiter') {
            await Recruiter.create({ userId: user._id, ...profileData });
        }

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                isApproved: user.isApproved
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Admin hardcoded login
        if (email === 'admin@gmail.com' && password === 'admin123') {
            let adminUser = await User.findOne({ email: 'admin@gmail.com' });

            if (!adminUser) {
                adminUser = await User.create({
                    email: 'admin@gmail.com',
                    password: 'admin123',
                    role: 'admin',
                    isApproved: true
                });
            }

            const token = generateToken(adminUser._id);
            return res.json({
                success: true,
                token,
                user: {
                    id: adminUser._id,
                    email: adminUser.email,
                    role: adminUser.role,
                    isApproved: true
                }
            });
        }

        // Regular user login
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (!user.isActive) {
            return res.status(403).json({ message: 'Account is deactivated' });
        }

        if (!user.isApproved && user.role === 'recruiter') {
            return res.status(403).json({ message: 'Account pending admin approval' });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                isApproved: user.isApproved
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Forgot Password
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'No user found with this email' });
        }

        // Generate reset token
        const resetToken = user.getResetPasswordToken();
        await user.save();

        // Create reset URL
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;

        // Email message
        const message = `
            <h2>Password Reset Request</h2>
            <p>You requested a password reset. Click the link below to reset your password:</p>
            <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background-color: #00bcd4; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>This link will expire in 30 minutes.</p>
            <p>If you didn't request this, please ignore this email.</p>
        `;

        try {
            // Send email
            const transporter = createTransporter();
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: 'Password Reset Request',
                html: message
            });

            res.json({
                success: true,
                message: 'Password reset email sent successfully'
            });
        } catch (emailError) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            console.error('Email error:', emailError);
            return res.status(500).json({
                message: 'Email could not be sent. Please try again later.'
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
    try {
        const { password } = req.body;

        // Hash the token from URL
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        // Find user with valid token
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid or expired reset token'
            });
        }

        // Set new password
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        res.json({
            success: true,
            message: 'Password reset successful. You can now login with your new password.'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
