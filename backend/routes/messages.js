const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Message = require('../models/Message');

// Send message
router.post('/', protect, async (req, res) => {
    try {
        const { receiverId, content } = req.body;

        const message = await Message.create({
            senderId: req.user._id,
            receiverId,
            content
        });

        res.status(201).json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get conversations
router.get('/conversations', protect, async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { senderId: req.user._id },
                { receiverId: req.user._id }
            ]
        })
            .populate('senderId', 'email role')
            .populate('receiverId', 'email role')
            .sort('-createdAt');

        res.json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get messages with specific user
router.get('/:userId', protect, async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { senderId: req.user._id, receiverId: req.params.userId },
                { senderId: req.params.userId, receiverId: req.user._id }
            ]
        })
            .sort('createdAt');

        // Mark as read
        await Message.updateMany(
            { senderId: req.params.userId, receiverId: req.user._id, isRead: false },
            { isRead: true }
        );

        res.json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
