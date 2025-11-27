# ⚡ Quick Deploy - Get Live in 10 Minutes

**The fastest way to deploy your portfolio to production.**

---

## 🚀 Fastest Path: GitHub + Vercel

### Step 1: Push to GitHub (2 minutes)

```bash
# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Push (if repository already exists)
git push origin main
```

**If you don't have a GitHub repository:**
1. Go to [github.com/new](https://github.com/new)
2. Create repository (name: `portfolio` or similar)
3. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Vercel (3 minutes)

1. **Go to [vercel.com/new](https://vercel.com/new)**

2. **Login with GitHub** (click "Continue with GitHub")

3. **Import your repository**
   - You'll see your repositories
   - Click "Import" next to your portfolio repo

4. **Configure (leave defaults, just add environment variables)**
   
   Click "Environment Variables" dropdown and add:
   
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your template ID |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your public key |

   ℹ️ Get these from: [dashboard.emailjs.com](https://dashboard.emailjs.com)

5. **Click "Deploy"**
   
   Wait 2-3 minutes... ☕
   
   ✅ **Done!** Your site is live at: `https://your-project.vercel.app`

---

### Step 3: Add Custom Domain (5 minutes) - OPTIONAL

**If you have a domain:**

1. In Vercel, go to your project → Settings → Domains

2. Add your domain (e.g., `yourdomain.com`)

3. **Choose easy option:** Update nameservers
   
   Go to your domain registrar and change nameservers to:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

4. Wait 10-60 minutes for DNS to propagate

5. ✅ Live at `https://yourdomain.com`!

**Don't have a domain yet?**
- Skip this step - your Vercel URL works great!
- Or buy one later at [Namecheap](https://namecheap.com) (~$10/year)

---

## ✅ Final Step: Whitelist Domain in EmailJS (1 minute)

⚠️ **Important:** Without this, contact form won't work in production!

1. Go to [dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Account → Security
3. Under "Allowed Origins", click "Add Origin"
4. Add your production URL:
   ```
   https://your-project.vercel.app
   ```
   (or `https://yourdomain.com` if using custom domain)
5. Save

---

## 🎉 You're Live!

Test your site:
- [ ] Visit your production URL
- [ ] Check all pages load
- [ ] Test contact form
- [ ] Verify email arrives

---

## 🔄 Auto-Deploy Enabled!

Every time you push to GitHub, Vercel automatically deploys:

```bash
# Make changes
git add .
git commit -m "Update project"
git push

# Vercel deploys automatically in 2-3 minutes! 🚀
```

---

## 📱 Share Your Work

Your portfolio is live! Share it:
- ✅ Add to LinkedIn
- ✅ Include in resume
- ✅ Share on Twitter/X
- ✅ Tell friends and family

---

## 🆘 Troubleshooting

### Build fails?
```bash
# Test locally first:
npm run build

# If it works locally, check Vercel logs for specific error
```

### Contact form not working?
1. Check environment variables are added
2. Verify domain whitelisted in EmailJS
3. Open browser console for errors

### Domain not working?
- Wait 24 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org) to verify

---

## 📚 Need More Details?

See `DEPLOYMENT_GUIDE.md` for comprehensive instructions.

---

**That's it! Your portfolio is live! 🌟**

Production URL: `https://your-project.vercel.app`

(Update this with your actual URL)






