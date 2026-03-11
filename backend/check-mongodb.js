#!/usr/bin/env node

const { exec } = require('child_process');
const mongoose = require('mongoose');
require('dotenv').config();

console.log('\n🔍 MongoDB Connection Checker\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check if MongoDB process is running
const checkMongoProcess = () => {
    return new Promise((resolve) => {
        const isWindows = process.platform === 'win32';
        const command = isWindows
            ? 'tasklist | findstr mongod'
            : 'ps aux | grep mongod | grep -v grep';

        exec(command, (error, stdout) => {
            if (error || !stdout) {
                console.log('❌ MongoDB process is NOT running\n');
                resolve(false);
            } else {
                console.log('✅ MongoDB process is running\n');
                resolve(true);
            }
        });
    });
};

// Test MongoDB connection
const testConnection = async () => {
    try {
        console.log('🔄 Testing connection to MongoDB...');
        console.log(`📍 URI: ${process.env.MONGODB_URI}\n`);

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });

        console.log('✅ Successfully connected to MongoDB!');
        console.log(`📍 Host: ${mongoose.connection.host}`);
        console.log(`📍 Database: ${mongoose.connection.name}`);
        console.log(`📍 Port: ${mongoose.connection.port}\n`);

        await mongoose.connection.close();
        return true;
    } catch (error) {
        console.log('❌ Failed to connect to MongoDB');
        console.log(`   Error: ${error.message}\n`);
        return false;
    }
};

// Provide instructions
const provideInstructions = () => {
    const isWindows = process.platform === 'win32';
    const isMac = process.platform === 'darwin';
    const isLinux = process.platform === 'linux';

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📋 How to Start MongoDB:\n');

    if (isWindows) {
        console.log('Windows:');
        console.log('  1. Open Command Prompt as Administrator');
        console.log('  2. Run: net start MongoDB');
        console.log('  3. Or start MongoDB Compass and connect\n');
    } else if (isMac) {
        console.log('macOS:');
        console.log('  1. Install: brew tap mongodb/brew && brew install mongodb-community');
        console.log('  2. Start: brew services start mongodb-community');
        console.log('  3. Or run: mongod --config /usr/local/etc/mongod.conf\n');
    } else if (isLinux) {
        console.log('Linux:');
        console.log('  1. Install: sudo apt-get install mongodb');
        console.log('  2. Start: sudo systemctl start mongod');
        console.log('  3. Enable on boot: sudo systemctl enable mongod\n');
    }

    console.log('📥 Download MongoDB:');
    console.log('   https://www.mongodb.com/try/download/community\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
};

// Main execution
(async () => {
    const processRunning = await checkMongoProcess();
    const connectionSuccess = await testConnection();

    if (processRunning && connectionSuccess) {
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ MongoDB is properly configured and running!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        process.exit(0);
    } else {
        provideInstructions();
        process.exit(1);
    }
})();
