# ⚡ EmailJS Quick Start - 5 Minutes

## What You Need to Do

I've set up **100% of the code**. You just need to get 4 values from EmailJS.

---

## 🎯 Get These 4 Values:

1. **Service ID** → `service_abc123`
2. **Notification Template ID** → `template_xyz789`
3. **Auto-Reply Template ID** → `template_def456`
4. **Public Key** → `aBcDeFgHiJkLmNoPqR`

---

## 📝 Steps

### 1. Sign Up (1 minute)
- Go to: **https://www.emailjs.com/**
- Click **"Sign Up"**
- Verify email

### 2. Connect Gmail (1 minute)
- Dashboard → **Email Services**
- Click **"Add New Service"**
- Select **Gmail** → Authorize
- **Copy Service ID** ✅

### 3. Create Notification Template (2 minutes)
- Dashboard → **Email Templates**
- Click **"Create New Template"**
- **Open:** `docs/EMAILJS_COMPLETE_SETUP_GUIDE.md`
- **Copy the Notification Template HTML** from Step 3
- **Paste** into EmailJS template editor
- Set:
  - **Reply To:** `{{from_email}}`
  - **Subject:** `New Contact: {{subject}} - from {{from_name}}`
- Click **"Save"**
- **Copy Template ID** ✅

### 4. Create Auto-Reply Template (2 minutes)
- Click **"Create New Template"** again
- **Copy the Auto-Reply Template HTML** from Step 4 in the guide
- **Paste** into EmailJS template editor
- Set:
  - **To Email:** `{{from_email}}`
  - **From Name:** `Sathis Hettiarachchi`
  - **Reply To:** `sathis.rc.dev@gmail.com`
  - **Subject:** `Thanks for reaching out, {{from_name}}! Message received ✅`
- Click **"Save"**
- **Copy Template ID** ✅

### 5. Get Public Key (30 seconds)
- Profile → **Account** → **API Keys**
- **Copy Public Key** ✅

### 6. Update .env.local (1 minute)

**Create `.env.local` in project root:**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_YOUR_VALUE_HERE
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_YOUR_VALUE_HERE
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_YOUR_VALUE_HERE
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_VALUE_HERE
```

**Replace with YOUR actual values!**

### 7. Restart Server (30 seconds)

```bash
npm run dev
```

### 8. Test! (1 minute)

1. Go to: **http://localhost:3000/contact**
2. Fill form and submit
3. Check **both inboxes** for emails

---

## ✅ Done!

If you get stuck, open: **`docs/EMAILJS_COMPLETE_SETUP_GUIDE.md`** for detailed instructions.

---

## 🎯 Expected Result

**After setup:**
- Form submission → Success message ✅
- Your email → Notification ✅
- Sender's email → Auto-reply ✅
- Second submission → Rate limit error ✅

**Total time:** ~5 minutes

