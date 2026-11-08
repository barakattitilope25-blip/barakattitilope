# Quick Reference - What You Built

## 📋 File Structure Overview

```
pixelchic-portfolio/
│
├── public/                    # Static assets (images, videos)
│   └── projects/              # PUT YOUR PROJECT IMAGES HERE
│
├── src/
│   ├── components/            # UI sections
│   │   ├── Navigation.jsx     # Top menu bar
│   │   ├── Hero.jsx          # Full-screen opening section
│   │   ├── WorkGallery.jsx   # Project grid with video modals
│   │   ├── Services.jsx      # What you offer
│   │   ├── Process.jsx       # How you work
│   │   ├── About.jsx         # Your bio and skills
│   │   ├── Contact.jsx       # Contact methods
│   │   └── Footer.jsx        # Bottom of page
│   │
│   ├── data/
│   │   └── projects.js       # ⭐ EDIT THIS - Your project data
│   │
│   ├── App.jsx               # Main app (combines all components)
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── index.html                # HTML template
├── package.json              # Project dependencies
├── tailwind.config.js        # Color/design settings
└── vite.config.js           # Build tool config
```

---

## 🎯 Main Files to Edit

### 1. **src/data/projects.js** ⭐ MOST IMPORTANT
This is where you add all your project information. Everything else pulls from here.

### 2. **src/components/Contact.jsx**
Update your email, LinkedIn, and social media links.

### 3. **src/components/About.jsx**
Write your bio and list your skills.

### 4. **public/projects/** folder
Put all your thumbnail and still images here.

### 5. **tailwind.config.js** (optional)
Change the primary color if you want a different accent color.

---

## 🎨 Key Design Features

### Colors
- **Background:** Dark charcoal/black (`#0a0a0a`, `#1a1a1a`)
- **Text:** White/off-white
- **Accent:** Electric blue (`#00d4ff`) - change in `tailwind.config.js`

### Typography
- Font: Inter (loaded from Google Fonts)
- Bold, large headings for impact
- Generous spacing for readability

### Layout
- **Mobile:** Single column, stacked sections
- **Desktop:** Two-column grid for projects
- **Responsive:** Automatically adjusts between screen sizes

---

## 🔧 Key Technical Concepts

### React Components
Each section of your website is a separate "component" - a reusable piece of UI. Think of them like building blocks.

**Example:** The `Navigation.jsx` component creates the top menu bar.

### Props and Data
The `projects.js` file stores all your project data in one place. Components read from this file to display projects.

**Why?** You can update your content without touching the UI code.

### Tailwind CSS
Styling is done with utility classes directly in the JSX:
- `bg-dark-900` = dark background
- `text-primary` = accent color text
- `px-6 py-4` = padding

### State Management
React "state" tracks things that change (like whether the mobile menu is open, or which project video is playing).

You'll see `useState` hooks in components like Navigation and WorkGallery.

---

## 📱 Responsive Design Breakpoints

- **Mobile:** `< 768px` - Single column layout
- **Tablet:** `768px - 1024px` - Two columns for projects
- **Desktop:** `> 1024px` - Full cinematic layout

Tailwind classes handle this automatically:
- `md:text-5xl` = "on medium screens and up, make text size 5xl"
- `grid-cols-1 md:grid-cols-2` = "1 column on mobile, 2 on desktop"

---

## 🎬 Project Categories Explained

Use these exact category names in `projects.js`:

1. **"Motion Graphics"** - 3D work, animated graphics, Cinema 4D projects
2. **"Video Edit"** - Narrative edits, commercials, vlogs
3. **"AI Advertisement"** - AI-generated or AI-assisted creative work
4. **"Explainer Video"** - Educational, how-to, corporate explainers

---

## 🏷️ Project Types Explained

1. **"client"** - Paid work for clients
   - Badge color: Blue (matches accent)
   - Shows you have commercial experience

2. **"personal"** - Self-initiated creative projects
   - Badge color: Gray
   - Shows your creative initiative

3. **"speculative"** - Concept/practice work
   - Badge color: Purple
   - Shows experimentation and skill development

---

## 🚀 Commands You'll Use

### Development
```bash
npm run dev
```
Starts a local server at `http://localhost:5173`. Changes update automatically.

### Production Build
```bash
npm run build
```
Creates optimized files for deployment in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Test the production build locally before deploying.

---

## 🎓 Learning Path

### Beginner (You Are Here)
- ✅ Understanding file structure
- ✅ Editing project data in `projects.js`
- ✅ Updating text content in components
- ⏳ Customizing colors and styles

### Intermediate (Next Steps)
- Adding new components
- Customizing layouts
- Understanding React hooks (`useState`, `useEffect`)
- Adding animations

### Advanced (Future Goals)
- Adding individual project pages (requires React Router)
- Integrating a CMS (Contentful, Sanity)
- Adding a contact form backend
- Advanced animations and interactions

---

## 💡 Tips for Success

### Content First
Get your project videos and images ready before customizing design. Content drives everything.

### One Change at a Time
Edit one file, save, and check the browser before making more changes.

### Use Browser DevTools
Right-click → Inspect to see how elements are styled. Great for learning.

### Git Commits
Commit your changes frequently:
```bash
git add .
git commit -m "Added project data"
```

### Backup
Keep your project on GitHub. It's free backup + required for deployment.

---

## 🆘 When Things Break

### White screen?
- Check browser console (F12) for errors
- Make sure all imports in `App.jsx` match component filenames

### Styles not working?
- Make sure Tailwind classes are spelled correctly
- Check `tailwind.config.js` is configured properly

### Can't find a file?
- File paths are case-sensitive
- Check you're in the right directory in your terminal

### Dev server won't start?
```bash
# Kill the process and restart
Ctrl+C
npm run dev
```

---

## 🎯 Next Steps

1. ✅ Run `npm run dev` to see your portfolio
2. ⏳ Add your actual project data to `projects.js`
3. ⏳ Upload project images to `public/projects/`
4. ⏳ Update contact info and bio
5. ⏳ Deploy to Netlify or Vercel

---

**Remember:** You don't need to understand everything at once. Focus on getting your content in first, then explore customization as you get comfortable. The README and SETUP_GUIDE have step-by-step instructions. 🚀
