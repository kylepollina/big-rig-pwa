# Deploying to GitHub Pages

This guide will help you deploy your PWA to GitHub Pages so it's accessible online.

## Prerequisites

1. A GitHub account (create one at https://github.com if you don't have one)
2. Git installed on your Mac (it should already be installed)

## Step-by-Step Deployment

### 1. Initialize Git Repository

Open Terminal in the project folder and run:

```bash
cd /Users/kyle/Desktop/big-rig/big-rig-pwa
git init
git add .
git commit -m "Initial commit - Big Rig PWA"
```

### 2. Create a New Repository on GitHub

1. Go to https://github.com
2. Click the "+" icon in the top-right → "New repository"
3. Name it: `big-rig-pwa` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click "Create repository"

### 3. Connect Your Local Repository to GitHub

GitHub will show you commands. Use these (replace `YOUR-USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/big-rig-pwa.git
git branch -M main
git push -u origin main
```

You'll be prompted to sign in to GitHub.

### 4. Enable GitHub Pages

1. On your GitHub repository page, click "Settings"
2. In the left sidebar, click "Pages"
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### 5. Wait for Deployment (1-2 minutes)

GitHub will build your site. After a minute or two, refresh the Pages settings page.

You'll see: "Your site is live at https://YOUR-USERNAME.github.io/big-rig-pwa/"

### 6. Update Config for GitHub Pages

Your PWA URL will be: `https://YOUR-USERNAME.github.io/big-rig-pwa/`

You can now:
- Open this URL on any device with Chrome
- Install the PWA from the browser
- Share the link with others

## Installing on the Chromebook from GitHub Pages

### One-Time Installation

1. On the Chromebook, open Chrome
2. Go to: `https://YOUR-USERNAME.github.io/big-rig-pwa/`
3. Click the install icon in the address bar
4. Or click menu (⋮) → "Install app"
5. Pin to shelf: Right-click app icon → "Pin"

**That's it!** The app now works offline permanently.

## Updating the App Later

When you want to add more playlists or change icons:

```bash
# 1. Make your changes to config.js or other files

# 2. Commit and push changes
cd /Users/kyle/Desktop/big-rig/big-rig-pwa
git add .
git commit -m "Update playlists"
git push

# 3. Wait 1-2 minutes for GitHub Pages to rebuild
# 4. On the Chromebook, uninstall the old app and reinstall from the URL
```

## Setting Up Family Link with GitHub Pages

In Family Link, whitelist these URLs:
- `https://YOUR-USERNAME.github.io/big-rig-pwa/*`
- `https://www.youtube.com/embed/*`
- `https://www.youtube.com/iframe_api`

Block all other sites.

## Troubleshooting

**Problem: "Your site is not live yet"**
- Wait 2-3 minutes and refresh
- Check that you selected `main` branch and `/ (root)` folder

**Problem: Page shows 404**
- Make sure the repository is Public
- Check the URL matches exactly: `https://YOUR-USERNAME.github.io/big-rig-pwa/`

**Problem: PWA won't install**
- Make sure you're using HTTPS (GitHub Pages uses HTTPS automatically)
- Try in Chrome (not Safari)
- Clear browser cache and try again

**Problem: Icons don't load**
- All icons must be in the `icons/` folder
- Check file paths in config.js match exactly
- GitHub Pages is case-sensitive (use lowercase)

## Alternative: Custom Domain (Optional)

If you own a domain name, you can use it instead of the GitHub Pages URL:

1. In repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's instructions to configure DNS

This would let you use something like `playlists.yourdomain.com` instead of the GitHub URL.
