const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
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

module.exports = router;
