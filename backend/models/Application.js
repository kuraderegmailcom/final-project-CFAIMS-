const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    opportunityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opportunity',
        required: true
    },
    coverLetter: String,
    status: {
        type: String,
        enum: ['pending', 'shortlisted', 'accepted', 'rejected'],
        default: 'pending'
    },
    aiMatchScore: Number,
    appliedAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Application', applicationSchema);
