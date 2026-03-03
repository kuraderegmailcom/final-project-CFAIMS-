const Student = require('../models/Student');
const Recruiter = require('../models/Recruiter');
const Opportunity = require('../models/Opportunity');
const Application = require('../models/Application');
const Task = require('../models/Task');

// Student Analytics
exports.getStudentAnalytics = async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user._id });

        const applications = await Application.find({ studentId: student._id });
        const tasks = await Task.find({ studentId: student._id });

        const completedTasks = tasks.filter(t => t.status === 'completed');
        const averageRating = completedTasks.length > 0
            ? completedTasks.reduce((sum, t) => sum + (t.rating || 0), 0) / completedTasks.length
            : 0;

        const applicationSuccessRate = applications.length > 0
            ? (applications.filter(a => a.status === 'accepted').length / applications.length) * 100
            : 0;

        // Skill growth data (last 6 months)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        const skillGrowth = student.skillProgress || [];

        res.json({
            success: true,
            data: {
                completedTasks: completedTasks.length,
                totalTasks: tasks.length,
                averageRating: averageRating.toFixed(1),
                applicationSuccessRate: applicationSuccessRate.toFixed(1),
                totalApplications: applications.length,
                acceptedApplications: applications.filter(a => a.status === 'accepted').length,
                skillGrowth
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Recruiter Analytics
exports.getRecruiterAnalytics = async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ userId: req.user._id });

        const opportunities = await Opportunity.find({ recruiterId: recruiter._id });
        const opportunityIds = opportunities.map(o => o._id);

        const applications = await Application.find({
            opportunityId: { $in: opportunityIds }
        });

        const tasks = await Task.find({ recruiterId: recruiter._id });
        const completedTasks = tasks.filter(t => t.status === 'completed');

        const hiringRate = applications.length > 0
            ? (applications.filter(a => a.status === 'accepted').length / applications.length) * 100
            : 0;

        const postEngagement = opportunities.length > 0
            ? opportunities.reduce((sum, o) => sum + (o.applicantsCount || 0), 0) / opportunities.length
            : 0;

        const averageCandidateRating = completedTasks.length > 0
            ? completedTasks.reduce((sum, t) => sum + (t.rating || 0), 0) / completedTasks.length
            : 0;

        res.json({
            success: true,
            data: {
                totalPosts: opportunities.length,
                activePosts: opportunities.filter(o => o.status === 'active').length,
                totalApplications: applications.length,
                hiringRate: hiringRate.toFixed(1),
                postEngagement: postEngagement.toFixed(1),
                averageCandidateRating: averageCandidateRating.toFixed(1),
                tasksAssigned: tasks.length,
                tasksCompleted: completedTasks.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin Analytics
exports.getAdminAnalytics = async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments();
        const totalRecruiters = await Recruiter.countDocuments();
        const totalOpportunities = await Opportunity.countDocuments();
        const totalApplications = await Application.countDocuments();
        const activeOpportunities = await Opportunity.countDocuments({ status: 'active' });

        // Monthly growth (last 6 months)
        const monthlyData = [];
        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

            const students = await Student.countDocuments({
                createdAt: { $gte: startOfMonth, $lte: endOfMonth }
            });

            const opportunities = await Opportunity.countDocuments({
                createdAt: { $gte: startOfMonth, $lte: endOfMonth }
            });

            monthlyData.push({
                month: date.toLocaleString('default', { month: 'short' }),
                students,
                opportunities
            });
        }

        // AI match accuracy
        const applicationsWithScore = await Application.find({ aiMatchScore: { $exists: true } });
        const avgMatchScore = applicationsWithScore.length > 0
            ? applicationsWithScore.reduce((sum, a) => sum + (a.aiMatchScore || 0), 0) / applicationsWithScore.length
            : 0;

        res.json({
            success: true,
            data: {
                totalStudents,
                totalRecruiters,
                totalOpportunities,
                totalApplications,
                activeOpportunities,
                monthlyGrowth: monthlyData,
                aiMatchAccuracy: avgMatchScore.toFixed(1)
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
