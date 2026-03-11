@echo off
echo ========================================
echo Testing Database Connection
echo ========================================
echo.

echo [1/3] Running system diagnostics...
cd backend
call npm run diagnose

echo.
echo [2/3] Testing MongoDB connection...
call npm run check-db

echo.
echo [3/3] Testing health endpoint...
echo Starting backend server for 5 seconds...
start /B node server.js > test-output.log 2>&1
timeout /t 5 /nobreak >nul

echo.
echo Checking health endpoint...
curl -s http://localhost:5000/health

echo.
echo.
echo Stopping test server...
taskkill /F /IM node.exe >nul 2>&1

echo.
echo ========================================
echo Test Complete
echo ========================================
echo.
echo Check test-output.log for server logs
echo.
pause
