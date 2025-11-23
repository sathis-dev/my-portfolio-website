import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .enum(['project', 'collaboration', 'job', 'other'], {
      required_error: 'Please select a subject',
    }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

