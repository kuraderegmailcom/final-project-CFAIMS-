const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Create indexes for performance
        const db = mongoose.connection.db;

        // User indexes
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
        await db.collection('users').createIndex({ role: 1 });

        // Opportunity indexes
        await db.collection('opportunities').createIndex({ status: 1 });
        await db.collection('opportunities').createIndex({ requiredSkills: 1 });
        await db.collection('opportunities').createIndex({ recruiterId: 1 });

        // Application indexes
        await db.collection('applications').createIndex({ studentId: 1 });
        await db.collection('applications').createIndex({ opportunityId: 1 });
        await db.collection('applications').createIndex({ status: 1 });

        console.log('MongoDB connected successfully with indexes');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
