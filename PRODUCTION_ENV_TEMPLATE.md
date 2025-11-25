# 🔐 Production Environment Variables

When deploying to production, you need to set these environment variables in your hosting platform.

---

## Required Variables

### EmailJS Configuration

```bash
# EmailJS Service ID
# Get from: https://dashboard.emailjs.com → Email Services
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx

# EmailJS Template ID
# Get from: https://dashboard.emailjs.com → Email Templates
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx

# EmailJS Public Key
# Get from: https://dashboard.emailjs.com → Account → API Keys
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

---

## How to Add in Vercel

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to: **Settings → Environment Variables**
4. Add each variable:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
   - **Value**: Your actual value
   - **Environments**: Select **Production**, **Preview**, and **Development**
5. Click "Save"
6. **Redeploy** your project for changes to take effect

---

## How to Add in Netlify

1. Go to: https://app.netlify.com
2. Select your site
3. Go to: **Site settings → Build & deploy → Environment**
4. Click "Edit variables"
5. Add each variable with your actual value
6. Click "Save"
7. **Redeploy** your site

---

## Security Notes

✅ **SAFE** - These variables use `NEXT_PUBLIC_` prefix:
- They are included in the client-side JavaScript bundle
- They are visible in browser DevTools
- EmailJS public keys are designed to be public

❌ **NEVER commit** to Git:
- Actual API keys and secrets
- Database credentials
- Private keys

---

## After Deployment

### Whitelist Your Domain in EmailJS

1. Go to: https://dashboard.emailjs.com
2. Click: **Account → Security**
3. Under "Allowed Origins", add:
   ```
   https://yourdomain.com
   https://www.yourdomain.com
   https://your-project.vercel.app
   ```
4. Click "Add Origin" and save

Without this step, emails won't send from production! ⚠️

---

## Testing

After adding variables and redeploying:

1. Visit your production contact page
2. Submit a test message
3. Check if email arrives at: sathis.rc.dev@gmail.com
4. If not working:
   - Check browser console for errors
   - Verify environment variables in hosting dashboard
   - Confirm domain is whitelisted in EmailJS
   - Check EmailJS dashboard logs

---

## Where to Get Your EmailJS Credentials

If you haven't set up EmailJS yet:

1. Go to: https://dashboard.emailjs.com
2. Create account / Login
3. **Add Email Service**:
   - Click "Add New Service"
   - Choose "Gmail"
   - Connect your Gmail account
   - Note the **Service ID**
4. **Create Email Template**:
   - Click "Email Templates"
   - Create new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
     - `{{reply_to}}` - Reply-to email
   - Set destination: sathis.rc.dev@gmail.com
   - Note the **Template ID**
5. **Get Public Key**:
   - Click "Account"
   - Click "General"
   - Find "API Keys" section
   - Copy the **Public Key**

Now you have all three values needed! ✅

---

## Vercel CLI Alternative

You can also add environment variables via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Add environment variables
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production

# You'll be prompted to enter values for each
```

---

**Keep this file for reference when deploying!**



