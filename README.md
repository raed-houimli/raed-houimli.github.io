# Raed Houimli - Portfolio

A production-grade personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Page sections
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/               # Content data
│   └── content.ts
├── pages/              # Page components
│   └── Home.tsx
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## ✨ Features

- ⚡️ Fast and optimized with Vite
- 🎨 Clean, minimal design
- 🌓 Dark mode support
- 📱 Fully responsive
- ♿️ Accessible
- 🎭 Subtle animations with Framer Motion
- 🎯 SEO-ready
- 📦 Production-ready code quality

## 🎨 Design Philosophy

- Senior-level, minimal aesthetic
- Neutral colors with muted accents
- Excellent typography and spacing
- Focus on content and readability
- Professional engineering portfolio

## 📝 Content Customization

Update your personal information, experience, skills, and projects in:
- `src/data/content.ts`

## 🚢 Deployment

Build the production bundle:

```bash
npm run build
```

The `dist` folder will contain the optimized static files ready for deployment.

### Recommended Platforms
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## 📄 License

MIT

---

Built with ❤️ by Raed Houimli
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
