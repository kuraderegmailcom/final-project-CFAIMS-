const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const Opportunity = require('../models/Opportunity');
const Recruiter = require('../models/Recruiter');

// Get all opportunities (public + filtered + sorted)
router.get('/', async (req, res) => {
    try {
        const { skill, duration, location, type, minStipend, maxStipend, sort, limit } = req.query;

        let query = { status: 'active' };

        if (skill) {
            // Split by comma and trim, then create regex for each skill
            const skillArray = skill.split(',').map(s => s.trim()).filter(s => s);
            if (skillArray.length > 0) {
                query.requiredSkills = {
                    $in: skillArray
                };
            }
        }
        if (duration) query.duration = duration;
        if (location) query.location = new RegExp(location, 'i');
        if (type) query.type = type;
        if (minStipend || maxStipend) {
            query.stipend = {};
            if (minStipend) query.stipend.$gte = Number(minStipend);
            if (maxStipend) query.stipend.$lte = Number(maxStipend);
        }

        let sortOption = '-createdAt'; // Default: newest first
        if (sort === 'newest') sortOption = '-createdAt';
        else if (sort === 'stipend') sortOption = '-stipend'; // Highest stipend
        else if (sort === 'oldest') sortOption = 'createdAt';
        else if (sort === 'match') sortOption = '-aiMatchScore'; // Best match (if available)

        let opportunitiesQuery = Opportunity.find(query)
            .populate('recruiterId', 'companyName location logo')
            .sort(sortOption);

        // Apply limit if specified
        if (limit) {
            opportunitiesQuery = opportunitiesQuery.limit(Number(limit));
        }

        const opportunities = await opportunitiesQuery;

        res.json({ success: true, data: opportunities, count: opportunities.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single opportunity
router.get('/:id', async (req, res) => {
    try {
        const opportunity = await Opportunity.findById(req.params.id)
            .populate('recruiterId', 'companyName companyDescription location logo companyWebsite');

        if (!opportunity) {
            return res.status(404).json({ message: 'Opportunity not found' });
        }

        res.json({ success: true, data: opportunity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create opportunity (recruiter only)
router.post('/', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });

        const opportunity = await Opportunity.create({
            ...req.body,
            recruiterId: recruiter._id
        });

        res.status(201).json({ success: true, data: opportunity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update opportunity
router.put('/:id', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        const opportunity = await Opportunity.findOne({
            _id: req.params.id,
            recruiterId: recruiter._id
        });

        if (!opportunity) {
            return res.status(404).json({ message: 'Opportunity not found' });
        }

        Object.assign(opportunity, req.body);
        await opportunity.save();

        res.json({ success: true, data: opportunity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete opportunity
router.delete('/:id', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        const opportunity = await Opportunity.findOneAndDelete({
            _id: req.params.id,
            recruiterId: recruiter._id
        });

        if (!opportunity) {
            return res.status(404).json({ message: 'Opportunity not found' });
        }

        res.json({ success: true, message: 'Opportunity deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get recruiter's opportunities
router.get('/my/posts', protect, authorize('recruiter'), async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });
        const opportunities = await Opportunity.find({ recruiterId: recruiter._id })
            .sort('-createdAt');

        res.json({ success: true, data: opportunities });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
