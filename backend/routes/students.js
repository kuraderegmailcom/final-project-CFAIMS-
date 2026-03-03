const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { protect, authorize } = require('../middleware/auth');
const Student = require('../models/Student');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/cvs',
    filename: (req, file, cb) => {
        cb(null, `cv-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

// Get student profile
router.get('/profile', protect, authorize('student'), async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user._id });
        res.json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update student profile
router.put('/profile', protect, authorize('student'), async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
            { userId: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );
        res.json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Upload CV
router.post('/upload-cv', protect, authorize('student'), upload.single('cv'), async (req, res) => {
    try {
        const cvUrl = `/uploads/cvs/${req.file.filename}`;
        const student = await Student.findOneAndUpdate(
            { userId: req.user._id },
            { cvUrl },
            { new: true }
        );
        res.json({ success: true, cvUrl, data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
