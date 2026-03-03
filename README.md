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

2. **Install all dependencies**
```bash
npm run install-all
```

Or install manually:
```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend
npm install

# AI service dependencies
cd ../ai-service
pip install -r requirements.txt
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

**Option 1: Run all services separately**

Terminal 1 - Backend:
```bash
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

Terminal 3 - AI Service:
```bash
cd ai-service
python main.py
```

**Option 2: Use the provided scripts**
```bash
# Start backend
npm start

# Start frontend
npm run client
```

## 🌐 Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **AI Service:** http://localhost:8000

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
