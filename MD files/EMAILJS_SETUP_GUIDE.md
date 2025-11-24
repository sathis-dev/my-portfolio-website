# EmailJS Setup Guide - Contact Form Integration

## 🎯 Overview

Your contact form is now integrated with EmailJS! Follow this guide to complete the setup and start receiving emails.

**Time Required:** 5-10 minutes  
**Cost:** FREE (200 emails/month)  
**Difficulty:** ⭐ Easy

---

## 📋 Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"**
3. Create a free account (you can use Google/GitHub for quick signup)
4. Verify your email address

---

## 📧 Step 2: Add Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended) - Most people use this
   - Outlook
   - Yahoo
   - Custom SMTP

### For Gmail (Recommended):
1. Select **"Gmail"**
2. Click **"Connect Account"**
3. Sign in with your Google account
4. Allow EmailJS to send emails on your behalf
5. Your Service ID will be generated (e.g., `service_abc123`)
6. **Copy and save this Service ID** - you'll need it later!

---

## 📝 Step 3: Create Email Template

1. In the EmailJS dashboard, go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name:** `Portfolio Contact Form`
4. **Configure the template:**

### Template Settings:

**Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

**Email Body:**
```
You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
Sent from your portfolio website
```

### Template Variables to Include:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (optional)

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`)

---

## 🔑 Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **"Account"**
2. Click **"API Keys"**
3. Find your **Public Key** (it looks like: `aBcDeFgHiJkLmNoPqR`)
4. **Copy this key** - you'll need it!

---

## 💻 Step 5: Configure Your Project

### Create `.env.local` File

1. In your project root folder, create a new file named `.env.local`
2. Add the following configuration:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
```

3. **Replace the values** with your actual IDs from steps 2, 3, and 4:
   - `service_abc123` → Your Service ID
   - `template_xyz789` → Your Template ID
   - `aBcDeFgHiJkLmNoPqR` → Your Public Key

### Example `.env.local`:
```bash
# EmailJS Configuration - REAL VALUES (example)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_mp7x4zq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_5n2m8rk
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=vH7kL3pM9wQ2xY6
```

⚠️ **IMPORTANT:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- Keep these keys private
- If you accidentally expose them, regenerate them in EmailJS dashboard

---

## 🧪 Step 6: Test Your Contact Form

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Open your contact page:**
   ```
   http://localhost:3000/contact
   ```

3. **Fill out the form with test data:**
   - Name: Test User
   - Email: your-email@gmail.com
   - Subject: Test Message
   - Message: This is a test message to verify my contact form works!

4. **Click "Send Message"**

5. **Check your email inbox** (the one you connected to EmailJS)
   - You should receive an email within seconds!

---

## ✅ Verification Checklist

- [ ] Created EmailJS account
- [ ] Added Gmail service and copied Service ID
- [ ] Created email template and copied Template ID  
- [ ] Got Public Key from Account settings
- [ ] Created `.env.local` file in project root
- [ ] Added all three configuration values to `.env.local`
- [ ] Restarted development server (`npm run dev`)
- [ ] Tested form and received email successfully

---

## 🔧 Troubleshooting

### Form shows "Failed to send message"

**Check these:**
1. Verify all three values in `.env.local` are correct (no typos)
2. Make sure `.env.local` is in the project root folder
3. Restart your development server after creating `.env.local`
4. Check browser console for errors (F12 → Console tab)
5. Verify your EmailJS service is connected and active

### Email not received

**Check these:**
1. Check spam/junk folder
2. Verify email service is connected in EmailJS dashboard
3. Check EmailJS dashboard for delivery logs
4. Try sending a test email from EmailJS dashboard first

### "Too many attempts" error

**Solution:**
- Wait 1 hour before submitting again
- Or clear localStorage in browser (F12 → Application → Local Storage → Clear)

### Console shows "EmailJS configuration missing"

**Solution:**
1. Create `.env.local` file if it doesn't exist
2. Add all three required variables
3. Restart development server

---

## 🎨 Email Template Customization

Want to customize your email notifications? Here are some ideas:

### Professional Template:
```
Hello Sathis,

You received a new inquiry through your portfolio:

━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━

Name:     {{from_name}}
Email:    {{from_email}}
Subject:  {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this email or contact {{from_email}} directly.

Sent via Portfolio Contact Form
https://yourwebsite.com/contact
```

### Minimal Template:
```
New message from {{from_name}} ({{from_email}}):

Subject: {{subject}}

{{message}}

---
Reply: {{from_email}}
```

---

## 📊 EmailJS Free Tier Limits

- **200 emails per month**
- **Unlimited templates**
- **Unlimited services**
- **No credit card required**

If you need more:
- Personal: $7/month (1,000 emails)
- Professional: $15/month (10,000 emails)

---

## 🔐 Security Features

Your contact form includes:

✅ **Client-side validation** - Checks email format, required fields  
✅ **Rate limiting** - Max 1 submission per hour per user  
✅ **XSS protection** - Input sanitization  
✅ **Spam protection** - Time-based submission checks  
✅ **Character limits** - Prevents abuse  

---

## 🚀 Going to Production

When deploying to Vercel/Netlify:

1. Go to your deployment settings (e.g., Vercel dashboard)
2. Add environment variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
   ```
3. Redeploy your site

---

## 📞 Your Contact Information

The form will send emails to: **sathis.rc.dev@gmail.com**

To change the recipient email:
1. In EmailJS dashboard, go to Email Services
2. Edit your Gmail service
3. Change the "To Email" field

---

## 🎯 Quick Reference

### EmailJS Dashboard URLs
- Dashboard: https://dashboard.emailjs.com/
- Email Services: https://dashboard.emailjs.com/admin
- Email Templates: https://dashboard.emailjs.com/admin/templates
- API Keys: https://dashboard.emailjs.com/admin/account

### Environment Variables Template
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

---

## 💡 Tips & Best Practices

1. **Test thoroughly** before going live
2. **Monitor your quota** in EmailJS dashboard
3. **Set up email notifications** so you don't miss messages
4. **Keep backup** of your EmailJS credentials
5. **Consider auto-reply** email to thank senders

---

## 🆘 Need Help?

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Support:** support@emailjs.com
- **EmailJS FAQ:** https://www.emailjs.com/docs/faq/

---

**Setup Complete! 🎉**

Your contact form is now live and will send real emails!

Test it by filling out your contact form and checking your email.

