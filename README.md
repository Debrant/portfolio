# Modern Astro Portfolio Template

A clean, customizable portfolio template built with Astro, React, and Tailwind CSS. Features glassmorphism effects, smooth animations, dark/light mode, and a fully responsive design.

## ✨ Features

- **Modern Design** – Clean, professional layout with glassmorphism effects
- **Dark/Light Mode** – Automatic theme switching with system preference detection
- **Fully Responsive** – Optimized for mobile, tablet, and desktop
- **Smooth Animations** – Powered by Framer Motion for engaging interactions
- **Easy Customization** – All content managed through a single data file
- **SEO Optimized** – Built-in meta tags and structured data
- **Fast Performance** – Static site generation with Astro
- **Type Safe** – Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. **Clone or download this template**
   ```bash
   # If you have the files locally
   cd your-portfolio-folder
   
   # Install dependencies
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

3. **Open your browser**
   Visit `http://localhost:4321` to see your portfolio

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── ... (your images, resume, etc.)
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   └── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeProvider.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── data.ts          # ← Main configuration file
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Customization

### 1. Update Your Information

Edit `src/lib/data.ts` to add your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your City, State",
  email: "your.email@example.com",
  bio: "Your bio here...",
  // Add your social links, avatar, resume, etc.
};
```

### 2. Add Your Content

Update the following sections in `src/lib/data.ts`:

- **Work Experience** – Add your job history
- **Education** – Your academic background  
- **Skills** – Technologies and tools you use
- **Projects** – Showcase your work
- **Awards** – Recognition you've received

### 3. Customize Colors

The template uses CSS custom properties for easy color customization. Update `src/lib/data.ts`:

```typescript
export const themeConfig = {
  primaryColor: {
    50: "239 246 255",   // Lightest shade
    500: "59 130 246",   // Main color
    950: "23 37 84"      // Darkest shade
  },
  // ... more color configuration
};
```

Or modify the CSS variables directly in `src/styles/global.css`:

```css
:root {
  --primary-500: 59 130 246;  /* Blue */
  --primary-600: 37 99 235;
  /* Change to your brand colors */
}
```

### 4. Add Your Assets

- **Avatar/Profile Photo**: Add to `/public/` and update `personalInfo.avatar`
- **Resume**: Add PDF to `/public/` and update `personalInfo.resume`  
- **Project Images**: Add to `/public/` and reference in project data
- **Favicon**: Replace `/public/favicon.svg` with your own

### 5. Customize Navigation

Update the navigation items in `src/lib/data.ts`:

```typescript
export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // Add, remove, or modify as needed
];
```

## 🎯 Building Additional Components

The template includes a hero section as an example. To add more sections:

1. **Create a new component** in `src/components/sections/`
2. **Import and use** in `src/pages/index.astro`
3. **Add data** to `src/lib/data.ts` if needed

Example component structure:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { yourData } from '../../lib/data';

export default function YourSection() {
  return (
    <section id="your-section" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

## 🎨 Styling Guide

### CSS Classes Available

- **Layout**: `section-padding`, `container-padding`
- **Buttons**: `btn-primary`, `btn-secondary`, `btn-ghost`
- **Cards**: `card`, `card-hover`
- **Effects**: `glass`, `glass-strong`, `text-gradient`
- **Focus**: `focus-visible`

### Animation Utilities

- `animate-fadeIn` – Fade in effect
- `animate-slideUp` – Slide up animation
- `animate-slideDown` – Slide down animation

### Responsive Design

The template uses Tailwind's responsive prefixes:
- `sm:` – 640px and up
- `md:` – 768px and up  
- `lg:` – 1024px and up
- `xl:` – 1280px and up

## 🌙 Dark Mode

Dark mode is automatically handled by the `ThemeProvider` component. It:
- Detects system preference on first visit
- Remembers user's choice in localStorage
- Provides a toggle button in the navigation

## 📱 Responsive Behavior

- **Mobile**: Collapsible navigation menu
- **Tablet**: Adjusted spacing and typography
- **Desktop**: Full layout with hover effects

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or  
yarn preview
```

### Deploy Options

The template works with any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Cloudflare Pages**: Connect your repository
- **Any static host**: Upload the `dist/` folder contents

### Example Vercel Deployment

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## 🛠️ Development Tips

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add data interface to `src/lib/data.ts` if needed
3. Import in `src/pages/index.astro`
4. Update navigation if needed

### Performance Best Practices

- Optimize images (use WebP format when possible)
- Keep bundle size small (only import what you need)
- Use Astro's static generation for best performance
- Lazy load images and components when appropriate

### SEO Optimization

- Update `seoConfig` in `src/lib/data.ts`
- Add structured data for better search results
- Optimize meta descriptions and titles
- Include relevant keywords

## 🎨 Advanced Customization

### Custom Animations

Add custom animations in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    keyframes: {
      customBounce: {
        '0%, 100%': { transform: 'translateY(-25%)' },
        '50%': { transform: 'translateY(0)' },
      }
    },
    animation: {
      'custom-bounce': 'customBounce 1s infinite',
    }
  }
}
```

### Custom Components

Create reusable components for consistent styling:

```tsx
// src/components/ui/Badge.tsx
export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary-100 text-primary-800',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

## 🤝 Contributing

This template is open source! Feel free to:
- Report bugs
- Suggest improvements  
- Submit pull requests
- Share your customizations

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)  
- Animated with [Framer Motion](https://framer.com/motion)
- Icons from [Heroicons](https://heroicons.com)

---

**Happy building!** 🚀

If you found this template helpful, please consider giving it a star ⭐ and sharing it with others.