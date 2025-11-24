#!/usr/bin/env node

/**
 * EmailJS Configuration Checker
 * Run: node check-emailjs-config.js
 */

const fs = require('fs')
const path = require('path')

console.log('\n🔍 EmailJS Configuration Checker\n')
console.log('='.repeat(50))

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local')
const envExists = fs.existsSync(envPath)

if (!envExists) {
  console.log('\n❌ .env.local file NOT FOUND!')
  console.log('\n📝 Create .env.local with these 4 variables:')
  console.log('   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx')
  console.log('   NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xxxxx')
  console.log('   NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxx')
  console.log('   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx')
  console.log('\n💡 Copy env.template to .env.local to get started\n')
  process.exit(1)
}

console.log('✅ .env.local file found')

// Read and parse .env.local
const envContent = fs.readFileSync(envPath, 'utf-8')
const envLines = envContent.split('\n').filter(line => 
  line.trim() && !line.trim().startsWith('#')
)

// Required variables
const required = [
  'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
  'NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID',
  'NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID',
  'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
]

const found = {}
const missing = []

// Parse environment variables
envLines.forEach(line => {
  const [key, ...valueParts] = line.split('=')
  const value = valueParts.join('=').trim()
  
  if (required.includes(key.trim())) {
    found[key.trim()] = value
  }
})

// Check what's missing
required.forEach(varName => {
  if (!found[varName] || found[varName] === '' || found[varName].includes('YOUR_')) {
    missing.push(varName)
  }
})

console.log('\n📋 Configuration Status:\n')

// Show status for each variable
required.forEach(varName => {
  const value = found[varName]
  const isMissing = missing.includes(varName)
  
  if (isMissing) {
    console.log(`   ❌ ${varName}`)
    console.log(`      Status: NOT SET or using placeholder`)
  } else {
    const preview = value.substring(0, 15) + '...'
    console.log(`   ✅ ${varName}`)
    console.log(`      Preview: ${preview}`)
  }
  console.log('')
})

console.log('='.repeat(50))

if (missing.length > 0) {
  console.log('\n⚠️  ISSUES FOUND!\n')
  console.log('Missing or invalid variables:')
  missing.forEach(varName => {
    console.log(`   • ${varName}`)
  })
  
  console.log('\n📝 How to fix:')
  console.log('   1. Go to https://www.emailjs.com/')
  console.log('   2. Get your credentials:')
  
  if (missing.includes('NEXT_PUBLIC_EMAILJS_SERVICE_ID')) {
    console.log('      • Service ID: Email Services section')
  }
  if (missing.includes('NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID')) {
    console.log('      • Notification Template ID: Email Templates section')
  }
  if (missing.includes('NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID')) {
    console.log('      • Auto-Reply Template ID: Email Templates section')
    console.log('        (You need to CREATE this template!)')
  }
  if (missing.includes('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')) {
    console.log('      • Public Key: Account > API Keys section')
  }
  
  console.log('   3. Update .env.local with your actual values')
  console.log('   4. Restart dev server: npm run dev')
  console.log('')
  
  // Specific check for auto-reply
  if (missing.includes('NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID')) {
    console.log('⚠️  AUTO-REPLY TEMPLATE ID IS MISSING!')
    console.log('')
    console.log('   This is likely why auto-reply emails aren\'t working.')
    console.log('')
    console.log('   📖 See: AUTOREPLY_TROUBLESHOOTING.md for detailed fix')
    console.log('   📖 Or: docs/EMAILJS_COMPLETE_SETUP_GUIDE.md Step 4')
    console.log('')
  }
  
  process.exit(1)
} else {
  console.log('\n✅ ALL VARIABLES CONFIGURED!\n')
  console.log('Your EmailJS setup looks good. If auto-reply isn\'t working:')
  console.log('')
  console.log('1. Check browser console (F12) for error messages')
  console.log('2. Verify auto-reply template "To Email" = {{from_email}}')
  console.log('3. Check sender\'s spam folder')
  console.log('4. See: AUTOREPLY_TROUBLESHOOTING.md')
  console.log('')
  process.exit(0)
}

