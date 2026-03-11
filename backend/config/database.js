const mongoose = require('mongoose');

const connectDB = async () => {
    const maxRetries = 3;
    let retryCount = 0;

    const attemptConnection = async () => {
        try {
            // Check if MONGODB_URI is defined
            if (!process.env.MONGODB_URI) {
                throw new Error('MONGODB_URI is not defined in environment variables');
            }

            console.log(`\n🔄 Attempting to connect to MongoDB... (Attempt ${retryCount + 1}/${maxRetries})`);
            console.log(`📍 Connection URI: ${process.env.MONGODB_URI.replace(/\/\/.*@/, '//***@')}`);

            const conn = await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
            });

            console.log(`\n✅ MongoDB connected successfully!`);
            console.log(`📍 Host: ${conn.connection.host}`);
            console.log(`📍 Database: ${conn.connection.name}`);
            console.log(`📍 Port: ${conn.connection.port}\n`);

            // Create indexes for performance (only after successful connection)
            await createIndexes();

            return true;

        } catch (error) {
            retryCount++;

            console.error(`\n❌ MongoDB connection error (Attempt ${retryCount}/${maxRetries}):`);
            console.error(`   ${error.message}\n`);

            if (retryCount < maxRetries) {
                console.log(`⏳ Retrying in 3 seconds...\n`);
                await new Promise(resolve => setTimeout(resolve, 3000));
                return attemptConnection();
            } else {
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('⚠️  MongoDB Connection Failed After All Retries!');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('\n📋 Troubleshooting Steps:\n');
                console.log('1. Check if MongoDB is installed:');
                console.log('   https://www.mongodb.com/try/download/community\n');
                console.log('2. Start MongoDB service:');
                console.log('   Windows:  net start MongoDB');
                console.log('   Mac:      brew services start mongodb-community');
                console.log('   Linux:    sudo systemctl start mongod\n');
                console.log('3. Verify MongoDB is running:');
                console.log('   Windows:  tasklist | findstr mongod');
                console.log('   Mac/Linux: ps aux | grep mongod\n');
                console.log('4. Check connection string in .env file:');
                console.log(`   Current: ${process.env.MONGODB_URI}\n`);
                console.log('5. Test connection manually:');
                console.log('   mongosh "mongodb://localhost:27017/student-freelance-platform"\n');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('⚠️  Server will continue running without database.\n');

                return false;
            }
        }
    };

    return attemptConnection();
};

const createIndexes = async () => {
    try {
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

        console.log('✅ Database indexes created successfully\n');
    } catch (indexError) {
        console.log('ℹ️  Note: Some indexes may already exist\n');
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
