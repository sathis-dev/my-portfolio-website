# ⚡ Complete EmailJS Setup - Do This Now!

## 🎯 Goal
Get your contact form sending real emails in **5 minutes**.

---

## 📋 Step 1: Sign Up for EmailJS (2 minutes)

1. **Open:** https://www.emailjs.com/
2. **Click:** "Sign Up" button
3. **Use:** Google account for instant signup
4. **Verify:** Check your email and click verification link

✅ **Done!** You now have an EmailJS account.

---

## 📧 Step 2: Connect Your Gmail (1 minute)

1. **In EmailJS Dashboard, click:** "Email Services"
2. **Click:** "Add New Service"
3. **Select:** Gmail
4. **Click:** "Connect Account"
5. **Sign in** with your Google account
6. **Allow** EmailJS to send emails

✅ **You'll see:** Your Gmail service with a **Service ID** (like `service_abc123`)

📝 **COPY THIS SERVICE ID** - You'll need it!

---

## 📝 Step 3: Create Email Template (1 minute)

1. **In EmailJS Dashboard, click:** "Email Templates"
2. **Click:** "Create New Template"
3. **Copy-paste this into the template:**

**Template Name:** Portfolio Contact Form

**Subject:**
```
New Contact: {{subject}} from {{from_name}}
```

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. **Click:** "Save"

✅ **You'll see:** Your template with a **Template ID** (like `template_xyz789`)

📝 **COPY THIS TEMPLATE ID** - You'll need it!

---

## 🔑 Step 4: Get Your Public Key (30 seconds)

1. **In EmailJS Dashboard, click:** "Account" (top right)
2. **Click:** "API Keys"
3. **Copy** your Public Key (looks like: `aBcDeFgHiJkLmNoPqR`)

📝 **COPY THIS PUBLIC KEY** - You'll need it!

---

## 💻 Step 5: Configure Your Project (1 minute)

### **Option A: Use Setup Script (Easiest)**

```bash
# Run the setup helper
node setup-email.js
```

Follow the prompts and paste your 3 IDs when asked!

### **Option B: Manual Setup**

1. **Create a new file** in your project root named `.env.local`

2. **Copy this content** into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
```

3. **Replace** the values with YOUR actual IDs:
   - `service_abc123` → Your Service ID from Step 2
   - `template_xyz789` → Your Template ID from Step 3
   - `aBcDeFgHiJkLmNoPqR` → Your Public Key from Step 4

### **Option C: Copy Template**

```bash
# Copy the template file
cp env.local.template .env.local

# Edit .env.local and replace xxx values with your IDs
```

---

## 🚀 Step 6: Restart & Test (1 minute)

1. **Restart your development server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Open your contact page:**
   ```
   http://localhost:3000/contact
   ```

3. **Fill out the form** with test data:
   - Name: Test User
   - Email: your-email@gmail.com
   - Subject: Test Message
   - Message: Testing my contact form!

4. **Click "Send Message"**

5. **Check your email inbox** (the one you connected to EmailJS)

✅ **Success!** You should receive an email within seconds!

---

## ✅ Verification Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Copied Service ID
- [ ] Created email template
- [ ] Copied Template ID
- [ ] Got Public Key from Account settings
- [ ] Created `.env.local` file in project root
- [ ] Added all 3 credentials to `.env.local`
- [ ] Restarted dev server
- [ ] Tested form at /contact
- [ ] Received test email successfully

---

## 🆘 Quick Fixes

### "EmailJS configuration missing"
→ You forgot to create `.env.local` or restart the server

### No email received
→ Check spam folder, verify Service is connected in EmailJS dashboard

### "Too many attempts"
→ Wait 1 hour or clear browser localStorage (F12 → Application → Local Storage)

### Still stuck?
→ Run: `node setup-email.js` for guided setup

---

## 📞 Your Configuration

**Emails will be sent to:** sathis.rc.dev@gmail.com

**Free tier includes:** 200 emails/month

**Service:** EmailJS (https://emailjs.com)

---

## 🎉 That's It!

Your contact form is now **100% functional** and sending real emails!

**Total Setup Time:** ~5 minutes  
**Cost:** FREE  
**Difficulty:** ⭐ Easy

---

## 🚀 Next: Deploy to Production

When deploying to Vercel/Netlify:

1. Go to project settings
2. Add environment variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Redeploy

---

**Questions?** Check `EMAILJS_SETUP_GUIDE.md` for detailed docs!

