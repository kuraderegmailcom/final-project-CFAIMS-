# Email Setup Guide for Password Reset

## Overview
The password reset feature uses email to send reset links to users. You need to configure an email service to enable this functionality.

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password
1. Go to Google Account > Security > 2-Step Verification
2. Scroll down to "App passwords"
3. Select "Mail" and "Other (Custom name)"
4. Name it "Student Platform" or similar
5. Click "Generate"
6. Copy the 16-character password

### Step 3: Update .env File
Open `backend/.env` and update these values:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
FRONTEND_URL=http://localhost:3000
```

## Alternative Email Services

### Using Outlook/Hotmail
```env
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Using Custom SMTP
If you want to use a custom SMTP server, modify the `createTransporter` function in `backend/routes/auth.js`:

```javascript
const createTransporter = () => {
    return nodemailer.createTransporter({
        host: 'smtp.your-domain.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
};
```

## Testing

1. Start your backend server
2. Go to the login page
3. Click "Forgot password?"
4. Enter a registered email
5. Check your inbox for the reset link

## Troubleshooting

### Email not sending
- Verify your email credentials are correct
- Check if 2FA is enabled and app password is generated
- Ensure your firewall allows SMTP connections
- Check backend console for error messages

### Reset link not working
- Verify FRONTEND_URL in .env matches your frontend URL
- Check if the token hasn't expired (30 minutes validity)
- Ensure the backend server is running

## Security Notes

- Never commit your .env file to version control
- Use app-specific passwords, not your main account password
- Reset tokens expire after 30 minutes
- Tokens are hashed before storing in database
- Each token can only be used once

## Required Package

Make sure nodemailer is installed:
```bash
npm install nodemailer
```
