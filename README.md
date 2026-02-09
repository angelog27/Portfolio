# Portfolio Website

A clean, minimalist black and white portfolio website built with React.

## Features

- **Hero Section**: Large portrait image on the left, about section on the right
- **Tabbed Navigation**: Easy navigation between Experience, Education, Projects, and Skills
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean Aesthetic**: Black and white color scheme with modern typography
- **Smooth Animations**: Fade-in effects and smooth transitions

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
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

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Customization Guide

### 1. Replace Your Image

Replace the placeholder image in `portfolio.jsx`:

```jsx
<img 
  src="/your-image.jpg"  // Change this to your image path
  alt="Angelo"
  style={styles.image}
/>
```

Place your image in the `public` folder and reference it as `/your-image.jpg`

### 2. Update Personal Information

In `portfolio.jsx`, update the following sections:

**Name and Title:**
```jsx
<h1 style={styles.name}>Your Name</h1>
<h2 style={styles.title}>Your Title</h2>
```

**Bio:**
```jsx
<p style={styles.bio}>
  Your bio text here...
</p>
```

**Contact Links:**
```jsx
<a href="mailto:your.email@example.com" style={styles.contactLink}>Email</a>
<a href="https://github.com/yourusername" style={styles.contactLink}>GitHub</a>
<a href="https://linkedin.com/in/yourusername" style={styles.contactLink}>LinkedIn</a>
```

### 3. Add Your Experience

Update the `experience` array:

```jsx
const experience = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: 'Description of your role and achievements'
  },
  // Add more experiences
];
```

### 4. Add Your Education

Update the `education` array:

```jsx
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    period: 'Graduation Year',
    honors: ['Honor 1', 'Honor 2']
  },
];
```

### 5. Add Your Projects

Update the `projects` array:

```jsx
const projects = [
  {
    name: 'Project Name',
    description: 'Project description',
    tech: ['Tech 1', 'Tech 2', 'Tech 3']
  },
  // Add more projects
];
```

### 6. Update Your Skills

Modify the `skills` object:

```jsx
const skills = {
  'Category 1': ['Skill 1', 'Skill 2'],
  'Category 2': ['Skill 3', 'Skill 4'],
};
```

## Color Customization

The website uses a black and white theme, but you can customize colors by modifying the styles in `portfolio.jsx`:

- Background: `#000000` (black)
- Text: `#ffffff` (white)
- Secondary text: `#999999` and `#666666` (grays)
- Accents: `#cccccc` (light gray)

## Project Structure

```
├── index.html          # HTML entry point
├── main.jsx           # React entry point
├── App.jsx            # Main App component
├── App.css            # Global styles and animations
├── portfolio.jsx      # Portfolio component (main file)
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## Technologies Used

- React 18
- Vite
- CSS-in-JS (inline styles)

## Tips

1. **Images**: For best results, use a high-quality portrait image (recommended size: 600x800px or larger)
2. **Content**: Keep your bio concise and impactful (2-3 sentences)
3. **Projects**: Highlight your best 3-5 projects
4. **Responsive**: Test on different screen sizes to ensure everything looks good

## Deployment

You can deploy this portfolio to:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

Free to use and modify for your personal portfolio.
