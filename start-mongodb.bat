@echo off
echo ========================================
echo MongoDB Startup Script for Windows
echo ========================================
echo.

REM Check if MongoDB is already running
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I /N "mongod.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo [OK] MongoDB is already running!
    echo.
    goto :end
)

echo [INFO] Attempting to start MongoDB service...
echo.

REM Try to start MongoDB as a Windows service
net start MongoDB 2>NUL
if "%ERRORLEVEL%"=="0" (
    echo [SUCCESS] MongoDB service started successfully!
    echo.
    goto :end
)

echo [WARNING] Could not start MongoDB service.
echo.
echo Possible reasons:
echo   1. MongoDB is not installed as a Windows service
echo   2. You need to run this script as Administrator
echo   3. MongoDB is not installed
echo.
echo ========================================
echo Installation Instructions:
echo ========================================
echo.
echo 1. Download MongoDB Community Server:
echo    https://www.mongodb.com/try/download/community
echo.
echo 2. Run the installer and select "Install MongoDB as a Service"
echo.
echo 3. After installation, run this script as Administrator
echo.
echo Alternatively, you can start MongoDB manually:
echo    mongod --dbpath C:\data\db
echo.

:end
pause
