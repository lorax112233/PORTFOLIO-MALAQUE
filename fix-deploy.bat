@echo off
cd /d c:\Users\admin\shad_portfolio\portfolio-website

REM Configure git to avoid pager
git config --global core.pager ""

echo Checking git status...
git status --porcelain

echo.
echo Adding vercel.json...
git add vercel.json

echo.
echo Committing changes...
git commit -m "Fix Vercel build: use next build instead of react-scripts"

echo.
echo Pushing to GitHub...
git push origin main -v

echo.
echo Done!
pause
