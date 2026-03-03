const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const Application = require('../models/Application');
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');
const Opportunity = require('../models/Opportunity');

// Apply for opportunity
router.post('/', protect, authorize('student'), async (req, res) => {
    try {
        const { opportunityId, coverLetter } = req.body;
        const student = await Student.findOne({ userId: req.user._id });

        // Check if already applied
        const existingApplication = await Application.findOne({
            studentId: student._id,
            opportunityId
        });

        if (existingApplication) {
            return res.status(400).json({ message: 'Already applied to this opportunity' });
        }

        const application = await Application.create({
            studentId: student._id,
            opportunityId,
            coverLetter
        });

        // Update applicants count
        await Opportunity.findByIdAndUpdate(opportunityId, {
            $inc: { applicantsCount: 1 }
        });

        res.status(201).json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get student's applications
router.get('/my', protect, authorize('student'), async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user._id });
        const applications = await Application.find({ studentId: student._id })
            .populate('opportunityId')
            .sort('-appliedAt');

        res.json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get applications for recruiter's opportunity
router.get('/opportunity/:opportunityId', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        const opportunity = await Opportunity.findOne({
            _id: req.params.opportunityId,
            recruiterId: recruiter._id
        });

        if (!opportunity) {
            return res.status(404).json({ message: 'Opportunity not found' });
        }

        const applications = await Application.find({ opportunityId: opportunity._id })
            .populate('studentId')
            .sort('-appliedAt');

        res.json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update application status
router.put('/:id/status', protect, authorize('recruiter'), async (req, res) => {
    try {
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true }
        );

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
