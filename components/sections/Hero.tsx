'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

export interface HeroProps {
  className?: string
}

/**
 * Hero section matching Flowline design system
 *
 * Features:
 * - Full viewport height
 * - Gradient background with radial overlay
 * - Animated entrance with Framer Motion
 * - Trust badges/social proof
 * - Dual CTAs (primary + secondary)
 * - Responsive layout
 */
export default function Hero({ className }: HeroProps) {
  const trustBadges = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
  ]

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        'gradient-radial pt-24 pb-16',
        className
      )}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge/Announcement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-pill text-sm font-medium">
              ✨ New: Advanced Analytics Dashboard
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero font-bold text-neutral-dark mb-6 font-onest"
          >
            Streamline Your Workflow with{' '}
            <span className="text-gradient">Flowline</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body md:text-xl text-neutral-gray mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The all-in-one platform that helps teams collaborate, manage projects,
            and deliver results faster. Join thousands of satisfied customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-gray"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-700" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero Image/Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative rounded-card overflow-hidden shadow-2xl">
              {/* Placeholder for hero image/dashboard screenshot */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-pink/20 flex items-center justify-center">
                <p className="text-neutral-gray text-lg">
                  Dashboard Preview / Hero Image
                </p>
              </div>

              {/* Decorative glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary-50/50 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-lavender/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
