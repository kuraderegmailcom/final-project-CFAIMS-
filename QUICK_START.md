# Quick Start Guide

## 🚀 First Time Setup

### 1. Install MongoDB
- Download: https://www.mongodb.com/try/download/community
- ✅ Check "Install MongoDB as a Service" during installation

### 2. Start MongoDB
```bash
# Windows (run as Administrator)
net start MongoDB

# Or double-click
start-mongodb.bat
```

### 3. Install Dependencies
```bash
# Windows automated setup
setup.bat

# Or manually
cd backend && npm install
cd ../frontend && npm install
```

### 4. Configure Environment
```bash
# Copy example file
cp .env.example .env

# Edit .env with your settings
```

## 🏃 Running the Application

### Windows Quick Start
```bash
start-all.bat
```

### Manual Start
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend  
cd frontend
npm start
```

## 🔍 Troubleshooting

### Check System Status
```bash
cd backend
npm run diagnose
```

### Check MongoDB Connection
```bash
cd backend
npm run check-db
```

### Common Issues

#### ❌ "MongoDB connection error"
**Solution:**
1. Start MongoDB: `net start MongoDB` (as Administrator)
2. Verify: `npm run check-db`

#### ❌ "Cannot find module"
**Solution:**
```bash
cd backend
npm install
```

#### ❌ "Port already in use"
**Solution:**
- Backend (5000): Stop other services using port 5000
- MongoDB (27017): Stop other MongoDB instances

## 📍 Access Points

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/health

## 🆘 Need Help?

1. Run diagnostics: `cd backend && npm run diagnose`
2. Check database: `cd backend && npm run check-db`
3. Read detailed guide: [backend/DATABASE_SETUP.md](backend/DATABASE_SETUP.md)

## 📝 Useful Commands

```bash
# Check everything
cd backend && npm run diagnose

# Check MongoDB only
cd backend && npm run check-db

# Start backend
cd backend && npm start

# Start frontend
cd frontend && npm start

# Start MongoDB (Windows)
net start MongoDB

# Stop MongoDB (Windows)
net stop MongoDB
```
