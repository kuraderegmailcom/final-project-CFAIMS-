const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log(`MongoDB connected successfully: ${conn.connection.host}`);

        // Create indexes for performance (only after successful connection)
        const db = mongoose.connection.db;

        try {
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

            console.log('Database indexes created successfully');
        } catch (indexError) {
            console.log('Note: Some indexes may already exist');
        }

    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.log('\n⚠️  MongoDB Connection Failed!');
        console.log('Please ensure MongoDB is running:');
        console.log('  - Install MongoDB: https://www.mongodb.com/try/download/community');
        console.log('  - Start MongoDB service:');
        console.log('    Windows: net start MongoDB');
        console.log('    Mac: brew services start mongodb-community');
        console.log('    Linux: sudo systemctl start mongod');
        console.log('\nServer will continue running without database connection.\n');
    }
};

// Handle connection events
mongoose.connection.on('connected', () => {
    console.log('✅ Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('⚠️  Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
});

module.exports = connectDB;
