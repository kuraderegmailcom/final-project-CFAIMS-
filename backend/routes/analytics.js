const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
    getStudentAnalytics,
    getRecruiterAnalytics,
    getAdminAnalytics
} = require('../controllers/analyticsController');

router.get('/student', protect, authorize('student'), getStudentAnalytics);
router.get('/recruiter', protect, authorize('recruiter'), getRecruiterAnalytics);
router.get('/admin', protect, authorize('admin'), getAdminAnalytics);

module.exports = router;
