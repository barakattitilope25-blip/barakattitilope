# PixelChic Portfolio

A professional portfolio website for PixelChic - Video Editor, Motion Graphics Designer, and Creative Ad Creator.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
pixelchic-portfolio/
├── public/
│   └── projects/           # Place your project images and thumbnails here
├── src/
│   ├── components/         # React components for each section
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── WorkGallery.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js     # Update this file with your project data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## 🎨 Customization Guide

### 1. Update Project Data

Edit `src/data/projects.js` to add your actual projects:

```javascript
{
  id: "unique-project-id",
  title: "Your Project Name",
  category: "Motion Graphics", // or "Video Edit", "AI Advertisement", "Explainer Video"
  type: "client", // or "personal", "speculative"
  thumbnail: "/projects/your-thumbnail.jpg",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  stillImage: "/projects/your-still.jpg",
  description: "Brief project description",
  tools: ["Cinema 4D", "After Effects"],
  year: "2024",
  featured: true // Set one project as featured for the hero section
}
```

### 2. Add Project Assets

Place your project images in the `public/projects/` folder:
- Thumbnails: 16:9 aspect ratio, ~800px wide
- Hero stills: High resolution, 1920px+ wide
- File format: JPG or PNG

### 3. Update Contact Information

Edit `src/components/Contact.jsx`:
- Replace `contact@pixelchic.com` with your email
- Update LinkedIn, Behance, Instagram, and YouTube URLs

### 4. Customize About Section

Edit `src/components/About.jsx` to reflect your:
- Professional background
- Skills and tools
- Work philosophy

### 5. Change Colors (Optional)

Edit `tailwind.config.js` to change the accent color:
```javascript
colors: {
  primary: '#00d4ff', // Change this to your preferred color
}
```

## 📦 Adding Your Videos

### Option 1: YouTube (Free)
1. Upload your videos to YouTube (can be "Unlisted")
2. Get the embed URL: `https://www.youtube.com/embed/VIDEO_ID`
3. Update the `videoUrl` field in `projects.js`

### Option 2: Vimeo (Recommended for Premium Look)
1. Upload to Vimeo (Plus or Pro plan recommended)
2. Get the embed URL: `https://player.vimeo.com/video/VIDEO_ID`
3. Update the `videoUrl` field in `projects.js`

## 🚢 Deployment

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings

## 📝 Future Enhancements

- [ ] Add individual project case study pages
- [ ] Add downloadable CV/resume
- [ ] Add blog/insights section
- [ ] Integrate contact form with backend

## 🛠️ Technologies

- **Vite** - Fast build tool
- **React** - UI library
- **Tailwind CSS** - Styling
- **YouTube/Vimeo** - Video hosting

## 📄 License

This is a personal portfolio project. Feel free to use as inspiration for your own portfolio.

---

**Built with ❤️ for PixelChic**
