# Customization Guide

This guide helps you customize the portfolio to match your personal brand and content.

## 🎨 Content Updates

### Personal Information

Edit `src/data/content.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title • Your Specialization',
  location: 'Your City, Country',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  tagline: 'Your professional tagline...',
};
```

### About Section

Update the `about.summary` in `src/data/content.ts` with your professional story.

### Experience

Modify the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: 'unique-id',
    title: 'Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Start Year – End Year',
    description: 'Brief role description',
    highlights: [
      'Achievement with metrics',
      'Impact-driven accomplishment',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
];
```

### Skills

Update `skillCategories` with your skill groups:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: 'Category Name',
    skills: [
      { name: 'Skill Name', level: 'expert' }, // levels: expert, advanced, intermediate
    ],
  },
];
```

### Projects

Update the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Brief description',
    problem: 'What problem did it solve?',
    solution: 'How did you solve it?',
    technologies: ['Tech stack'],
    architecture: ['Architecture patterns'],
    github: 'https://github.com/user/repo',
    live: 'https://project-url.com', // optional
    featured: true, // for highlighting
  },
];
```

### Education & Certifications

Update in `src/data/content.ts`:

```typescript
export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Degree Name',
    institution: 'University Name',
    period: 'Start – End',
    location: 'City, Country',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Year',
    credentialId: 'Optional ID',
  },
];
```

## 🎨 Design Customization

### Colors

Edit `src/index.css` in the `@theme` section:

```css
@theme {
  --color-accent-primary: #3b82f6; /* Your primary accent color */
  --color-accent-secondary: #6366f1; /* Your secondary accent color */
  
  /* Light mode colors */
  --color-background-light: #fafafa;
  --color-surface-light: #ffffff;
  --color-border-light: #e5e5e5;
  --color-text-primary-light: #171717;
  
  /* Dark mode colors */
  --color-background-dark: #0a0a0a;
  --color-surface-dark: #141414;
  --color-border-dark: #262626;
  --color-text-primary-dark: #fafafa;
}
```

### Typography

Change fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');

@theme {
  --font-family-sans: 'Your Font', system-ui, sans-serif;
  --font-family-mono: 'Your Mono Font', monospace;
}
```

### Spacing

Adjust section padding in `src/index.css`:

```css
.section-padding {
  padding-top: 4rem;    /* Adjust as needed */
  padding-bottom: 4rem;
}
```

### Logo

Replace "RH" in `src/components/Header.tsx`:

```tsx
<Link to="/" className="...">
  Your Logo or Text
</Link>
```

## 📱 Adding New Sections

1. Create a new component in `src/components/sections/`:

```tsx
// src/components/sections/NewSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const NewSection: React.FC = () => {
  return (
    <section id="new-section" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Section
          </h2>
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  );
};
```

2. Add to `src/pages/Home.tsx`:

```tsx
import { NewSection } from '../components/sections/NewSection';

export const Home: React.FC = () => {
  return (
    <>
      {/* ... other sections ... */}
      <NewSection />
    </>
  );
};
```

3. Add navigation link in `src/components/Header.tsx`:

```tsx
const navigation = [
  // ... existing items ...
  { name: 'New Section', href: '/#new-section' },
];
```

## 🖼️ Adding Images

1. Place images in `public/` folder:
```
public/
  └── images/
      ├── profile.jpg
      └── project-screenshot.png
```

2. Reference in components:
```tsx
<img src="/images/profile.jpg" alt="Description" />
```

## 🔗 Social Links

### Adding More Social Links

1. Update `src/data/content.ts`:
```typescript
export const personalInfo = {
  // ... existing fields ...
  twitter: 'https://twitter.com/username',
  website: 'https://yourwebsite.com',
};
```

2. Add icons to `src/components/Footer.tsx`:
```tsx
<a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
  {/* Twitter SVG icon */}
</a>
```

## 🎭 Animation Customization

Adjust animations in component files:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.6,    // Animation speed
    delay: 0.2,       // Start delay
    ease: 'easeOut'   // Easing function
  }}
>
```

## 📊 Analytics

### Google Analytics

1. Create `src/components/Analytics.tsx`:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'YOUR-GA-ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};
```

2. Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎯 SEO Optimization

Update `index.html` meta tags:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, keywords, here" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
```

## 🌐 Adding Blog/Articles Section

1. Create data structure in `src/types/index.ts`:

```typescript
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  tags: string[];
}
```

2. Add articles data to `src/data/content.ts`
3. Create Articles component
4. Add to Home page

## 💡 Tips

- Keep animations subtle and professional
- Maintain consistent spacing throughout
- Use semantic HTML for accessibility
- Test on multiple devices and browsers
- Keep content concise and impact-focused
- Update regularly with new projects and achievements

## 🔧 Advanced Customization

For deep customization, you can:
- Modify layout structure in `src/components/Layout.tsx`
- Add new pages with React Router
- Integrate headless CMS (Contentful, Sanity)
- Add contact form with backend integration
- Implement blog with MDX
- Add animations library (GSAP, Three.js)

## 📝 Checklist Before Launch

- [ ] Update all personal information
- [ ] Add real project links and descriptions
- [ ] Replace placeholder email/links
- [ ] Add professional photo (if desired)
- [ ] Test all navigation and links
- [ ] Verify responsive design
- [ ] Check dark mode appearance
- [ ] Optimize images
- [ ] Test page load speed
- [ ] Validate SEO meta tags
- [ ] Proofread all content
