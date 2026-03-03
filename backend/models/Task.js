const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    applicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    recruiterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    deadline: Date,
    status: {
        type: String,
        enum: ['assigned', 'in-progress', 'submitted', 'completed', 'revision-needed'],
        default: 'assigned'
    },
    submissionUrl: String,
    submissionNotes: String,
    feedback: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: Date
});

module.exports = mongoose.model('Task', taskSchema);
