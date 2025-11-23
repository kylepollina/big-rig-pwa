# YouTube Playlist PWA for Chromebook

A simple, accessible Progressive Web App (PWA) designed to provide easy access to YouTube playlists with large, clickable buttons.

## Features

- Large, easy-to-click buttons with custom icons
- Fullscreen YouTube playlist playback
- **Automatic shuffle on startup** with manual toggle button
- Multiple shuffle attempts for maximum reliability
- Standard YouTube controls
- Easy configuration via single config file
- Works offline after installation
- No navigation away from playlists

## Quick Start - Testing on Your MacBook

1. Open Terminal and navigate to this folder:
   ```bash
   cd /Users/kyle/Desktop/big-rig/big-rig-pwa
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open Chrome and go to:
   ```
   http://localhost:8000
   ```

4. Click the install icon in the address bar (computer with down arrow)

5. The app will open as a standalone window - test the buttons!

6. You can stop the server after installation (Ctrl+C) - the app will still work

## Configuring Playlists

Edit `config.js` to add or modify playlists:

```javascript
const playlists = [
  {
    name: "Big Rig Videos",
    icon: "icons/big-rig.svg",
    url: "https://www.youtube.com/playlist?list=UU4EQzJKBH6hTrGzpwiXSUK4vjLRIYaL_",
    description: "Trucks and big rigs"
  },
  // Add more playlists here
];
```

### Adding Playlists - Super Easy!

**Just copy and paste the full YouTube URL:**

1. Go to the playlist on YouTube
2. Copy the entire URL from your browser (e.g., `https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf`)
3. Paste it as the `url` value in config.js

The app will automatically extract the playlist ID - no need to manually copy just the ID!

**You can also use just the playlist ID if you prefer:**
```javascript
url: "PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
```

### Adding Custom Icons

**Local files:**
1. Create or download an image (PNG, SVG, JPG)
2. Save it to the `icons/` folder
3. Update the icon path in `config.js`:
   ```javascript
   icon: "icons/your-icon-name.png"
   ```

**Online images (even easier!):**
Just paste the full image URL:
```javascript
icon: "https://example.com/my-icon.png"
```

This works with any image URL from the internet - no need to download it first!

## Shuffle Feature

The app automatically enables shuffle when a playlist starts playing. It uses multiple methods to ensure shuffle works:

1. **Automatic shuffle on load** - Tries to enable shuffle immediately
2. **Delayed attempts** - Retries after 0.5 and 1.5 seconds (YouTube API sometimes needs time)
3. **Manual toggle button** - A "🔀 Shuffle ON" button appears in the bottom-left corner

Your uncle can click the shuffle button to:
- Turn shuffle OFF (plays videos in order) - button shows "▶️ Sequential"
- Turn shuffle back ON - button shows "🔀 Shuffle ON" (green when active)

By default, shuffle is ON when the playlist starts.

## Installing on the Chromebook

### One-Time Setup

1. Copy this entire folder to the Chromebook (USB drive, Google Drive, etc.)

2. Enable Linux mode on the Chromebook (if not already enabled):
   - Settings → Advanced → Developers → Linux development environment → Turn On

3. Open the Linux terminal and navigate to the folder:
   ```bash
   cd ~/Downloads/big-rig-pwa
   # (or wherever you copied it)
   ```

4. Start the local server:
   ```bash
   python3 -m http.server 8000
   ```

5. Open Chrome and go to:
   ```
   http://localhost:8000
   ```

6. Install the app:
   - Click the install icon in the address bar
   - Or click the menu (⋮) → "Install app"

7. Pin to shelf:
   - Right-click the app icon → "Pin"

8. Stop the server (the app will continue working):
   - Press Ctrl+C in the terminal

### After Installation

- The app works forever without needing the server
- It survives reboots and shutdowns
- No remote access needed
- No maintenance required

## Using with Family Link

To prevent navigation away from the app:

1. Set up a Google Family Link account for the Chromebook user

2. From your MacBook, go to: https://families.google.com

3. Configure restrictions:
   - Chrome → Site Settings → "Only allow approved sites"
   - Add these URLs:
     - `http://localhost:8000` (for initial install)
     - `https://www.youtube.com/embed/*`
     - `https://www.youtube.com/iframe_api`

4. Block all other websites

5. Set the Chromebook to auto-login to the managed account

## Folder Structure

```
big-rig-pwa/
├── index.html          # Main menu with playlist buttons
├── playlist.html       # YouTube player page
├── config.js           # Playlist configuration
├── styles.css          # Styling for large buttons
├── manifest.json       # PWA metadata
├── icons/
│   ├── big-rig.svg     # Playlist icon
│   ├── playlist2.svg   # Placeholder icon
│   ├── playlist3.svg   # Placeholder icon
│   ├── icon-192.svg    # App icon (small)
│   └── icon-512.svg    # App icon (large)
└── README.md           # This file
```

## Customization

### Change Colors

Edit `styles.css` to change the background gradient:

```css
body {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

### Change Button Size

In `styles.css`, adjust the button sizing:

```css
.playlist-button {
  padding: 40px;        /* Increase for larger buttons */
  min-height: 350px;    /* Increase for taller buttons */
}
```

### Hide/Show YouTube Controls

In `playlist.html`, find the `playerVars` section and change:

```javascript
controls: 1,  // 1 = show controls, 0 = hide controls
```

## Troubleshooting

**Problem: Icons don't show up**
- Check that icon files exist in the `icons/` folder
- Verify the path in `config.js` matches the actual filename
- If icons fail, a colored placeholder with the first letter will appear

**Problem: Playlist won't play**
- Verify the playlist ID is correct
- Check that the playlist is public (not private)
- Try opening the playlist directly on YouTube first

**Problem: Can't install PWA**
- Make sure you're accessing via `http://localhost:8000` (not `file://`)
- The server must be running during installation
- Try clearing Chrome cache and reloading

**Problem: Shuffle doesn't work**
- YouTube's shuffle API can be unreliable
- Videos will still play in order if shuffle fails
- This is a YouTube API limitation, not a bug in the app

## Need Help?

If you need to update playlists later:
1. Edit `config.js` on your MacBook
2. Copy the updated file to the Chromebook
3. No need to reinstall - just refresh the app

For additional playlists, simply add more entries to the `playlists` array in `config.js` and add corresponding icon files.
