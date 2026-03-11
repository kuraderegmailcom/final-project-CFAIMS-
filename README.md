# StudentHub - Freelance & Internship Platform

A comprehensive web platform for Ethiopian students to find freelance opportunities and internships with AI-powered matching.

## 📁 Project Structure

```
StudentHub/
├── ai-service/          # Python AI service for resume analysis and matching
│   ├── main.py         # FastAPI server
│   └── requirements.txt
│
├── backend/            # Node.js/Express backend
│   ├── config/        # Database and security configuration
│   ├── controllers/   # Business logic
│   ├── middleware/    # Authentication and validation
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API endpoints
│   ├── uploads/       # File uploads (CVs, documents)
│   └── server.js      # Main server file
│
├── frontend/          # React frontend
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   │   ├── admin/     # Admin dashboard
│   │   │   ├── student/   # Student dashboard
│   │   │   ├── recruiter/ # Recruiter dashboard
│   │   │   └── home/      # Homepage sections
│   │   ├── utils/         # Utility functions
│   │   ├── App.js
│   │   ├── i18n.js        # Internationalization
│   │   └── index.js
│   └── package.json
│
├── .env               # Environment variables
├── .env.example       # Environment template
├── .gitignore
├── package.json       # Root package manager
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB
- Python 3.8+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd StudentHub
```

2. **Setup MongoDB** (Required!)
   
   See detailed instructions in [backend/DATABASE_SETUP.md](backend/DATABASE_SETUP.md)
   
   Quick start:
   - Windows: Run `start-mongodb.bat` or `net start MongoDB` (as Administrator)
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`
   
   Verify MongoDB is running:
   ```bash
   cd backend
   npm run check-db
   ```

3. **Install all dependencies**

   Windows users can use the automated setup:
   ```bash
   setup.bat
   ```
   
   Or install manually:
   ```bash
   # Backend dependencies
   cd backend
   npm install
   
   # Frontend dependencies
   cd ../frontend
   npm install
   
   # AI service dependencies
   cd ../ai-service
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

**Option 1: Windows Quick Start**
```bash
# Start all services at once
start-all.bat
```

**Option 2: Run services separately**

Terminal 1 - Backend:
```bash
cd backend
npm start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

Terminal 3 - AI Service:
```bash
cd ai-service
python main.py
```

## 🔧 Troubleshooting

### Database Connection Issues

If you see "MongoDB connection error", follow these steps:

1. **Check if MongoDB is running:**
   ```bash
   cd backend
   npm run check-db
   ```

2. **Start MongoDB:**
   - Windows: `start-mongodb.bat` or `net start MongoDB` (as Administrator)
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

3. **Verify connection string in `.env`:**
   ```
   MONGODB_URI=mongodb://localhost:27017/student-freelance-platform
   ```

4. **Check MongoDB installation:**
   - Download from: https://www.mongodb.com/try/download/community
   - Ensure "Install MongoDB as a Service" is checked during installation

For detailed troubleshooting, see [backend/DATABASE_SETUP.md](backend/DATABASE_SETUP.md)

## 🌐 Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **AI Service:** http://localhost:8000

## 🎯 Key Features

### Opportunity Discovery
- **Freelance Opportunities:** Browse and filter freelance projects posted by companies
- **Internship Opportunities:** Find internships with duration, stipend, and skill requirements
- **Advanced Filtering:** Filter by skills, location, stipend range, duration, and more
- **Smart Search:** AI-powered matching based on student profiles and skills

### Navigation Features
- Dedicated pages for Freelance (`/freelance`) and Internships (`/internships`)
- Real-time filtering and sorting
- Detailed opportunity view with company information
- Mobile-responsive design

## 👥 User Roles

### Student
- Browse opportunities
- Apply to jobs
- Track applications
- Complete tasks
- AI-powered recommendations
- Skill progress tracking

### Recruiter
- Post opportunities
- Review applications
- Assign tasks
- Provide feedback
- Manage company profile

### Admin
- Platform analytics
- User management
- Content moderation
- AI monitoring
- System settings

## 🛠️ Technology Stack

### Frontend
- React 18
- React Router v6
- Axios
- i18next (Multilingual support)
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (File uploads)

### AI Service
- Python
- FastAPI
- NLP for resume analysis
- Machine learning for matching

## 📝 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Opportunities
- `GET /api/opportunities` - Get all opportunities (supports filtering by type, skill, location, etc.)
- `GET /api/opportunities/:id` - Get single opportunity
- `POST /api/opportunities` - Create opportunity (recruiter only)
- `PUT /api/opportunities/:id` - Update opportunity
- `DELETE /api/opportunities/:id` - Delete opportunity

### Students
- `GET /api/students/profile` - Get student profile
- `PUT /api/students/profile` - Update profile

### Recruiters
- `GET /api/opportunities/my/posts` - Get recruiter's posts
- `POST /api/opportunities` - Create opportunity

### Admin
- `GET /api/admin/analytics` - Platform analytics
- `GET /api/admin/users` - User management

## 🌍 Multilingual Support

The platform supports:
- English
- አማርኛ (Amharic)
- Afan Oromo

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Input validation
- CORS protection

## 📦 Environment Variables

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/studenthub

# JWT
JWT_SECRET=your_jwt_secret_key

# Server
PORT=5000

# AI Service
AI_SERVICE_URL=http://localhost:8000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Support

For support, email info@studenthub.et or open an issue in the repository.

---

Made with ❤️ in Ethiopia 🇪🇹
