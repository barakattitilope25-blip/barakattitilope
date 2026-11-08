# What to Edit - Quick Guide

This document tells you **exactly what files to edit** and **what to change** to customize your portfolio.

---

## 🎯 Priority 1: Must Edit (Core Content)

### 1. **src/data/projects.js** ⭐ MOST IMPORTANT

**What to change:**
Replace all placeholder project data with your real projects.

**Find these lines:**
```javascript
export const projects = [
  {
    id: "featured-project",  // ← Change to your project ID
    title: "Featured Project Title",  // ← Your project name
    // ... rest of project data
  }
]
```

**What each field means:**
- `id`: Unique identifier (no spaces) - e.g., "brand-campaign-2024"
- `title`: Display name - e.g., "Nike Brand Campaign"
- `category`: Must be one of: "Motion Graphics", "Video Edit", "AI Advertisement", "Explainer Video"
- `type`: Must be one of: "client", "personal", "speculative"
- `thumbnail`: Path to thumbnail - e.g., "/projects/nike-thumb.jpg"
- `videoUrl`: YouTube or Vimeo embed URL
- `stillImage`: Path to hero image - e.g., "/projects/nike-still.jpg"
- `description`: 1-3 sentences about the project
- `tools`: Array of tools - e.g., ["Premiere Pro", "After Effects"]
- `year`: Project year - e.g., "2024"
- `featured`: Set ONE project to `true` for hero section

---

### 2. **src/components/Contact.jsx**

**What to change:** Your contact information

#### Line 15: Email link
```javascript
href="mailto:contact@pixelchic.com"  // ← Change to YOUR email
```

#### Line 29: Email display
```javascript
<p className="text-gray-400">contact@pixelchic.com</p>  // ← Change to YOUR email
```

#### Line 37: LinkedIn URL
```javascript
href="https://linkedin.com/in/yourprofile"  // ← Change to YOUR LinkedIn
```

#### Line 96: Behance URL
```javascript
href="https://behance.net/yourprofile"  // ← Change to YOUR Behance
```

#### Line 111: Instagram URL
```javascript
href="https://instagram.com/yourprofile"  // ← Change to YOUR Instagram
```

#### Line 126: YouTube URL
```javascript
href="https://youtube.com/@yourprofile"  // ← Change to YOUR YouTube
```

**Don't have one of these social accounts?**
Just delete that entire `<a>` tag block (from `<a` to `</a>`).

---

### 3. **src/components/About.jsx**

**What to change:** Your bio and story

#### Lines 9-24: Bio text
Replace the placeholder paragraphs with your actual background:
```javascript
<p>
  I'm a video editor and motion graphics designer...  // ← Write YOUR story
</p>
```

**What to include:**
- Your background and experience
- Your technical skills (Cinema 4D, After Effects, etc.)
- Your creative approach
- Your availability (freelance/full-time)

#### Lines 50-60: Skills list
Update the tools array:
```javascript
{[
  'Cinema 4D',     // ← Keep, add, or remove tools
  'After Effects',
  // ... your actual tools
]}
```

---

## 🎨 Priority 2: Should Edit (Basic Customization)

### 4. **index.html**

**What to change:** Site title and description for SEO

#### Line 10: Page title
```html
<title>PixelChic | Video Editor & Motion Graphics Designer</title>
```

#### Line 11: Meta description
```html
<meta name="description" content="PixelChic - Professional video editing...">
```

---

### 5. **tailwind.config.js** (Optional but recommended)

**What to change:** Accent color

#### Line 9: Primary color
```javascript
primary: '#00d4ff', // ← Change to your brand color (hex code)
```

**How to choose a color:**
- Use a color picker tool (Google "color picker")
- Get the hex code (starts with #)
- Common accent colors for video portfolios:
  - Electric blue: `#00d4ff` (default)
  - Neon green: `#00ff88`
  - Warm gold: `#ffa500`
  - Hot pink: `#ff007f`
  - Purple: `#9d4edd`

---

## 📁 Priority 3: Must Add (Assets)

### 6. **public/projects/** folder

**What to add:**
All your project images.

**File naming convention:**
- Thumbnails: `project-name-thumb.jpg`
- Hero stills: `project-name-still.jpg`

**Required sizes:**
- Thumbnails: 800×450px (16:9)
- Hero stills: 1920×1080px minimum

**Example structure:**
```
public/
└── projects/
    ├── nike-campaign-thumb.jpg
    ├── nike-campaign-still.jpg
    ├── tech-explainer-thumb.jpg
    ├── tech-explainer-still.jpg
    └── ... (more projects)
```

---

## 🔧 Priority 4: Optional Edits (Fine-tuning)

### 7. **src/components/Services.jsx** (Optional)

**What you might change:** Service descriptions

Lines 6-28: Adjust service text if needed
```javascript
{
  title: "Video Editing",
  description: "Narrative-driven edits...",  // ← Adjust to match your style
}
```

Only edit if the default descriptions don't fit your positioning.

---

### 8. **src/components/Process.jsx** (Optional)

**What you might change:** Your workflow steps

Lines 5-22: Adjust process descriptions
```javascript
{
  number: "01",
  title: "Brief & Discovery",
  description: "Understanding your vision...",  // ← Customize if needed
}
```

The default process is industry-standard, but you can adjust to match your workflow.

---

### 9. **src/components/Hero.jsx** (Optional)

**What you might change:** Tagline and CTA button text

#### Line 19: Positioning statement
```javascript
Video Editor, Motion Graphics Designer & Creative Ad Creator
```

#### Line 21: Tagline
```javascript
Crafting cinematic edits, dynamic motion graphics, and visually compelling stories
```

#### Line 25: Button text
```javascript
View Selected Work
```

---

## 🚫 Do NOT Edit (Unless You Know What You're Doing)

These files control structure and configuration:

- ❌ `vite.config.js` - Build tool config
- ❌ `postcss.config.js` - CSS processing
- ❌ `package.json` - Dependencies
- ❌ `src/main.jsx` - App entry point
- ❌ `src/App.jsx` - Component assembly
- ❌ `src/index.css` - Tailwind imports

**Why not?** These files are configured correctly and changing them could break the site.

---

## 📝 Editing Workflow

**Step-by-step process:**

1. **Open file in your code editor** (VS Code recommended)
2. **Find the line numbers** mentioned in this guide
3. **Change the text** inside the quotes or JSX tags
4. **Save the file** (Ctrl+S or Cmd+S)
5. **Check your browser** - changes appear automatically with `npm run dev`

**If something breaks:**
- Undo your change (Ctrl+Z)
- Make sure you didn't accidentally delete quotes or brackets
- Check browser console (F12) for error messages

---

## 🎓 Understanding File Paths

**Absolute paths** (start with `/`)
```javascript
thumbnail: "/projects/image.jpg"  // ← Always use this format
```
This means: "Look in the `public/projects/` folder"

**Don't use:**
```javascript
thumbnail: "./projects/image.jpg"  // ❌ Wrong
thumbnail: "projects/image.jpg"    // ❌ Wrong
thumbnail: "../public/projects/image.jpg"  // ❌ Wrong
```

---

## 🔄 Testing Your Changes

After editing:

1. **Check desktop view** - Does everything look right?
2. **Check mobile view** - Toggle device toolbar in DevTools (F12 → Ctrl+Shift+M)
3. **Check all links** - Click every button and link
4. **Check project modals** - Click project cards, videos play correctly
5. **Check responsive** - Resize browser window, everything adjusts

---

## ✅ Quick Checklist

Essential edits before launch:

- [ ] Updated all projects in `src/data/projects.js`
- [ ] Added all images to `public/projects/`
- [ ] Updated email in `Contact.jsx`
- [ ] Updated all social links in `Contact.jsx`
- [ ] Wrote your bio in `About.jsx`
- [ ] Updated skills list in `About.jsx`
- [ ] Changed site title in `index.html`
- [ ] (Optional) Changed accent color in `tailwind.config.js`

---

## 💡 Pro Tips

### Keep a Backup
Before making big changes:
```bash
git add .
git commit -m "Before customization"
```

### Test One Change at a Time
Don't edit 5 files at once. Edit → Save → Test → Repeat.

### Use Find & Replace
In VS Code: Ctrl+H (or Cmd+H on Mac)
- Find: `contact@pixelchic.com`
- Replace: `your@email.com`
- Click "Replace All"

### Learn as You Go
Each time you edit, you're learning React and Tailwind. Don't worry if it feels unfamiliar at first.

---

**You're ready to customize! Start with the Priority 1 files and work your way down.** 🚀
