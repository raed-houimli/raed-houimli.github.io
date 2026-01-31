# 🚀 Deployment Checklist

## Pre-Deployment

### Content
- [x] Personal info accurate in `src/data/content.ts`
- [x] All experience dates correct (Jul 2020 - Nov 2025)
- [x] Project descriptions complete
- [x] Skills list up to date
- [x] Contact information verified

### Images
- [ ] **REQUIRED**: Add `profile.jpg` to `/public/` directory
  - Minimum size: 512x512px
  - Format: JPG or PNG
  - Square aspect ratio (1:1)
  - Professional headshot
  - File size: < 500KB recommended

### SEO
- [x] Meta tags configured in `index.html`
- [x] Sitemap.xml in `/public/`
- [x] Robots.txt in `/public/`
- [x] Structured data (JSON-LD) added
- [x] Open Graph tags set
- [x] Twitter Card configured

### GitHub Secrets
Configure in repository Settings → Secrets and variables → Actions:
- [ ] `HOSTINGER_SERVER_IP`
- [ ] `HOSTINGER_USERNAME`
- [ ] `HOSTINGER_PASSWORD`

### Testing
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Test all navigation links
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Test dark/light mode toggle
- [ ] Test contact form/calendar
- [ ] Check browser console for errors

### Domain & Hosting
- [ ] Domain configured: houimliraed.dev
- [ ] SSL certificate active
- [ ] DNS records pointing correctly
- [ ] FTP access confirmed

## Post-Deployment

- [ ] Verify site loads: https://houimliraed.dev
- [ ] Test all pages and sections
- [ ] Verify images load correctly
- [ ] Test social media share previews
- [ ] Submit to Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Test from multiple devices
- [ ] Check site speed (PageSpeed Insights)
- [ ] Verify analytics tracking (if configured)

## Continuous Maintenance

- [ ] Update projects regularly
- [ ] Keep skills section current
- [ ] Monitor GitHub Actions deployments
- [ ] Review and respond to contact requests
- [ ] Update blog links from Medium
- [ ] Refresh testimonials (if added)

## Emergency Contacts

- **Hosting Support**: Hostinger support portal
- **Domain Registrar**: Check domain provider
- **GitHub**: github.com/houimliraed/portfolio

---

**Last Updated**: 2024-01-31
**Next Review**: Monthly
