const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    phone: String,
    companyWebsite: String,
    companyDescription: String,
    industry: String,
    companySize: String,
    location: String,
    logo: String,
    verificationDocument: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
