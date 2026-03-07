# Database Setup Guide

## MongoDB Installation & Setup

### Windows

1. **Download MongoDB**
   - Visit: https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server for Windows
   - Run the installer

2. **Start MongoDB Service**
   ```bash
   net start MongoDB
   ```

3. **Verify MongoDB is Running**
   ```bash
   mongo --version
   ```

### macOS

1. **Install using Homebrew**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

2. **Start MongoDB**
   ```bash
   brew services start mongodb-community
   ```

3. **Verify Installation**
   ```bash
   mongosh --version
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
   ```

## Connection String

The default connection string in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/student-freelance-platform
```

## Troubleshooting

### Connection Refused Error
- **Cause**: MongoDB service is not running
- **Solution**: Start MongoDB service using commands above

### Authentication Failed
- **Cause**: MongoDB requires authentication
- **Solution**: Update connection string:
  ```
  MONGODB_URI=mongodb://username:password@localhost:27017/student-freelance-platform
  ```

### Port Already in Use
- **Cause**: Another service is using port 27017
- **Solution**: Change MongoDB port or stop conflicting service

## Verify Connection

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Check health endpoint:
   ```bash
   curl http://localhost:5000/health
   ```

3. Look for success message:
   ```
   ✅ Mongoose connected to MongoDB
   MongoDB connected successfully: localhost
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
