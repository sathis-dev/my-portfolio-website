# 🚀 Quick Start: Get Your Contact Form Working in 5 Minutes

## ⚡ Super Fast Setup

### 1. Sign Up (2 minutes)
```
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" → Use Google for instant signup
3. Verify email
```

### 2. Connect Gmail (1 minute)
```
1. Dashboard → "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Click "Connect Account" → Allow access
4. Copy your Service ID (e.g., service_abc123)
```

### 3. Create Template (1 minute)
```
1. Dashboard → "Email Templates" → "Create New Template"
2. Copy-paste this:

Subject:
New Contact: {{subject}} from {{from_name}}

Body:
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

3. Save → Copy Template ID (e.g., template_xyz789)
```

### 4. Get Public Key (30 seconds)
```
1. Dashboard → "Account" → "API Keys"
2. Copy Public Key (e.g., aBcDeFgHiJkLmN)
```

### 5. Configure Project (30 seconds)
```bash
# Create .env.local in project root
# Add these lines (replace with YOUR values):

NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
```

### 6. Test It! (1 minute)
```bash
# Restart dev server
npm run dev

# Open browser
http://localhost:3000/contact

# Fill form → Submit → Check your email!
```

---

## 🎯 That's It!

Your contact form is now **LIVE** and sending real emails to **sathis.rc.dev@gmail.com**!

---

## 📖 Need More Help?

- **Full Guide:** See `EMAILJS_SETUP_GUIDE.md`
- **Technical Details:** See `docs/CONTACT_FORM_EMAIL_INTEGRATION_COMPLETE.md`
- **EmailJS Docs:** https://www.emailjs.com/docs/

---

## ✅ Quick Checklist

- [ ] Signed up at emailjs.com
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Got all 3 IDs (Service, Template, Public Key)
- [ ] Created `.env.local` file
- [ ] Added all 3 environment variables
- [ ] Restarted dev server
- [ ] Tested form
- [ ] Received test email

---

## 🆘 Common Issues

**Form says "EmailJS configuration missing"**
→ Create `.env.local` file, restart dev server

**No email received**
→ Check spam folder, verify Gmail is connected

**"Too many attempts"**
→ Wait 1 hour or clear browser localStorage

---

**Form not working? Double-check your `.env.local` file has correct values with NO typos!**

