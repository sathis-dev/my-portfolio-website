# 🚨 Auto-Reply Not Working - Quick Fix

## ✅ What's Working
- Notification email to your developer email ✅

## ❌ What's Not Working  
- Auto-reply confirmation to sender ❌

---

## 🎯 **QUICK FIX (2 Minutes)**

### **Step 1: Check Your Configuration**

Run this command:
```bash
node check-emailjs-config.js
```

This will tell you **exactly** what's missing!

---

### **Step 2: Most Likely Issue**

You probably didn't create the **Auto-Reply Template** in EmailJS.

**You need TWO templates:**
1. ✅ Notification Template (to you) - **WORKING**
2. ❌ Auto-Reply Template (to sender) - **MISSING**

---

### **Step 3: Create Auto-Reply Template**

1. Go to **EmailJS Dashboard**: https://dashboard.emailjs.com/
2. Click **"Email Templates"**
3. Click **"Create New Template"**

**Configure it like this:**

| Field | Value |
|-------|-------|
| **Template Name** | Portfolio Auto-Reply |
| **To Email** | `{{from_email}}` ← **CRITICAL!** |
| **From Name** | Sathis Hettiarachchi |
| **Reply To** | sathis.rc.dev@gmail.com |
| **Subject** | `Thanks for reaching out, {{from_name}}! Message received ✅` |

**Template HTML:**
- Copy from `docs/EMAILJS_COMPLETE_SETUP_GUIDE.md` - Step 4
- Or use the EmailJS default template and customize

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_abc123`)

---

### **Step 4: Add Template ID to .env.local**

Open `.env.local` and add this line:

```env
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_YOUR_ACTUAL_ID
```

**Your .env.local should now have 4 lines total:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxx  ← ADD THIS!
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

---

### **Step 5: Restart Server**

```bash
# Press Ctrl+C to stop the server
# Then restart:
npm run dev
```

---

### **Step 6: Test Again**

1. Open: http://localhost:3001/contact
2. Press **F12** to open browser console
3. Fill the form with **a real email you can check**
4. Submit
5. **Check the console** - you should see:

```
🚀 Starting email send process...
📧 Recipient (notification): sathis.rc.dev@gmail.com
📧 Recipient (auto-reply): your-test-email@gmail.com
📬 Sending notification email...
Notification email sent: 200
✅ Notification sent! Now sending auto-reply...
📤 Auto-reply template ID: template_xxx...
✅ Auto-reply email sent: 200
✅ Auto-reply sent successfully!
📊 Final results: { notificationSent: true, autoReplySent: true }
```

6. **Check your emails:**
   - ✅ Your developer email: Notification
   - ✅ Test email: Auto-reply confirmation

---

## 🔍 **Debugging Console Messages**

### ❌ If you see this:
```
❌ AUTOREPLY_TEMPLATE_ID is missing in .env.local!
```
**Fix:** Add the template ID to `.env.local` (Step 4 above)

### ❌ If you see this:
```
Auto-reply email error: Template not found
```
**Fix:** Check the template ID is correct, no typos

### ❌ If you see this:
```
⚠️ Notification failed - skipping auto-reply
```
**Fix:** Your notification email failed, so auto-reply was skipped

---

## 📋 **Common Mistakes**

| Mistake | Fix |
|---------|-----|
| Only created 1 template | Create a **second** template for auto-reply |
| Auto-reply "To Email" = your email | Change to `{{from_email}}` |
| Forgot to add template ID to .env.local | Add `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` |
| Didn't restart server | Always restart after changing .env.local |
| Checking wrong inbox | Check the **sender's** inbox (your test email) |
| Didn't check spam folder | Auto-replies might go to spam first time |

---

## ✅ **Success Looks Like This**

**Browser Console:**
```
✅ Auto-reply sent successfully!
```

**Emails:**
1. Your developer inbox: Notification with sender's message ✅
2. Sender's inbox: Professional auto-reply confirmation ✅

---

## 🆘 **Still Not Working?**

1. **Run the checker:**
   ```bash
   node check-emailjs-config.js
   ```

2. **Read detailed guide:**
   - Open: `AUTOREPLY_TROUBLESHOOTING.md`

3. **Check these files:**
   - `.env.local` - Has all 4 variables?
   - EmailJS Dashboard - Has 2 templates?
   - Browser Console - What error shows?

4. **Share with me:**
   - Screenshot of browser console after form submit
   - Screenshot of EmailJS Email Templates page
   - Output of `node check-emailjs-config.js`

---

## 🎯 **TL;DR**

```bash
# 1. Check what's missing:
node check-emailjs-config.js

# 2. Create auto-reply template in EmailJS

# 3. Add to .env.local:
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxx

# 4. Restart:
npm run dev

# 5. Test with F12 console open
```

**That's it! 🚀**

