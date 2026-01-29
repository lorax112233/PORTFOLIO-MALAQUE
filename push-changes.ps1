cd c:\Users\admin\shad_portfolio\portfolio-website

# Check current status
Write-Host "Current git status:"
git status

# Reset any previous failed operations
Write-Host "`nResetting to last known good state..."
git merge --abort 2>$null
git reset --hard origin/main

# Make sure we have the latest from remote
Write-Host "`nPulling latest from GitHub..."
git fetch origin

# Show what we're about to push
Write-Host "`nFiles to commit:"
git diff --name-only

# Add and commit vercel.json
Write-Host "`nCommitting vercel.json..."
git add vercel.json
git commit -m "Fix: Update vercel.json to explicitly use next build instead of react-scripts"

# Push to GitHub
Write-Host "`nPushing to GitHub..."
git push origin main

Write-Host "`nDone! Now manually trigger redeploy in Vercel dashboard."
