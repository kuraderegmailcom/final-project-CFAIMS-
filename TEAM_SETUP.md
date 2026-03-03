# Quick Team Setup Guide

## For New Team Members

### Step 1: Clone the Repository
```bash
git clone https://github.com/kuraderegmailcom/final-project-CFAIMS-.git
cd final-project-CFAIMS-
```

### Step 2: Configure Git (First Time Only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Install All Dependencies

**Option A - Install Everything at Once:**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install AI service dependencies (requires Python)
cd ai-service
pip install -r requirements.txt
cd ..
```

**Option B - Install Only What You Need:**

If you're working on **Frontend only**:
```bash
cd frontend
npm install
```

If you're working on **Backend only**:
```bash
npm install
```

If you're working on **AI Service only**:
```bash
cd ai-service
pip install -r requirements.txt
```

### Step 4: Set Up Environment Variables
```bash
# Copy the example file
copy .env.example .env

# Edit .env with your local settings
# Use notepad or any text editor
notepad .env
```

### Step 5: Verify Setup
```bash
# Check Git is working
git status

# Check Node.js version
node --version

# Check npm version
npm --version

# Check Python version (if working on AI service)
python --version
```

---

## Running the Project Locally

### Start Backend Server
```bash
# From project root
npm start
# Or
node backend/server.js
```
Backend runs on: http://localhost:5000

### Start Frontend Development Server
```bash
cd frontend
npm start
```
Frontend runs on: http://localhost:3000

### Start AI Service
```bash
cd ai-service
python main.py
```
AI Service runs on: http://localhost:8000

---

## Your First Contribution

### 1. Create Your Feature Branch
```bash
# Make sure you're on main
git checkout main

# Pull latest changes
git pull origin main

# Create your branch
git checkout -b feature/your-name-first-feature
```

### 2. Make Your Changes
Edit files in your assigned area:
- Frontend: `frontend/src/`
- Backend: `backend/`
- AI: `ai-service/`

### 3. Test Your Changes
Run the appropriate server and test in browser

### 4. Commit Your Changes
```bash
# See what you changed
git status

# Add your changes
git add .

# Commit with a clear message
git commit -m "Add: brief description of what you added"
```

### 5. Push to GitHub
```bash
git push origin feature/your-name-first-feature
```

### 6. Create Pull Request
1. Go to https://github.com/kuraderegmailcom/final-project-CFAIMS-
2. Click "Pull requests" → "New pull request"
3. Select your branch
4. Add description
5. Click "Create pull request"

---

## Common Issues & Solutions

### Issue: "Permission denied" when pushing
**Solution**: Make sure you have access to the repository. Contact the repository owner.

### Issue: "Merge conflict"
**Solution**: 
```bash
git pull origin main
# Resolve conflicts in your editor
git add .
git commit -m "Resolve merge conflicts"
git push origin your-branch
```

### Issue: "Port already in use"
**Solution**: 
- Close other instances of the server
- Or change the port in the configuration

### Issue: Dependencies not installing
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

## Team Communication

### Before Starting Work:
1. Check the GitHub Issues or project board
2. Announce what you're working on
3. Pull latest changes: `git pull origin main`

### While Working:
1. Commit frequently with clear messages
2. Push your branch regularly
3. Update team on progress

### After Completing Work:
1. Create Pull Request
2. Request review from team members
3. Address any feedback

---

## Branch Naming Convention

Use these prefixes for your branches:

- `feature/` - New features
  - Example: `feature/user-profile-page`
  
- `fix/` - Bug fixes
  - Example: `fix/login-validation-error`
  
- `update/` - Updates to existing features
  - Example: `update/dashboard-styling`
  
- `design/` - Design/styling changes
  - Example: `design/home-page-redesign`

---

## Need Help?

1. Check `GIT_COLLABORATION_GUIDE.md` for detailed Git instructions
2. Check `README.md` for project documentation
3. Ask team members in your communication channel
4. Check GitHub Issues for similar problems

---

## Quick Commands Cheat Sheet

```bash
# Get latest code
git pull origin main

# Create new branch
git checkout -b feature/my-feature

# See what changed
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin feature/my-feature

# Switch branches
git checkout branch-name

# See all branches
git branch -a

# Update your branch with main
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

---

**Welcome to the team! Happy coding! 🚀**
