import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate with Zod
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.issues },
        { status: 400 }
      )
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Simulate 95% success rate for testing
    const success = Math.random() > 0.05

    if (success) {
      // In a real application, you would:
      // - Send email using a service like Resend, SendGrid, etc.
      // - Save to database
      // - Trigger notifications

      console.log('Contact form submission:', result.data)

      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      })
    } else {
      throw new Error('Simulated server error')
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

