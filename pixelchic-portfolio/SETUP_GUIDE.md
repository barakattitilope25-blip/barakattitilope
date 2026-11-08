# PixelChic Portfolio - Setup Guide

## 🎬 Quick Start (5 Minutes)

### Step 1: Run the Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173` to see your portfolio!

---

## 📸 Adding Your Project Content

### Step 2: Prepare Your Project Assets

For each project, you'll need:

1. **Thumbnail image** (for gallery grid)
   - Size: 800px × 450px (16:9 ratio)
   - Format: JPG or PNG
   - Example: `project-1-thumb.jpg`

2. **Hero still image** (for featured project)
   - Size: 1920px × 1080px minimum
   - Format: JPG
   - Example: `project-1-still.jpg`

3. **Video URL** (hosted on YouTube or Vimeo)
   - Upload your video to YouTube or Vimeo
   - Get the embed URL (explained below)

### Step 3: Upload Videos to YouTube/Vimeo

#### Option A: YouTube (Free)
1. Go to [YouTube Studio](https://studio.youtube.com)
2. Upload your video
3. Set visibility to "Unlisted" (hidden from public search, but accessible via link)
4. After upload, click Share → Embed
5. Copy the URL that looks like: `https://www.youtube.com/embed/abc123xyz`

#### Option B: Vimeo (Recommended for premium look)
1. Go to [Vimeo](https://vimeo.com)
2. Upload your video
3. Set privacy to "Hide from Vimeo"
4. Click the video → Settings → Embed
5. Copy the URL that looks like: `https://player.vimeo.com/video/123456789`

### Step 4: Add Images to Public Folder

Place your images in `public/projects/`:

```
public/
└── projects/
    ├── featured-thumb.jpg
    ├── featured-still.jpg
    ├── project-2-thumb.jpg
    ├── project-2-still.jpg
    └── ... (and so on)
```

### Step 5: Update Project Data

Open `src/data/projects.js` and replace the placeholder data with your real projects:

```javascript
export const projects = [
  {
    id: "my-first-project",           // Unique ID (no spaces)
    title: "Brand Campaign Video",    // Project title
    category: "Video Edit",           // "Motion Graphics", "Video Edit", "AI Advertisement", or "Explainer Video"
    type: "client",                   // "client", "personal", or "speculative"
    thumbnail: "/projects/project-1-thumb.jpg",    // Path to thumbnail
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Your video embed URL
    stillImage: "/projects/project-1-still.jpg",   // Path to high-res still
    description: "Created a dynamic 60-second brand video with motion graphics.",
    tools: ["Premiere Pro", "After Effects"],
    year: "2024",
    featured: true  // Set ONE project to true for hero section
  },
  // Add more projects...
];
```

**Important:**
- Set **only ONE** project with `featured: true` (this shows in the hero section)
- Use forward slashes `/` in file paths
- Match the exact filename in the `public/projects/` folder

---

## ✏️ Customizing Content

### Update Contact Information

Edit `src/components/Contact.jsx`:

**Line 15:** Change email
```javascript
href="mailto:your-email@example.com"
```

**Line 29:** Update email display
```javascript
<p className="text-gray-400">your-email@example.com</p>
```

**Line 37:** Add your LinkedIn URL
```javascript
href="https://linkedin.com/in/your-profile"
```

**Lines 96-118:** Update social media links (Behance, Instagram, YouTube)

### Update About Section

Edit `src/components/About.jsx`:

Replace the placeholder bio text (lines 9-24) with your actual background and experience.

### Change Website Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00d4ff', // Change to your brand color (hex code)
}
```

---

## 🎨 Design Tips

### Choosing Project Images

**Thumbnails:**
- Use visually striking frames from your video
- High contrast works best for small sizes
- Avoid text-heavy frames (hard to read when small)

**Hero Still:**
- Choose a cinematic, high-resolution frame
- Should work well with text overlay
- Consider composition (center-weighted works best)

### Project Organization

**Categories:**
- **Motion Graphics:** 3D work, animated graphics, title sequences
- **Video Edit:** Narrative edits, commercials, vlogs
- **AI Advertisement:** AI-generated or AI-assisted content
- **Explainer Video:** Educational, how-to, corporate explainers

**Types:**
- **Client Work:** Paid projects for clients (shows commercial experience)
- **Personal Project:** Self-initiated creative work
- **Speculative/Concept:** Practice or concept work (not for a real client)

---

## 🚀 Deployment

### Deploy to Netlify (Easiest)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live at `your-site-name.netlify.app`

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live at `your-site-name.vercel.app`

---

## 🔧 Common Issues

### Images not showing?
- Check file paths start with `/projects/` not `./projects/`
- Ensure filenames match exactly (case-sensitive)
- Files must be in `public/projects/`, not `src/`

### Videos not loading?
- Make sure you're using the **embed** URL, not the regular video URL
- YouTube embed: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo embed: `https://player.vimeo.com/video/VIDEO_ID`

### Site not updating?
- Stop the dev server (Ctrl+C)
- Run `npm run dev` again
- Clear browser cache (Ctrl+Shift+R)

---

## 📦 Future Additions

When you're ready to add more features:

### Add Downloadable CV

1. Place your CV PDF in `public/cv/YourName_CV.pdf`
2. Uncomment lines 65-74 in `src/components/About.jsx`

### Individual Project Pages

This requires adding React Router (more advanced). Let me know if you need help with this!

---

## 💡 Need Help?

Common commands:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

Check the main `README.md` for more technical details.

---

**You're all set! Start by running `npm run dev` and seeing your portfolio in action. Then customize the content with your actual projects.** 🎉
