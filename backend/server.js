const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/students', require('./routes/students'));
app.use('/api/recruiters', require('./routes/recruiters'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/opportunities', require('./routes/opportunities'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/ai', require('./routes/ai'));

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Server is running',
        database: require('mongoose').connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/health\n`);
});

