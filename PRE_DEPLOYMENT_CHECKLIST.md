# 📋 Pre-Deployment Checklist

Before deploying to production, complete this checklist to ensure a smooth launch.

---

## 🔍 Code Quality

- [ ] All TypeScript errors resolved
  ```bash
  npm run lint
  ```

- [ ] Build succeeds locally
  ```bash
  npm run build
  npm start
  # Visit http://localhost:3000 and test all pages
  ```

- [ ] No console errors in production build
  - Open DevTools Console and check each page

---

## 🔐 Environment Variables

- [ ] `.env.local` is in `.gitignore` (never commit secrets!)
- [ ] Environment variables documented in `env.local.template`
- [ ] EmailJS credentials ready:
  - [ ] Service ID
  - [ ] Template ID
  - [ ] Public Key

---

## 📧 EmailJS Configuration

- [ ] EmailJS account created at [emailjs.com](https://emailjs.com)
- [ ] Email service connected (Gmail)
- [ ] Email template created with correct template variables:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`
  - `{{reply_to}}`
- [ ] Test email sent successfully from local development
- [ ] Auto-reply template configured (optional)

---

## 🎨 Content Review

- [ ] All personal information is accurate
  - [ ] Name and title correct
  - [ ] Email address correct
  - [ ] Social media links work
  - [ ] GitHub profile link works
  - [ ] LinkedIn profile link works

- [ ] Project information complete
  - [ ] All project descriptions accurate
  - [ ] All project links work
  - [ ] All project images load
  - [ ] Technologies listed correctly

- [ ] About page content finalized
- [ ] Experience timeline is up to date
- [ ] Skills are current and accurate

---

## 🖼️ Assets

- [ ] All images optimized (compressed, proper format)
- [ ] Project screenshots/thumbnails in place
- [ ] Logo/favicon present (`public/logo.svg`)
- [ ] All image paths correct
- [ ] Images load from `public/images/` directory

---

## 🔗 Links & Navigation

- [ ] All internal links work
- [ ] All external links:
  - [ ] Open in new tab (`target="_blank"`)
  - [ ] Have `rel="noopener noreferrer"`
  - [ ] Lead to correct destinations

- [ ] Navigation menu works on:
  - [ ] Desktop
  - [ ] Tablet
  - [ ] Mobile

---

## 📱 Responsive Design

Test on multiple screen sizes:

- [ ] Desktop (1920px+)
- [ ] Laptop (1280px-1920px)
- [ ] Tablet (768px-1024px)
- [ ] Mobile (375px-767px)

Check each page:
- [ ] Home
- [ ] About
- [ ] Projects
- [ ] Individual project pages
- [ ] Skills
- [ ] Experience
- [ ] Contact

---

## ✅ Functionality Testing

### Contact Form
- [ ] Form validation works
- [ ] Required fields enforced
- [ ] Email format validation
- [ ] Success message shows after submission
- [ ] Error handling works
- [ ] Form resets after successful submission
- [ ] Email actually arrives at destination

### Navigation
- [ ] Header navigation works
- [ ] Footer links work
- [ ] Breadcrumbs work (if applicable)
- [ ] Command palette works (Cmd/Ctrl + K)
- [ ] Back/forward browser buttons work

### Animations
- [ ] Page transitions smooth
- [ ] Hover effects work
- [ ] Loading states display correctly
- [ ] Scroll animations trigger properly
- [ ] No jank or performance issues

---

## 🚀 Performance

Run local production build and check:

- [ ] Initial page load < 3 seconds
- [ ] Time to Interactive (TTI) < 5 seconds
- [ ] No layout shift (CLS score good)
- [ ] Images load progressively
- [ ] Code splitting working (check Network tab)

Tools to use:
- Chrome DevTools Lighthouse
- Network tab (throttle to Slow 3G)
- Performance tab

---

## 🔒 Security

- [ ] No API keys committed to Git
- [ ] No passwords or secrets in code
- [ ] Environment variables use `NEXT_PUBLIC_` prefix only for client-side
- [ ] External links have security attributes
- [ ] No console.log with sensitive data
- [ ] CSP headers configured (in `vercel.json`)

---

## 📊 SEO

- [ ] Page titles unique and descriptive
- [ ] Meta descriptions present
- [ ] Open Graph tags for social sharing
- [ ] `robots.txt` allows indexing
- [ ] `sitemap.xml` generated
- [ ] Semantic HTML used
- [ ] Alt text on all images
- [ ] Heading hierarchy correct (h1, h2, h3...)

Check files:
- `app/layout.tsx` - metadata
- `app/robots.ts` - robots.txt
- `app/sitemap.ts` - sitemap.xml

---

## 🌐 Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 📝 Documentation

- [ ] README.md updated
- [ ] Deployment instructions clear
- [ ] Environment variables documented
- [ ] License file present (if needed)

---

## 🔄 Version Control

- [ ] All changes committed
  ```bash
  git status
  # Should show "nothing to commit, working tree clean"
  ```

- [ ] Pushed to GitHub
  ```bash
  git push origin main
  ```

- [ ] Repository is public (or ready to connect to Vercel)

---

## 🎯 Final Steps Before Deploy

1. **Create `.env.production` template**
   - Document all required environment variables
   - Include instructions for production setup

2. **Test production build one more time**
   ```bash
   npm run build
   npm start
   ```
   - Visit every page
   - Test every feature
   - Check console for errors

3. **Backup important data**
   - Export EmailJS settings
   - Save environment variables securely
   - Document any custom configurations

4. **Prepare deployment accounts**
   - [ ] GitHub account ready
   - [ ] Vercel account ready (or hosting platform)
   - [ ] Domain registrar account (if using custom domain)
   - [ ] EmailJS account credentials saved

---

## ✨ Ready to Deploy?

If all items are checked, you're ready to deploy! 🚀

Proceed to `DEPLOYMENT_GUIDE.md` for step-by-step deployment instructions.

---

## 🆘 Issues Found?

If you found issues during this checklist:

1. Fix them locally
2. Test the fix
3. Commit changes
4. Push to GitHub
5. Run through relevant checklist items again

**Don't deploy until all critical items are checked!**

---

**Last Review Date**: _________________

**Reviewed By**: _________________

**Ready to Deploy**: ☐ Yes  ☐ No (fix issues first)






