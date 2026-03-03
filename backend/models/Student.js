const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: String,
    university: String,
    major: String,
    yearOfStudy: Number,
    bio: String,
    skills: [String],
    cvUrl: String,
    extractedSkills: [String],
    profileImage: String,
    location: String,
    languages: [String],
    portfolio: String,
    github: String,
    linkedin: String,
    skillProgress: [{
        skill: String,
        level: Number,
        tasksCompleted: Number
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student', studentSchema);
