const validator = require('validator');

exports.validateRegister = (req, res, next) => {
    const { email, password, role } = req.body;
    const errors = [];

    if (!email || !validator.isEmail(email)) {
        errors.push('Valid email is required');
    }

    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters');
    }

    if (!role || !['student', 'recruiter'].includes(role)) {
        errors.push('Valid role is required');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors.join(', ') });
    }

    next();
};

exports.validateOpportunity = (req, res, next) => {
    const { title, type, description, requiredSkills } = req.body;
    const errors = [];

    if (!title || title.trim().length < 5) {
        errors.push('Title must be at least 5 characters');
    }

    if (!type || !['internship', 'freelance'].includes(type)) {
        errors.push('Type must be internship or freelance');
    }

    if (!description || description.trim().length < 20) {
        errors.push('Description must be at least 20 characters');
    }

    if (!requiredSkills || !Array.isArray(requiredSkills) || requiredSkills.length === 0) {
        errors.push('At least one required skill is needed');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors.join(', ') });
    }

    next();
};

exports.sanitizeInput = (req, res, next) => {
    // Remove any HTML tags from string inputs
    const sanitize = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = validator.escape(obj[key]);
            } else if (typeof obj[key] === 'object') {
                sanitize(obj[key]);
            }
        }
    };

    if (req.body) sanitize(req.body);
    if (req.query) sanitize(req.query);
    if (req.params) sanitize(req.params);

    next();
};
