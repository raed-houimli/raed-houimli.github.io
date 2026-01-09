# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Build command: `npm run build`
- Output directory: `dist`

## Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

Or drag and drop the `dist` folder at [netlify.com](https://netlify.com).

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Environment Variables

For production builds, create a `.env.production` file:

```env
VITE_API_URL=https://api.production.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

Already included:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Asset optimization
- ✅ Lazy loading

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify dark mode toggle
- [ ] Test responsive design on mobile
- [ ] Check loading times
- [ ] Validate SEO meta tags
- [ ] Test contact form/email links
- [ ] Verify all external links open in new tabs
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify SSL certificate

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Vercel Analytics
- Web Vitals monitoring

## Updates

To update the live site:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main

# Most platforms auto-deploy on push
# Or manually redeploy using platform CLI
```
