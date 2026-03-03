# Git Collaboration Guide for CFAIMS Project

## Repository Information
- **Repository URL**: https://github.com/kuraderegmailcom/final-project-CFAIMS-
- **Main Branch**: `main`

---

## Initial Setup for Team Members

### 1. Clone the Repository
```bash
git clone https://github.com/kuraderegmailcom/final-project-CFAIMS-.git
cd final-project-CFAIMS-
```

### 2. Install Dependencies

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd frontend
npm install
cd ..
```

**AI Service:**
```bash
cd ai-service
pip install -r requirements.txt
cd ..
```

### 3. Set Up Environment Variables
Copy `.env.example` to `.env` and configure your local settings:
```bash
copy .env.example .env
```

---

## Daily Workflow

### Before Starting Work

1. **Always pull the latest changes:**
```bash
git pull origin main
```

2. **Create a new branch for your feature:**
```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `update/component-name` - Updates to existing features
- `design/page-name` - Design changes

### While Working

1. **Check your changes:**
```bash
git status
```

2. **Stage your changes:**
```bash
# Stage specific files
git add path/to/file

# Or stage all changes
git add .
```

3. **Commit your changes:**
```bash
git commit -m "Clear description of what you changed"
```

Commit message examples:
- `"Add user authentication to login page"`
- `"Fix navigation menu responsive design"`
- `"Update student dashboard API integration"`

### Pushing Your Work

1. **Push your branch to GitHub:**
```bash
git push origin feature/your-feature-name
```

2. **Create a Pull Request (PR) on GitHub:**
   - Go to the repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Select your branch
   - Add description of changes
   - Request review from team members

---

## Working on Different Parts Simultaneously

### Recommended Division of Work

**Frontend Team:**
```bash
git checkout -b frontend/component-name
# Work on: frontend/src/pages/* or frontend/src/components/*
```

**Backend Team:**
```bash
git checkout -b backend/feature-name
# Work on: backend/routes/*, backend/models/*, backend/controllers/*
```

**AI Service Team:**
```bash
git checkout -b ai/feature-name
# Work on: ai-service/*
```

**Design Team:**
```bash
git checkout -b design/page-name
# Work on: CSS files, styling updates
```

### Avoiding Conflicts

1. **Work on different files** when possible
2. **Communicate** with team about what you're working on
3. **Pull frequently** to stay updated
4. **Commit small changes** regularly

---

## Handling Merge Conflicts

If you get a conflict when pulling:

1. **See which files have conflicts:**
```bash
git status
```

2. **Open conflicted files** - look for:
```
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name
```

3. **Resolve conflicts** by choosing which code to keep

4. **Mark as resolved:**
```bash
git add path/to/resolved-file
git commit -m "Resolve merge conflict in filename"
```

---

## Useful Git Commands

### Check Status
```bash
git status                    # See what's changed
git log --oneline            # See commit history
git branch                   # List all branches
```

### Switch Branches
```bash
git checkout main            # Switch to main branch
git checkout -b new-branch   # Create and switch to new branch
```

### Update Your Branch
```bash
git pull origin main         # Get latest from main
git merge main              # Merge main into your branch
```

### Undo Changes
```bash
git checkout -- filename     # Discard changes in file
git reset HEAD filename      # Unstage a file
git reset --soft HEAD~1      # Undo last commit (keep changes)
```

### Stash Changes (Save for Later)
```bash
git stash                    # Save current changes
git stash pop               # Restore stashed changes
git stash list              # See all stashes
```

---

## Best Practices

### 1. Commit Often
- Make small, focused commits
- Each commit should represent one logical change

### 2. Write Clear Commit Messages
```bash
# Good
git commit -m "Add email validation to registration form"

# Bad
git commit -m "fixed stuff"
```

### 3. Pull Before Push
```bash
git pull origin main
git push origin your-branch
```

### 4. Review Before Committing
```bash
git diff                     # See what changed
git diff filename           # See changes in specific file
```

### 5. Keep Main Branch Clean
- Never commit directly to `main`
- Always use feature branches
- Merge only through Pull Requests

---

## Team Workflow Example

### Developer A (Frontend):
```bash
git checkout -b frontend/student-dashboard
# Make changes to frontend/src/pages/student/*
git add .
git commit -m "Update student dashboard layout"
git push origin frontend/student-dashboard
# Create PR on GitHub
```

### Developer B (Backend):
```bash
git checkout -b backend/api-endpoints
# Make changes to backend/routes/*
git add .
git commit -m "Add new API endpoints for tasks"
git push origin backend/api-endpoints
# Create PR on GitHub
```

### Developer C (Design):
```bash
git checkout -b design/home-page-colors
# Make changes to frontend/src/pages/home/sections/*.css
git add .
git commit -m "Update color scheme for home page"
git push origin design/home-page-colors
# Create PR on GitHub
```

---

## Syncing Your Fork (If Using Forks)

If team members fork the repository:

```bash
# Add upstream remote
git remote add upstream https://github.com/kuraderegmailcom/final-project-CFAIMS-.git

# Fetch upstream changes
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

---

## Emergency Commands

### Accidentally Committed to Main?
```bash
git reset --soft HEAD~1      # Undo commit, keep changes
git checkout -b new-branch   # Create new branch
git commit -m "Your message"
git push origin new-branch
```

### Need to Discard All Local Changes?
```bash
git reset --hard HEAD
git clean -fd
```

### Wrong Branch?
```bash
git stash                    # Save your changes
git checkout correct-branch
git stash pop               # Apply your changes
```

---

## Project Structure for Reference

```
CFAIMS/
├── frontend/           # React frontend (Port 3000)
├── backend/           # Node.js backend (Port 5000)
├── ai-service/        # Python AI service (Port 8000)
├── .gitignore        # Files to ignore
├── .env.example      # Environment template
└── README.md         # Project documentation
```

---

## Getting Help

- **Check status**: `git status`
- **See what changed**: `git diff`
- **View history**: `git log --oneline --graph`
- **Ask team members** before force pushing
- **Never use** `git push --force` on main branch

---

## Quick Reference Card

```bash
# Daily workflow
git pull origin main
git checkout -b feature/my-feature
# ... make changes ...
git add .
git commit -m "Description"
git push origin feature/my-feature

# Update your branch with main
git checkout main
git pull origin main
git checkout feature/my-feature
git merge main

# See what's happening
git status
git log --oneline
git branch -a
```

---

**Remember**: Communication is key! Always let your team know what you're working on to avoid conflicts.
