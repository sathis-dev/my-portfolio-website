# 📧 Complete EmailJS Contact Form Setup Guide

## 🎯 What You're Building

A fully functional contact form that:
- ✅ Sends **notification emails** to you (sathis.rc.dev@gmail.com)
- ✅ Sends **auto-reply emails** to message senders
- ✅ Has **rate limiting** (1 message/hour per user)
- ✅ Includes **validation** and error handling
- ✅ Shows **success/error messages**
- ✅ Works **client-side** (no backend needed)

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Sign Up for EmailJS

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Create account with email/password or Google
4. Verify your email

### Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail** (recommended)
4. Click **"Connect Account"**
5. Authorize EmailJS to access your Gmail
6. **Copy your Service ID** (looks like `service_abc123`)

### Step 3: Create Notification Template

This email is sent **TO YOU** when someone contacts you.

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Name it: `"Portfolio Contact Notification"`
4. **Replace the entire template** with this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: linear-gradient(135deg, #C71585 0%, #8B5CF6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
    <p style="font-size: 16px; margin-bottom: 20px;">
      Hi <strong>{{to_name}}</strong>,
    </p>
    
    <p style="font-size: 16px; margin-bottom: 30px;">
      You have received a new message from your portfolio website:
    </p>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #C71585; margin-bottom: 20px;">
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #C71585;">👤 Name:</strong><br>
        {{from_name}}
      </p>
      
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #C71585;">📧 Email:</strong><br>
        <a href="mailto:{{from_email}}" style="color: #8B5CF6;">{{from_email}}</a>
      </p>
      
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #C71585;">📋 Subject:</strong><br>
        {{subject}}
      </p>
      
      <p style="margin: 0;">
        <strong style="color: #C71585;">💬 Message:</strong><br>
        <span style="white-space: pre-wrap;">{{message}}</span>
      </p>
    </div>
    
    <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
      <p style="margin: 0; font-size: 14px;">
        <strong>💡 Quick Tip:</strong> Reply directly to <a href="mailto:{{from_email}}" style="color: #8B5CF6;">{{from_email}}</a> to respond to this message.
      </p>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
    <p>Sent from your Portfolio Contact Form</p>
  </div>
  
</body>
</html>
```

5. **Set Reply To:** `{{from_email}}` (so you can reply directly)
6. **Set Subject:** `New Contact: {{subject}} - from {{from_name}}`
7. Click **"Save"**
8. **Copy the Template ID** (looks like `template_xyz789`)

### Step 4: Create Auto-Reply Template

This email is sent **TO THE SENDER** confirming you received their message.

1. Click **"Create New Template"** again
2. Name it: `"Portfolio Contact Auto-Reply"`
3. **Replace the entire template** with this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thanks for contacting me!</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: linear-gradient(135deg, #C71585 0%, #8B5CF6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">✅ Message Received!</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
    <p style="font-size: 16px; margin-bottom: 20px;">
      Hi <strong>{{from_name}}</strong>,
    </p>
    
    <p style="font-size: 16px; margin-bottom: 20px;">
      Thanks for reaching out! I've received your message and will get back to you within <strong>24-48 hours</strong>.
    </p>
    
    <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10B981; margin-bottom: 20px;">
      <p style="margin: 0 0 10px 0; color: #10B981; font-weight: bold;">
        📝 Your Message Summary:
      </p>
      <p style="margin: 0 0 10px 0;">
        <strong>Subject:</strong> {{subject}}
      </p>
      <p style="margin: 0;">
        <strong>Message:</strong><br>
        <span style="white-space: pre-wrap; color: #666;">{{message}}</span>
      </p>
    </div>
    
    <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196F3; margin-bottom: 20px;">
      <p style="margin: 0 0 10px 0; font-size: 14px;">
        <strong>🔗 Connect with me:</strong>
      </p>
      <p style="margin: 0; font-size: 14px;">
        📧 Email: <a href="mailto:{{to_email}}" style="color: #8B5CF6;">{{to_email}}</a><br>
        💼 LinkedIn: <a href="https://www.linkedin.com/in/sathis-hettiarachchi-52b4b436a/" style="color: #8B5CF6;">linkedin.com/in/sathis-hettiarachchi</a><br>
        🐙 GitHub: <a href="https://github.com/sathis-dev" style="color: #8B5CF6;">github.com/sathis-dev</a>
      </p>
    </div>
    
    <p style="font-size: 16px; margin-bottom: 0;">
      Best regards,<br>
      <strong>Sathis Hettiarachchi</strong><br>
      <span style="color: #666; font-size: 14px;">Full Stack Developer</span>
    </p>
  </div>
  
  <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
    <p>This is an automated confirmation. Please do not reply to this email.</p>
  </div>
  
</body>
</html>
```

4. **Set To Email:** `{{from_email}}` (sends to the person who contacted you)
5. **Set From Name:** `Sathis Hettiarachchi` (or your name)
6. **Set Reply To:** `{{to_email}}` (your email: sathis.rc.dev@gmail.com)
7. **Set Subject:** `Thanks for reaching out, {{from_name}}! Message received ✅`
8. Click **"Save"**
9. **Copy this Template ID** too (different from the first one!)

### Step 5: Get Your Public Key

1. Click your profile (top right)
2. Go to **"Account"** → **"API Keys"**
3. **Copy your Public Key** (long string of letters/numbers)

### Step 6: Update Environment Variables

1. **Copy** `.env.local.template` to `.env.local`:
   ```bash
   cp .env.local.template .env.local
   ```

2. **Open** `.env.local` and **replace** the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_def456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
```

**Use YOUR actual values from EmailJS!**

### Step 7: Restart Dev Server

```bash
npm run dev
```

---

## 🧪 Testing Your Contact Form

### 1. Navigate to Contact Page
Open: **http://localhost:3000/contact**

### 2. Fill Out the Form
- **Name:** Test User
- **Email:** your-test-email@gmail.com (use a real email you can check!)
- **Subject:** Project Inquiry
- **Message:** This is a test message from my contact form!

### 3. Submit and Verify

You should see:
- ✅ **Success message** appears
- ✅ **Green confirmation** banner
- ✅ **Form clears** automatically

### 4. Check Your Emails

**Your Gmail (sathis.rc.dev@gmail.com):**
- Should receive **notification email** with the message details
- Subject: "New Contact: Project Inquiry - from Test User"

**Test Email Inbox:**
- Should receive **auto-reply confirmation**
- Subject: "Thanks for reaching out, Test User! Message received ✅"

### 5. Test Rate Limiting

Try submitting **twice in a row**:
- ✅ First submission: Success
- ❌ Second submission: Error message "Please wait 60 minutes..."

---

## 📋 Troubleshooting

### ❌ "Email send error" in console

**Check:**
- All 4 environment variables are set in `.env.local`
- No typos in Service ID, Template IDs, or Public Key
- Dev server was restarted after adding `.env.local`

### ❌ No email received

**Check:**
1. **Gmail Spam folder** (EmailJS emails might go there first time)
2. **EmailJS Dashboard → Email Services** - is your Gmail connected?
3. **EmailJS Dashboard → Email Templates** - are both templates saved?
4. **Console errors** - open browser DevTools and check for errors

### ❌ Only one email received

**Check:**
- You created **TWO templates** (notification + auto-reply)
- Both template IDs are in `.env.local`
- Template IDs are different (one for each template)

### ❌ Rate limiting not working

**Clear localStorage:**
```javascript
// In browser console:
localStorage.removeItem('lastContactSubmit')
```

---

## 🎨 Email Template Variables Reference

### Notification Template (to you):
- `{{to_name}}` - Your name ("Sathis")
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Form subject selection
- `{{message}}` - Form message text

### Auto-Reply Template (to sender):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email (where email is sent)
- `{{subject}}` - Form subject
- `{{message}}` - Their original message
- `{{to_name}}` - Your name
- `{{to_email}}` - Your email (for reply-to)

---

## 🔒 Security Features

### ✅ Rate Limiting
- **1 message per hour** per user (via localStorage)
- Prevents spam and abuse

### ✅ Input Validation
- Name: 2-100 characters
- Email: Valid email format
- Subject: Must be selected
- Message: 10-1000 characters

### ✅ Client-Side Protection
- XSS protection via React's built-in escaping
- No server-side code to secure

### ✅ EmailJS Security
- Public key is **safe to expose** (limited scope)
- Only allows **sending** emails (not reading)
- Rate limits built into EmailJS

---

## 📊 EmailJS Free Tier Limits

- ✅ **200 emails/month** for free
- ✅ **2 templates** (you're using 2)
- ✅ **Unlimited** services
- ✅ No credit card required

**Expected usage:**
- Each form submission = **2 emails** (notification + auto-reply)
- Free tier = **100 form submissions/month**
- More than enough for a portfolio site!

---

## 🎯 What Happens When Someone Contacts You

```mermaid
User fills form
     ↓
Validation passes
     ↓
Rate limit check passes
     ↓
sendContactEmails() called
     ↓
     ├─→ Notification email → YOU (sathis.rc.dev@gmail.com)
     └─→ Auto-reply email → SENDER
     ↓
Success message shown
     ↓
Form clears
     ↓
Rate limit set (1 hour)
```

---

## ✅ Checklist

Before considering setup complete:

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Notification template created and ID copied
- [ ] Auto-reply template created and ID copied
- [ ] Public key obtained
- [ ] `.env.local` created with all 4 variables
- [ ] Dev server restarted
- [ ] Test form submitted successfully
- [ ] Received notification email in YOUR inbox
- [ ] Received auto-reply email in TEST inbox
- [ ] Rate limiting works (tested twice in row)

---

## 🚀 You're All Set!

Your contact form is now **fully functional** and ready for production! 

**What you have:**
- ✅ Real email notifications
- ✅ Professional auto-replies
- ✅ Spam protection
- ✅ Beautiful UI with animations
- ✅ Error handling
- ✅ Mobile responsive

**Next steps:**
- Deploy to production (Vercel/Netlify)
- Add same environment variables to production
- Test on live site
- Monitor EmailJS dashboard for usage

---

Need help? Check:
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **EmailJS Support:** https://www.emailjs.com/support/

