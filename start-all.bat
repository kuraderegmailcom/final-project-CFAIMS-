@echo off
echo ========================================
echo Starting Student Freelance Platform
echo ========================================
echo.

echo [1/3] Starting MongoDB...
call start-mongodb.bat
timeout /t 2 /nobreak >nul

echo.
echo [2/3] Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm start"
timeout /t 3 /nobreak >nul

echo.
echo [3/3] Starting Frontend...
start "Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo All services started!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo Health:   http://localhost:5000/health
echo.
echo Press any key to close this window...
pause >nul
