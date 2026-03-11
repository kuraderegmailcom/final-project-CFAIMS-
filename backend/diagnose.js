#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('\n🔍 System Diagnostics\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const checks = [];

// Check 1: .env file exists
const checkEnvFile = () => {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        checks.push({ name: '.env file', status: '✅', message: 'Found' });

        // Check if MONGODB_URI is set
        const envContent = fs.readFileSync(envPath, 'utf8');
        if (envContent.includes('MONGODB_URI=')) {
            const match = envContent.match(/MONGODB_URI=(.+)/);
            if (match && match[1] && !match[1].includes('your_')) {
                checks.push({ name: 'MONGODB_URI', status: '✅', message: 'Configured' });
            } else {
                checks.push({ name: 'MONGODB_URI', status: '⚠️', message: 'Not configured properly' });
            }
        } else {
            checks.push({ name: 'MONGODB_URI', status: '❌', message: 'Missing' });
        }
    } else {
        checks.push({ name: '.env file', status: '❌', message: 'Not found' });
    }
};

// Check 2: Node modules installed
const checkNodeModules = () => {
    const nodeModulesPath = path.join(__dirname, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
        checks.push({ name: 'Dependencies', status: '✅', message: 'Installed' });
    } else {
        checks.push({ name: 'Dependencies', status: '❌', message: 'Run: npm install' });
    }
};

// Check 3: MongoDB process
const checkMongoProcess = () => {
    return new Promise((resolve) => {
        const isWindows = process.platform === 'win32';
        const command = isWindows
            ? 'tasklist | findstr mongod'
            : 'ps aux | grep mongod | grep -v grep';

        exec(command, (error, stdout) => {
            if (error || !stdout) {
                checks.push({ name: 'MongoDB Process', status: '❌', message: 'Not running' });
            } else {
                checks.push({ name: 'MongoDB Process', status: '✅', message: 'Running' });
            }
            resolve();
        });
    });
};

// Check 4: Port availability
const checkPort = (port) => {
    return new Promise((resolve) => {
        const isWindows = process.platform === 'win32';
        const command = isWindows
            ? `netstat -ano | findstr :${port}`
            : `lsof -i :${port}`;

        exec(command, (error, stdout) => {
            if (stdout) {
                checks.push({ name: `Port ${port}`, status: '⚠️', message: 'In use' });
            } else {
                checks.push({ name: `Port ${port}`, status: '✅', message: 'Available' });
            }
            resolve();
        });
    });
};

// Check 5: MongoDB installation
const checkMongoInstallation = () => {
    return new Promise((resolve) => {
        exec('mongod --version', (error, stdout) => {
            if (error) {
                checks.push({ name: 'MongoDB Installation', status: '❌', message: 'Not found in PATH' });
            } else {
                const version = stdout.split('\n')[0];
                checks.push({ name: 'MongoDB Installation', status: '✅', message: version });
            }
            resolve();
        });
    });
};

// Display results
const displayResults = () => {
    console.log('Diagnostic Results:\n');

    checks.forEach(check => {
        console.log(`${check.status} ${check.name.padEnd(25)} ${check.message}`);
    });

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Recommendations
    const errors = checks.filter(c => c.status === '❌');
    const warnings = checks.filter(c => c.status === '⚠️');

    if (errors.length > 0) {
        console.log('❌ Issues Found:\n');
        errors.forEach(error => {
            console.log(`   • ${error.name}: ${error.message}`);
        });
        console.log('');
    }

    if (warnings.length > 0) {
        console.log('⚠️  Warnings:\n');
        warnings.forEach(warning => {
            console.log(`   • ${warning.name}: ${warning.message}`);
        });
        console.log('');
    }

    if (errors.length === 0 && warnings.length === 0) {
        console.log('✅ All checks passed! Your system is ready.\n');
    } else {
        console.log('📋 Recommended Actions:\n');

        if (errors.some(e => e.name === '.env file')) {
            console.log('   1. Copy .env.example to .env');
            console.log('      cp .env.example .env\n');
        }

        if (errors.some(e => e.name === 'Dependencies')) {
            console.log('   2. Install dependencies');
            console.log('      npm install\n');
        }

        if (errors.some(e => e.name === 'MongoDB Installation')) {
            console.log('   3. Install MongoDB');
            console.log('      https://www.mongodb.com/try/download/community\n');
        }

        if (errors.some(e => e.name === 'MongoDB Process')) {
            console.log('   4. Start MongoDB');
            const isWindows = process.platform === 'win32';
            if (isWindows) {
                console.log('      net start MongoDB (as Administrator)\n');
            } else if (process.platform === 'darwin') {
                console.log('      brew services start mongodb-community\n');
            } else {
                console.log('      sudo systemctl start mongod\n');
            }
        }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
};

// Run all checks
(async () => {
    checkEnvFile();
    checkNodeModules();
    await checkMongoProcess();
    await checkMongoInstallation();
    await checkPort(5000);
    await checkPort(27017);

    displayResults();
})();
