# Database Setup Guide

## Quick Start

### Check MongoDB Status
```bash
cd backend
npm run check-db
```

### Windows Users - Quick Start MongoDB
Double-click `start-mongodb.bat` in the root directory, or run:
```bash
net start MongoDB
```

## MongoDB Installation & Setup

### Windows

1. **Download MongoDB**
   - Visit: https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server for Windows
   - Run the installer
   - ✅ **IMPORTANT**: Check "Install MongoDB as a Service" during installation

2. **Start MongoDB Service**
   ```bash
   # Option 1: Use the provided script
   start-mongodb.bat
   
   # Option 2: Command line (run as Administrator)
   net start MongoDB
   
   # Option 3: Services Manager
   # Press Win+R, type "services.msc", find MongoDB, and click Start
   ```

3. **Verify MongoDB is Running**
   ```bash
   # Check if process is running
   tasklist | findstr mongod
   
   # Or use the check script
   cd backend
   npm run check-db
   ```

### macOS

1. **Install using Homebrew**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

2. **Start MongoDB**
   ```bash
   # Start as a service
   brew services start mongodb-community
   
   # Or run in foreground
   mongod --config /usr/local/etc/mongod.conf
   ```

3. **Verify Installation**
   ```bash
   # Check version
   mongosh --version
   
   # Or use the check script
   cd backend
   npm run check-db
   ```

### Linux (Ubuntu/Debian)

1. **Install MongoDB**
   ```bash
   sudo apt-get update
   sudo apt-get install -y mongodb
   ```

2. **Start MongoDB Service**
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

3. **Check Status**
   ```bash
   sudo systemctl status mongod
   
   # Or use the check script
   cd backend
   npm run check-db
   ```

## Connection String

The default connection string in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/student-freelance-platform
```

## Troubleshooting

### ❌ Connection Refused Error
**Cause**: MongoDB service is not running

**Solution**:
1. Check if MongoDB is installed:
   ```bash
   mongod --version
   ```

2. Start MongoDB:
   - Windows: `net start MongoDB` (as Administrator)
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

3. Verify it's running:
   ```bash
   cd backend
   npm run check-db
   ```

### ❌ Authentication Failed
**Cause**: MongoDB requires authentication

**Solution**: Update connection string in `.env`:
```
MONGODB_URI=mongodb://username:password@localhost:27017/student-freelance-platform
```

### ❌ Port Already in Use
**Cause**: Another service is using port 27017

**Solution**: 
1. Find what's using the port:
   - Windows: `netstat -ano | findstr :27017`
   - Mac/Linux: `lsof -i :27017`

2. Either stop that service or change MongoDB port in config

### ❌ "MongoDB is not recognized"
**Cause**: MongoDB is not in system PATH

**Solution**:
1. Add MongoDB to PATH:
   - Windows: Add `C:\Program Files\MongoDB\Server\{version}\bin` to PATH
   - Mac: Should be automatic with Homebrew
   - Linux: Should be automatic with apt-get

2. Restart your terminal/command prompt

## Verify Connection

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Check health endpoint:**
   ```bash
   curl http://localhost:5000/health
   ```

3. **Look for success message:**
   ```
   ✅ MongoDB connected successfully!
   📍 Host: localhost
   📍 Database: student-freelance-platform
   📍 Port: 27017
   ```

## Database Collections

The application will automatically create these collections:
- `users` - User accounts (students, recruiters, admins)
- `opportunities` - Job/internship postings
- `applications` - Student applications
- `tasks` - Assigned tasks
- `messages` - User messages

## Indexes

Indexes are automatically created for:
- User email (unique)
- User role
- Opportunity status
- Application status
- And more for performance optimization

## Using MongoDB Compass (GUI)

1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Connect using: `mongodb://localhost:27017`
3. Browse your `student-freelance-platform` database

## Common Commands

```bash
# Check MongoDB status
npm run check-db

# Start backend (will auto-check MongoDB)
npm start

# Start backend in dev mode
npm run dev

# Connect to MongoDB shell
mongosh "mongodb://localhost:27017/student-freelance-platform"
```

## Need Help?

If you're still having issues:
1. Run `npm run check-db` to diagnose the problem
2. Check the error messages in the terminal
3. Ensure MongoDB is installed and running
4. Verify your `.env` file has the correct `MONGODB_URI`
