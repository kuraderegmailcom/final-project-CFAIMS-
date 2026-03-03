const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const Recruiter = require('../models/Recruiter');

// Get recruiter profile
router.get('/profile', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        res.json({ success: true, data: recruiter });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update recruiter profile
router.put('/profile', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOneAndUpdate(
            { userId: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );
        res.json({ success: true, data: recruiter });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
