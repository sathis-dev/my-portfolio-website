// lib/emailjs.ts
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
}

interface EmailParams {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_name: string
  to_email: string
}

/**
 * Send notification email to site owner
 */
export const sendNotificationEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID!,
      {
        to_name: params.to_name,
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject,
        message: params.message
      }
    )
    
    console.log('Notification email sent:', response.status)
    return response.status === 200
  } catch (error) {
    console.error('Notification email error:', error)
    return false
  }
}

/**
 * Send auto-reply email to message sender
 */
export const sendAutoReplyEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // Check if auto-reply template ID is configured
    const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID
    
    if (!autoReplyTemplateId) {
      console.error('❌ AUTOREPLY_TEMPLATE_ID is missing in .env.local!')
      console.error('👉 Add: NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxx')
      return false
    }
    
    console.log('📤 Auto-reply template ID:', autoReplyTemplateId.substring(0, 12) + '...')
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      autoReplyTemplateId,
      {
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject,
        message: params.message,
        to_name: params.to_name,
        to_email: params.to_email
      }
    )
    
    console.log('✅ Auto-reply email sent:', response.status)
    return response.status === 200
  } catch (error) {
    console.error('❌ Auto-reply email error:', error)
    console.error('💡 Possible issues:')
    console.error('   1. Template ID is wrong')
    console.error('   2. Template "To Email" is not set to {{from_email}}')
    console.error('   3. Template doesn\'t exist in EmailJS dashboard')
    return false
  }
}

/**
 * Send both notification and auto-reply emails
 */
export const sendContactEmails = async (params: EmailParams): Promise<{
  success: boolean
  notificationSent: boolean
  autoReplySent: boolean
}> => {
  try {
    console.log('🚀 Starting email send process...')
    console.log('📧 Recipient (notification):', params.to_email)
    console.log('📧 Recipient (auto-reply):', params.from_email)
    
    // Send notification to you
    console.log('📬 Sending notification email...')
    const notificationSent = await sendNotificationEmail(params)
    
    // Send auto-reply to sender (only if notification was successful)
    let autoReplySent = false
    if (notificationSent) {
      console.log('✅ Notification sent! Now sending auto-reply...')
      autoReplySent = await sendAutoReplyEmail(params)
      
      if (autoReplySent) {
        console.log('✅ Auto-reply sent successfully!')
      } else {
        console.warn('⚠️ Auto-reply failed - check template ID and configuration')
      }
    } else {
      console.warn('⚠️ Notification failed - skipping auto-reply')
    }
    
    console.log('📊 Final results:', { notificationSent, autoReplySent })
    
    return {
      success: notificationSent,
      notificationSent,
      autoReplySent
    }
  } catch (error) {
    console.error('❌ Email sending error:', error)
    return {
      success: false,
      notificationSent: false,
      autoReplySent: false
    }
  }
}

/**
 * Check rate limit (prevent spam)
 */
export const checkRateLimit = (): boolean => {
  if (typeof window === 'undefined') return true
  
  const lastSubmit = localStorage.getItem('lastContactSubmit')
  if (!lastSubmit) return true
  
  const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit)
  const oneHour = 3600000 // 1 hour in milliseconds
  
  return timeSinceLastSubmit > oneHour
}

/**
 * Set rate limit timestamp
 */
export const setRateLimit = (): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem('lastContactSubmit', Date.now().toString())
}

/**
 * Get time remaining until rate limit expires
 */
export const getRateLimitTimeRemaining = (): number => {
  if (typeof window === 'undefined') return 0
  
  const lastSubmit = localStorage.getItem('lastContactSubmit')
  if (!lastSubmit) return 0
  
  const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit)
  const oneHour = 3600000
  const remaining = oneHour - timeSinceLastSubmit
  
  return remaining > 0 ? remaining : 0
}

/**
 * Format time remaining in human-readable format
 */
export const formatTimeRemaining = (milliseconds: number): string => {
  const minutes = Math.ceil(milliseconds / 60000)
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }
  return '1 hour'
}
