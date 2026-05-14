@echo off
echo ========================================
echo    Pushing Portfolio to GitHub
echo ========================================
echo.

cd /d "C:\Users\Sulekha\OneDrive\Desktop\Portfolio"

echo Setting up Git configuration...
"C:\Program Files\Git\bin\git.exe" config --global user.name "sbollun-ship-it"
"C:\Program Files\Git\bin\git.exe" config --global user.email "sbollun@gmail.com"

echo.
echo Adding remote repository...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/sbollun-ship-it/portfolio.git 2>nul
"C:\Program Files\Git\bin\git.exe" remote set-url origin https://github.com/sbollun-ship-it/portfolio.git

echo.
echo Pushing to GitHub...
echo If prompted for credentials:
echo Username: sbollun-ship-it
echo Password: [Your GitHub Personal Access Token]
echo.
echo To get a Personal Access Token:
echo 1. Go to https://github.com/settings/tokens
echo 2. Generate new token (classic)
echo 3. Check 'repo' scope
echo 4. Use the token as password
echo.

"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo    Push Complete!
echo ========================================
echo.
echo If successful, your portfolio is now on GitHub!
echo Visit: https://github.com/sbollun-ship-it/portfolio
echo.
pause
