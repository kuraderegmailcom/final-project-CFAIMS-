const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const User = require('../models/User');
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');
const Opportunity = require('../models/Opportunity');
const Application = require('../models/Application');

// Get platform analytics
router.get('/analytics', protect, authorize('admin'), async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments();
        const totalRecruiters = await Recruiter.countDocuments();
        const totalOpportunities = await Opportunity.countDocuments();
        const totalApplications = await Application.countDocuments();
        const activeOpportunities = await Opportunity.countDocuments({ status: 'active' });
        const pendingRecruiters = await User.countDocuments({ role: 'recruiter', isApproved: false });

        res.json({
            success: true,
            data: {
                totalStudents,
                totalRecruiters,
                totalOpportunities,
                totalApplications,
                activeOpportunities,
                pendingRecruiters
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all users
router.get('/users', protect, authorize('admin'), async (req, res) => {
    try {
        const { role } = req.query;
        let query = {};
        if (role) query.role = role;

        const users = await User.find(query).select('-password').sort('-createdAt');
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Approve/reject recruiter
router.put('/users/:id/approve', protect, authorize('admin'), async (req, res) => {
    try {
        const { isApproved } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { isApproved },
            { new: true }
        ).select('-password');

        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Deactivate/activate user
router.put('/users/:id/status', protect, authorize('admin'), async (req, res) => {
    try {
        const { isActive } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { isActive },
            { new: true }
        ).select('-password');

        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all opportunities
router.get('/opportunities', protect, authorize('admin'), async (req, res) => {
    try {
        const opportunities = await Opportunity.find()
            .populate('recruiterId', 'companyName')
            .sort('-createdAt');

        res.json({ success: true, data: opportunities });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete opportunity
router.delete('/opportunities/:id', protect, authorize('admin'), async (req, res) => {
    try {
        await Opportunity.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Opportunity deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
