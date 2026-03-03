const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts, please try again later.'
});

const applySecurity = (app) => {
    // Set security headers
    app.use(helmet());

    // Data sanitization against NoSQL injection
    app.use(mongoSanitize());

    // Data sanitization against XSS
    app.use(xss());

    // Apply rate limiting
    app.use('/api/', limiter);
    app.use('/api/auth/login', authLimiter);
    app.use('/api/auth/register', authLimiter);
};

module.exports = { applySecurity, limiter, authLimiter };
