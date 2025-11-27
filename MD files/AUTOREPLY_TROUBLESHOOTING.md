# 🔧 Auto-Reply Email Not Working - Troubleshooting

## ✅ What's Working
- Notification email to you (sathis.rc.dev@gmail.com) ✅

## ❌ What's Not Working
- Auto-reply confirmation email to sender ❌

---

## 🔍 **Most Common Issues**

### **Issue 1: Missing Auto-Reply Template ID** (Most Likely!)

**Check your `.env.local` file:**

```bash
# You should have ALL 4 variables:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxx  ← CHECK THIS!
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Fix:**
1. Open EmailJS Dashboard → **Email Templates**
2. Check if you created **2 templates** (not just 1!)
   - Template 1: Notification (to you)
   - Template 2: Auto-Reply (to sender)
3. Copy the **Auto-Reply Template ID**
4. Add it to `.env.local` as `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID`
5. **Restart dev server:** `npm run dev`

---

### **Issue 2: Auto-Reply Template Not Created**

**You need to create a SECOND template in EmailJS:**

1. Go to EmailJS Dashboard → **Email Templates**
2. Click **"Create New Template"**
3. Use this configuration:

**Template Settings:**
- **Name:** Portfolio Contact Auto-Reply
- **To Email:** `{{from_email}}` ← **CRITICAL!**
- **From Name:** Sathis Hettiarachchi (your name)
- **Reply To:** sathis.rc.dev@gmail.com
- **Subject:** `Thanks for reaching out, {{from_name}}! Message received ✅`

**Template HTML** (copy from `docs/EMAILJS_COMPLETE_SETUP_GUIDE.md` Step 4)

4. Click **Save**
5. Copy the **Template ID**
6. Add to `.env.local`

---

### **Issue 3: Wrong "To Email" in Auto-Reply Template**

**In EmailJS Dashboard:**
1. Go to **Email Templates**
2. Click on your **Auto-Reply template**
3. Check the **"To Email"** field
4. It MUST be: `{{from_email}}` (not your email!)
5. Save if you changed it

---

## 🧪 **Check Browser Console**

1. Open your contact form: `http://localhost:3001/contact`
2. Press **F12** (or Right-click → Inspect)
3. Go to **Console** tab
4. Fill and submit the form
5. Look for these messages:

**✅ Success (both emails sent):**
```
Notification email sent: 200
Auto-reply email sent: 200
```

**❌ Problem (only notification sent):**
```
Notification email sent: 200
Auto-reply email error: [error message here]
```

**What the error means:**

| Error Message | Solution |
|---------------|----------|
| `Template ID not found` | Add `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` to `.env.local` |
| `Invalid template` | Check template ID is correct |
| `Failed to send` | Check "To Email" is `{{from_email}}` in template |
| `Service unavailable` | EmailJS might be down, try again later |

---

## ✅ **Quick Fix Checklist**

Run through these in order:

```
[ ] Step 1: Check .env.local has AUTOREPLY_TEMPLATE_ID
[ ] Step 2: Verify you created 2 templates (not 1)
[ ] Step 3: Copy Auto-Reply Template ID from EmailJS
[ ] Step 4: Add to .env.local
[ ] Step 5: Restart dev server (npm run dev)
[ ] Step 6: Clear browser localStorage:
    - Open Console (F12)
    - Type: localStorage.removeItem('lastContactSubmit')
    - Press Enter
[ ] Step 7: Test form again
[ ] Step 8: Check browser console for errors
[ ] Step 9: Check sender's inbox (and spam folder!)
```

---

## 🎯 **Verify Your Setup**

### **Check .env.local:**
```bash
cat .env.local
# or on Windows:
type .env.local
```

You should see **4 lines**, not 3!

### **Check EmailJS Dashboard:**
1. Email Templates → Should show **2 templates**
2. Click each template → Verify:
   - Notification template "To Email": `sathis.rc.dev@gmail.com`
   - Auto-Reply template "To Email": `{{from_email}}`

---

## 📋 **Auto-Reply Template Variables**

Make sure your auto-reply template uses these variables:

```
{{from_name}}    → Sender's name
{{from_email}}   → Sender's email (in "To Email" field!)
{{subject}}      → Form subject
{{message}}      → Form message
{{to_name}}      → Your name
{{to_email}}     → Your email
```

---

## 🔄 **After You Fix It:**

1. **Restart server:** 
   ```bash
   npm run dev
   ```

2. **Clear rate limit:**
   ```javascript
   // In browser console (F12):
   localStorage.removeItem('lastContactSubmit')
   ```

3. **Test with a real email you can check**

4. **Look for 2 emails:**
   - ✅ Your inbox: Notification email
   - ✅ Sender's inbox: Auto-reply confirmation

---

## 🎓 **Understanding the Flow**

```
Form Submit
    ↓
sendContactEmails() called
    ↓
Step 1: sendNotificationEmail()
    ├─ Uses: NOTIFICATION_TEMPLATE_ID
    ├─ To: sathis.rc.dev@gmail.com
    └─ Status: ✅ WORKING
    ↓
Step 2: sendAutoReplyEmail()
    ├─ Uses: AUTOREPLY_TEMPLATE_ID ← CHECK THIS!
    ├─ To: {{from_email}} (sender's email)
    └─ Status: ❌ NOT WORKING
```

The auto-reply only sends **IF notification was successful** (see line 83-84 in `lib/emailjs.ts`).

---

## 🆘 **Still Not Working?**

### **Send me these details:**

1. **Browser Console Output:**
   - Copy ALL messages after form submit

2. **Environment Variables Check:**
   ```bash
   # Run this and share output (IDs will be hidden):
   echo "Service ID: ${NEXT_PUBLIC_EMAILJS_SERVICE_ID:0:10}..."
   echo "Notification ID: ${NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID:0:10}..."
   echo "Auto-Reply ID: ${NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID:0:10}..."
   echo "Public Key: ${NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:0:10}..."
   ```

3. **EmailJS Templates:**
   - Screenshot of your Email Templates page showing both templates

4. **Auto-Reply Template Config:**
   - What's in the "To Email" field?
   - What's in the "Subject" field?

---

## ✅ **Expected Result After Fix**

**Browser Console:**
```
Notification email sent: 200
Auto-reply email sent: 200
```

**Emails Received:**
1. **Your inbox (sathis.rc.dev@gmail.com):**
   - Subject: "New Contact: [subject] - from [name]"
   - Contains: Sender info and message

2. **Sender's inbox (test email):**
   - Subject: "Thanks for reaching out, [name]! Message received ✅"
   - Contains: Confirmation and your contact info

---

## 🎯 **Most Likely Fix**

**99% of the time, it's this:**

```bash
# Add this line to your .env.local:
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_YOUR_SECOND_TEMPLATE_ID

# Then restart:
npm run dev
```

**Get the Template ID from:**
EmailJS Dashboard → Email Templates → Auto-Reply Template → Copy ID

---

**Try the Quick Fix Checklist above and let me know what the browser console shows!** 🔍

