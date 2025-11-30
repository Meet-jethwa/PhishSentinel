# How to Push to GitHub

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository with name: `PhishSentinel`
3. **Do NOT** initialize with README, .gitignore, or license (we already have them)
4. Click "Create repository"
5. Copy the repository URL (example: `https://github.com/yourusername/PhishSentinel.git`)

## Step 2: Add Remote and Push

Run these commands in the PhishSentinel directory:

```bash
# Add the remote repository
git remote add origin https://github.com/yourusername/PhishSentinel.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `yourusername` with your actual GitHub username.

## Step 3: Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all your code files
3. Verify that:
   - ✅ `frontend/` folder with source files is present
   - ✅ `backend/` folder with source files is present
   - ✅ `.gitignore` is present
   - ✅ `README.md` is present
   - ✅ `node_modules/` is NOT present
   - ✅ `backend/venv/` is NOT present

## Step 4: For Future Updates

After making changes, just run:

```bash
git add .
git commit -m "Your message describing the changes"
git push
```

## Current Repository Status

✅ Git initialized  
✅ Files staged and committed  
✅ `.gitignore` configured to exclude:
   - `node_modules/`
   - `backend/venv/`
   - `.env` files
   - `.vscode/`, `.idea/` (IDE files)
   - Build outputs
   - Log files
   - And other development artifacts

Ready to push! 🚀
