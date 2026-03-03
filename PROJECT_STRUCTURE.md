# 📁 StudentHub Project Structure

## Clean 3-Folder Architecture

```
StudentHub/
│
├── 📂 ai-service/              # Python AI Service
│   ├── main.py                 # FastAPI server for AI operations
│   └── requirements.txt        # Python dependencies
│
├── 📂 backend/                 # Node.js Backend
│   ├── config/                 # Configuration files
│   │   ├── database.js         # MongoDB connection
│   │   └── security.js         # Security settings
│   │
│   ├── controllers/            # Business logic
│   │   └── analyticsController.js
│   │
│   ├── middleware/             # Express middleware
│   │   ├── auth.js             # JWT authentication
│   │   └── validation.js       # Input validation
│   │
│   ├── models/                 # MongoDB schemas
│   │   ├── Application.js
│   │   ├── Message.js
│   │   ├── Opportunity.js
│   │   ├── Recruiter.js
│   │   ├── Student.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── routes/                 # API endpoints
│   │   ├── admin.js
│   │   ├── ai.js
│   │   ├── analytics.js
│   │   ├── applications.js
│   │   ├── auth.js
│   │   ├── messages.js
│   │   ├── opportunities.js
│   │   ├── recruiters.js
│   │   ├── students.js
│   │   └── tasks.js
│   │
│   ├── uploads/                # File storage
│   │   └── cvs/                # Student CVs
│   │
│   └── server.js               # Main server file
│
├── 📂 frontend/                # React Frontend
│   ├── public/                 # Static assets
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── AnalyticsChart.js
│   │   │   ├── FilterSort.js
│   │   │   ├── LoadingSkeleton.js
│   │   │   ├── MessagesPanel.js
│   │   │   ├── PrivateRoute.js
│   │   │   └── Toast.js
│   │   │
│   │   ├── context/            # React Context
│   │   │   └── ToastContext.js
│   │   │
│   │   ├── hooks/              # Custom hooks
│   │   │   └── useLanguage.js
│   │   │
│   │   ├── pages/              # Page components
│   │   │   │
│   │   │   ├── admin/          # Admin Dashboard
│   │   │   │   ├── sections/
│   │   │   │   │   ├── AIMonitoring.js/css
│   │   │   │   │   ├── AllJobPosts.js/css
│   │   │   │   │   ├── PlatformAnalytics.js/css
│   │   │   │   │   ├── ReportsModeration.js/css
│   │   │   │   │   ├── Settings.js/css
│   │   │   │   │   └── UserManagement.js/css
│   │   │   │   └── AdminDashboard.js/css
│   │   │   │
│   │   │   ├── student/        # Student Dashboard
│   │   │   │   ├── sections/
│   │   │   │   │   ├── AIRecommendations.js/css
│   │   │   │   │   ├── Messages.js/css
│   │   │   │   │   ├── MyApplications.js/css
│   │   │   │   │   ├── MyTasks.js/css
│   │   │   │   │   ├── NotificationPanel.js/css
│   │   │   │   │   ├── Overview.js/css
│   │   │   │   │   ├── ProfileSettings.js/css
│   │   │   │   │   └── SkillProgress.js/css
│   │   │   │   └── StudentDashboard.js/css
│   │   │   │
│   │   │   ├── recruiter/      # Recruiter Dashboard
│   │   │   │   ├── sections/
│   │   │   │   │   ├── ApplicationsReview.js/css
│   │   │   │   │   ├── AssignTasks.js/css
│   │   │   │   │   ├── FeedbackRatings.js/css
│   │   │   │   │   ├── ManagePosts.js/css
│   │   │   │   │   ├── Messages.js/css
│   │   │   │   │   ├── Overview.js/css
│   │   │   │   │   └── ProfileSettings.js/css
│   │   │   │   └── RecruiterDashboard.js/css
│   │   │   │
│   │   │   ├── home/           # Homepage
│   │   │   │   ├── sections/
│   │   │   │   │   ├── AboutSection.js/css
│   │   │   │   │   ├── ContactSection.js/css
│   │   │   │   │   ├── FeaturesSection.js/css
│   │   │   │   │   ├── Footer.js/css
│   │   │   │   │   ├── HeroSection.js/css
│   │   │   │   │   ├── HowItWorks.js/css
│   │   │   │   │   └── Navigation.js/css
│   │   │   │   └── HomePage.js/css
│   │   │   │
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   └── api.js          # Axios configuration
│   │   │
│   │   ├── App.js              # Main app component
│   │   ├── i18n.js             # Internationalization
│   │   ├── index.css           # Global styles
│   │   └── index.js            # Entry point
│   │
│   ├── .env                    # Frontend environment
│   ├── package.json            # Frontend dependencies
│   └── tailwind.config.js      # Tailwind configuration
│
├── .env                        # Root environment variables
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── package.json                # Root package manager
├── package-lock.json
├── README.md                   # Main documentation
├── RUNNING_SERVICES.md         # Service management guide
└── PROJECT_STRUCTURE.md        # This file
```

## 🎯 Key Features

### ✅ Clean Architecture
- Only 3 main folders: `ai-service`, `backend`, `frontend`
- No unnecessary root-level folders
- Clear separation of concerns

### ✅ Modular Frontend
- Separate folders for each dashboard type
- Each section has its own JS and CSS files
- Easy to maintain and scale

### ✅ Organized Backend
- MVC pattern (Models, Views, Controllers)
- Middleware for authentication and validation
- RESTful API routes

### ✅ AI Service
- Standalone Python service
- FastAPI for high performance
- Resume analysis and job matching

## 🚀 Running the Project

### Start Backend
```bash
npm run dev
```

### Start Frontend
```bash
cd frontend
npm run dev
```

### Start AI Service
```bash
cd ai-service
python main.py
```

## 📦 What Was Cleaned Up

- ❌ Removed root `node_modules` folder
- ❌ Removed `.vscode` folder
- ✅ Moved `uploads` folder to `backend/uploads`
- ✅ Updated server.js to use correct uploads path
- ✅ Kept only essential root files

## 🎨 Frontend Structure Benefits

1. **Modular Dashboards**: Each user role has its own folder
2. **Section-based Components**: Each page section is a separate component
3. **Co-located Styles**: CSS files next to their components
4. **Easy Navigation**: Clear folder hierarchy
5. **Scalable**: Easy to add new features

---

**Last Updated:** 2024
**Status:** ✅ Production Ready
