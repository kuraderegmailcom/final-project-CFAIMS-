const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const Task = require('../models/Task');
const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');

// Create task (recruiter)
router.post('/', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });

        const task = await Task.create({
            ...req.body,
            recruiterId: recruiter._id
        });

        res.status(201).json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get student's tasks
router.get('/my', protect, authorize('student'), async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user._id });
        const tasks = await Task.find({ studentId: student._id })
            .populate('recruiterId', 'companyName')
            .sort('-createdAt');

        res.json({ success: true, data: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get recruiter's tasks
router.get('/recruiter/all', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        const tasks = await Task.find({ recruiterId: recruiter._id })
            .populate('studentId', 'fullName email')
            .sort('-createdAt');

        res.json({ success: true, data: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update task status (student)
router.put('/:id/submit', protect, authorize('student'), async (req, res) => {
    try {
        const { submissionUrl, submissionNotes } = req.body;
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                status: 'submitted',
                submissionUrl,
                submissionNotes
            },
            { new: true }
        );

        res.json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Provide feedback (recruiter)
router.put('/:id/feedback', protect, authorize('recruiter'), async (req, res) => {
    try {
        const { feedback, rating, status } = req.body;
        const updateData = { feedback, rating, status };

        if (status === 'completed') {
            updateData.completedAt = Date.now();
        }

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        // Update student skill progress
        if (status === 'completed' && rating) {
            const student = await Student.findById(task.studentId);
            // Logic to update skill progress based on task completion
        }

        res.json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
