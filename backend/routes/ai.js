const express = require('express');
const router = express.Router();
const axios = require('axios');
const { protect, authorize } = require('../middleware/auth');
const Student = require('../models/Student');
const Opportunity = require('../models/Opportunity');

// Analyze CV and extract skills
router.post('/analyze-cv', protect, authorize('student'), async (req, res) => {
    try {
        const { cvText } = req.body;

        // Call Python AI service
        const response = await axios.post(`${process.env.AI_SERVICE_URL}/analyze-cv`, {
            text: cvText
        });

        const extractedSkills = response.data.skills;

        // Update student profile
        const student = await Student.findOneAndUpdate(
            { userId: req.user._id },
            { extractedSkills },
            { new: true }
        );

        res.json({ success: true, skills: extractedSkills, data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get AI recommendations
router.get('/recommendations', protect, authorize('student'), async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user._id });

        if (!student || !student.extractedSkills || student.extractedSkills.length === 0) {
            return res.json({ success: true, data: [] });
        }

        // Find opportunities matching student skills
        const opportunities = await Opportunity.find({
            status: 'active',
            requiredSkills: { $in: student.extractedSkills }
        })
            .populate('recruiterId', 'companyName location logo')
            .limit(10);

        // Calculate match scores
        const recommendations = opportunities.map(opp => {
            const matchingSkills = opp.requiredSkills.filter(skill =>
                student.extractedSkills.some(s => s.toLowerCase() === skill.toLowerCase())
            );
            const matchScore = (matchingSkills.length / opp.requiredSkills.length) * 100;

            return {
                opportunity: opp,
                matchScore: Math.round(matchScore),
                matchingSkills,
                missingSkills: opp.requiredSkills.filter(skill =>
                    !student.extractedSkills.some(s => s.toLowerCase() === skill.toLowerCase())
                )
            };
        });

        recommendations.sort((a, b) => b.matchScore - a.matchScore);

        res.json({ success: true, data: recommendations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
