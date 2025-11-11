'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export interface DemoFormProps {
  className?: string
}

// Form validation schema with Zod
const demoFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(2, 'Company name is required'),
  phoneNumber: z.string().optional(),
  teamSize: z.number().min(1).max(100),
  interests: z.array(z.string()).min(1, 'Select at least one area of interest'),
  message: z.string().optional(),
})

type DemoFormData = z.infer<typeof demoFormSchema>

/**
 * Demo/Contact Form with validation
 *
 * Features:
 * - Multiple field types (text, email, number, checkboxes)
 * - Form validation with React Hook Form + Zod
 * - Range slider for team size
 * - Multi-select checkboxes
 * - Success message on submit
 * - Fully accessible
 */
export default function DemoForm({ className }: DemoFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [teamSize, setTeamSize] = useState(10)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      teamSize: 10,
      interests: [],
    },
  })

  const interestOptions = [
    'Project Management',
    'Team Collaboration',
    'Time Tracking',
    'Client Management',
    'Reporting & Analytics',
    'Integrations',
  ]

  const onSubmit = async (data: DemoFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="demo" className={cn('section bg-white py-24', className)}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6 font-onest leading-tight">
            Ready to automate the boring stuff?
          </h2>
          <p className="text-lg text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Start your free 7-minute setup. No credit card required. Join 2,500+ teams who already use Flowline to work smarter.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-primary-200/50">
            {isSubmitted ? (
              // Success Message
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-dark mb-4 font-onest">
                  Thank You!
                </h3>
                <p className="text-body text-neutral-gray">
                  We've received your request. Our team will contact you within 24
                  hours to schedule your personalized demo.
                </p>
              </motion.div>
            ) : (
              // Form
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="First Name"
                      {...register('firstName')}
                      error={errors.firstName?.message}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      label="Last Name"
                      {...register('lastName')}
                      error={errors.lastName?.message}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <Input
                  label="Work Email"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  required
                />

                {/* Company Name */}
                <Input
                  label="Company Name"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                  required
                />

                {/* Phone Number */}
                <Input
                  label="Phone Number"
                  type="tel"
                  {...register('phoneNumber')}
                  error={errors.phoneNumber?.message}
                  helperText="Optional"
                />

                {/* Team Size Slider */}
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">
                    Team Size: <span className="text-primary-700">{teamSize}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teamSize}
                    {...register('teamSize', {
                      valueAsNumber: true,
                      onChange: (e) => setTeamSize(parseInt(e.target.value)),
                    })}
                    className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-neutral-gray mt-1">
                    <span>1</span>
                    <span>100+</span>
                  </div>
                </div>

                {/* Interests Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-3">
                    Areas of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={interest}
                          {...register('interests')}
                          className="w-4 h-4 text-primary-700 border-neutral-lightGray rounded focus:ring-2 focus:ring-primary-700"
                        />
                        <span className="text-sm text-neutral-dark">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.interests.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-dark mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-button border border-neutral-lightGray transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Getting started...' : 'Get Flowline - Free'}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-neutral-gray text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary-700 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-700 hover:underline">
                    Terms of Service
                  </a>.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
