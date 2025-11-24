# 🚀 Portfolio Website Deployment Guide

**Deploy your portfolio to production with a custom domain in under 30 minutes!**

---

## 📋 Prerequisites Checklist

Before deploying, ensure you have:

- [ ] GitHub account
- [ ] Domain name (optional, but recommended)
- [ ] EmailJS account configured (for contact form)
- [ ] Project pushed to GitHub
- [ ] All local changes committed

---

## 🎯 Quick Deploy Steps

### Step 1: Push to GitHub (If Not Done)

```bash
# Initialize git if needed
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for production deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Vercel (Recommended for Next.js)

#### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to [Vercel](https://vercel.com)**
   - Sign up/Login with GitHub

2. **Import Your Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   ⚠️ **Important**: Add these to **Production**, **Preview**, AND **Development** environments

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `your-project.vercel.app`

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? sathis-portfolio
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

### Step 3: Configure Custom Domain

#### Buy a Domain (if you don't have one)

Popular registrars:
- **Namecheap**: [namecheap.com](https://namecheap.com) - ~$10/year
- **GoDaddy**: [godaddy.com](https://godaddy.com) - ~$12/year
- **Google Domains**: [domains.google](https://domains.google) - ~$12/year
- **Cloudflare**: [cloudflare.com](https://cloudflare.com) - At cost (~$9-15/year)

Recommended domains:
- `yourname.com`
- `yourname.dev`
- `yourname.io`
- `yourname.tech`

#### Add Domain to Vercel

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"

2. **Add Your Domain**
   - Enter your domain (e.g., `yourdomain.com`)
   - Click "Add"

3. **Configure DNS**
   
   Vercel will show you DNS records to add. You have **2 options**:

   **Option A: Use Vercel's Nameservers (Recommended - Easiest)**
   ```
   In your domain registrar, change nameservers to:
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Option B: Add A/CNAME Records Manually**
   ```
   Add these records in your domain registrar:
   
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Verify Domain**
   - Wait 5-60 minutes for DNS propagation
   - Vercel will automatically verify and issue SSL certificate
   - Your site will be live at your custom domain! 🎉

---

### Step 4: Configure EmailJS for Production

1. **Login to [EmailJS Dashboard](https://dashboard.emailjs.com)**

2. **Whitelist Your Domain**
   - Go to "Account" → "Security"
   - Under "Allowed Origins"
   - Add your production domains:
     ```
     https://yourdomain.com
     https://www.yourdomain.com
     https://your-project.vercel.app
     ```

3. **Test Email Integration**
   - Visit `https://yourdomain.com/contact`
   - Submit a test message
   - Check your email inbox

---

## 🔧 Alternative Hosting Platforms

### Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables (same as Vercel)
6. Deploy!

### Deploy to Your Own Server (Advanced)

```bash
# Build the app
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

---

## ✅ Post-Deployment Checklist

After deployment, verify these items:

- [ ] Website loads at your custom domain
- [ ] SSL certificate is active (https://)
- [ ] All pages load correctly
  - [ ] Home page
  - [ ] About page
  - [ ] Projects page
  - [ ] Individual project pages
  - [ ] Skills page
  - [ ] Experience page
  - [ ] Contact page
- [ ] Contact form works
  - [ ] Form validation
  - [ ] Email delivery to sathis.rc.dev@gmail.com
  - [ ] Success message displays
- [ ] Images load properly
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Performance is good (run Lighthouse test)
- [ ] No console errors

---

## 🚀 Performance Optimization

After deployment, run these checks:

### 1. Lighthouse Test
- Open Chrome DevTools (F12)
- Go to "Lighthouse" tab
- Run audit
- Aim for 90+ scores in all categories

### 2. Speed Test
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

### 3. SEO Check
- [Google Search Console](https://search.google.com/search-console)
  - Submit your sitemap: `https://yourdomain.com/sitemap.xml`
  - Request indexing

---

## 🔄 Continuous Deployment

Once set up, every push to your main branch automatically deploys:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically deploys in 2-3 minutes!
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# If it works locally but fails on Vercel:
# - Check Node.js version in package.json
# - Verify all dependencies are in package.json
# - Check for TypeScript errors
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check they're added to all environments

### Domain Not Working
- Wait 24-48 hours for full DNS propagation
- Clear browser cache
- Try incognito mode
- Verify DNS records with: [DNS Checker](https://dnschecker.org/)

### Contact Form Not Working
- Verify EmailJS environment variables
- Check EmailJS allowed origins
- Test in production, not preview URLs
- Check browser console for errors

---

## 📊 Analytics (Optional)

Add analytics to track visitors:

### Google Analytics
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `app/layout.tsx`:
```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

### Vercel Analytics (Easier)
1. In Vercel Dashboard: Settings → Analytics
2. Click "Enable"
3. No code changes needed!

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet.

### Share Your Work
- Add to LinkedIn profile
- Include in resume/CV
- Share on social media
- Submit to:
  - [Product Hunt](https://producthunt.com)
  - [Hacker News - Show HN](https://news.ycombinator.com/showhn.html)
  - [Reddit r/webdev](https://reddit.com/r/webdev)

### Next Steps
- Set up monitoring (Vercel Analytics)
- Configure custom 404 page (already done!)
- Add blog section
- Set up email newsletter
- Add project case studies

---

## 📞 Support

If you need help:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. [Next.js Documentation](https://nextjs.org/docs)
3. [Vercel Discord](https://vercel.com/discord)

---

**Your Portfolio URL**: `https://yourdomain.com` 🌟

Good luck with your portfolio!

