# ✅ Email Setup Checklist - Complete This Now!

## 📋 Pre-Setup (Already Done ✅)

- [x] Contact form coded
- [x] EmailJS package installed
- [x] Validation implemented
- [x] Rate limiting added
- [x] Documentation created
- [x] Helper scripts created

**Status:** Everything is ready! Just needs your EmailJS credentials.

---

## 🚀 Your Setup Tasks (5 Minutes)

### Task 1: Create EmailJS Account
- [ ] Go to https://www.emailjs.com/
- [ ] Click "Sign Up"
- [ ] Use Google for quick signup
- [ ] Verify email address

**Time:** 2 minutes

---

### Task 2: Connect Gmail Service
- [ ] EmailJS Dashboard → "Email Services"
- [ ] Click "Add New Service"
- [ ] Choose "Gmail"
- [ ] Click "Connect Account"
- [ ] Sign in with Google
- [ ] Allow EmailJS permissions
- [ ] **COPY Service ID** (e.g., `service_abc123`)

**Time:** 1 minute

---

### Task 3: Create Email Template
- [ ] EmailJS Dashboard → "Email Templates"
- [ ] Click "Create New Template"
- [ ] Name it: "Portfolio Contact Form"
- [ ] Subject: `New Contact: {{subject}} from {{from_name}}`
- [ ] Body:
  ```
  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Reply to: {{from_email}}
  ```
- [ ] Click "Save"
- [ ] **COPY Template ID** (e.g., `template_xyz789`)

**Time:** 1 minute

---

### Task 4: Get Public Key
- [ ] EmailJS Dashboard → "Account" (top right)
- [ ] Click "API Keys"
- [ ] **COPY Public Key** (e.g., `aBcDeFgHiJkLmNoPqR`)

**Time:** 30 seconds

---

### Task 5: Configure Project
Choose ONE method:

#### Method A: Interactive Script (Easiest)
- [ ] Run: `node setup-email.js`
- [ ] Follow prompts
- [ ] Enter your 3 IDs when asked

#### Method B: Manual
- [ ] Create file: `.env.local` in project root
- [ ] Add this content:
  ```env
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
  ```
- [ ] Replace values with YOUR actual IDs

#### Method C: Copy Template
- [ ] Run: `cp env.local.template .env.local`
- [ ] Edit `.env.local`
- [ ] Replace `xxx` values with your IDs

**Time:** 1 minute

---

### Task 6: Test It!
- [ ] Stop dev server (Ctrl+C)
- [ ] Restart: `npm run dev`
- [ ] Open: http://localhost:3000/contact
- [ ] Fill out form:
  - Name: Test User
  - Email: your-email@gmail.com
  - Subject: Test Message
  - Message: Testing my contact form!
- [ ] Click "Send Message"
- [ ] Check your email inbox (check spam folder too!)
- [ ] Verify email received with all form data

**Time:** 1 minute

---

## ✅ Final Verification

### Form Works If:
- [x] No "EmailJS configuration missing" in console
- [x] Form submits without errors
- [x] Success message appears
- [x] Email arrives in your inbox within seconds
- [x] Email contains all form field data
- [x] Form clears after successful send

### Common Issues:
- Console shows config error → `.env.local` missing or server not restarted
- No email received → Check spam, verify Service connected
- "Too many attempts" → Rate limiting working! (Max 1/hour)

---

## 📊 What You Should Have

### 3 Files in Project Root:
1. ✅ `.env.local` (YOUR credentials - DO NOT commit)
2. ✅ `setup-email.js` (helper script)
3. ✅ `env.local.template` (template file)

### 3 EmailJS IDs:
1. ✅ Service ID (from Email Services)
2. ✅ Template ID (from Email Templates)  
3. ✅ Public Key (from Account → API Keys)

---

## 🎯 Success Criteria

You're done when:

✅ Form submits successfully  
✅ Success message shows "Message sent successfully!"  
✅ Email arrives at sathis.rc.dev@gmail.com  
✅ Email contains sender's name, email, subject, message  
✅ Form clears automatically after send  
✅ Second submission within 1 hour shows rate limit message  

---

## 📞 Quick Reference

**EmailJS Dashboard:** https://dashboard.emailjs.com/  
**Helper Script:** `node setup-email.js`  
**Quick Guide:** `SETUP_NOW.md`  
**Detailed Guide:** `EMAILJS_SETUP_GUIDE.md`  
**This Checklist:** `EMAIL_SETUP_CHECKLIST.md`

---

## ⏱️ Time Breakdown

| Task | Time |
|------|------|
| Create account | 2 min |
| Connect Gmail | 1 min |
| Create template | 1 min |
| Get public key | 30 sec |
| Configure project | 1 min |
| Test form | 1 min |
| **TOTAL** | **~6 minutes** |

---

## 🆘 Need Help?

**Stuck on account creation?**
→ Use Google signup for instant access

**Can't find Service ID?**
→ EmailJS Dashboard → Email Services → Look for ID next to service name

**Template not working?**
→ Make sure you use `{{variable}}` format exactly (with double curly braces)

**Still need help?**
→ Run `node setup-email.js` for guided setup
→ Or open `SETUP_NOW.md` for detailed steps

---

## 🎉 You're Almost There!

**Your contact form is 100% ready.**  
**Just complete these 6 quick tasks and you'll be live!**

**Start now:** Run `node setup-email.js` ⚡

