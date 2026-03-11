@echo off
echo ========================================
echo Student Freelance Platform Setup
echo ========================================
echo.

echo [1/4] Checking MongoDB...
echo.
call start-mongodb.bat

echo.
echo [2/4] Installing backend dependencies...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo [3/4] Installing frontend dependencies...
cd ..\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo [4/4] Checking database connection...
cd ..\backend
call npm run check-db

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the application:
echo   1. Backend:  cd backend  ^&^& npm start
echo   2. Frontend: cd frontend ^&^& npm start
echo.
echo Or use the start-all.bat script
echo.
pause
