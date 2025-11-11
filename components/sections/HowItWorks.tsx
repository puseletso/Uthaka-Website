'use client'

import { motion } from 'framer-motion'
import { UserPlus, Settings, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface HowItWorksProps {
  className?: string
}

/**
 * How It Works section matching Flowline design system
 *
 * Features:
 * - 3-step process flow
 * - Numbered steps with icons
 * - Connecting lines between steps (desktop)
 * - Animated entrance
 * - Responsive layout
 */
export default function HowItWorks({ className }: HowItWorksProps) {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Sign up in 7 minutes',
      description:
        'Create your free account and connect your tools. No credit card needed. Our AI will guide you through the setup process.',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Integrate your workflows',
      description:
        'Connect your favorite apps with one-click integrations. Flowline automatically detects repetitive tasks and suggests automations.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Let AI automate everything',
      description:
        'Sit back and watch as Flowline handles the boring work. Our AI learns from your patterns and continuously optimizes your workflows.',
    },
  ]

  return (
    <section id="how-it-works" className={cn('section bg-white py-24', className)}>
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
            Get started in 3 simple steps
          </h2>
          <p className="text-lg text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Setting up automation has never been easier. Flowline does the heavy lifting so you can focus on what matters most.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-accent-lavender to-primary-400 opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Step Card */}
              <div className="relative z-10 bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-700 to-accent-lavender flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg font-onest">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-14 h-14 rounded-button bg-primary-100 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-700" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h4 font-semibold text-neutral-dark mb-3 font-onest">
                  {step.title}
                </h3>
                <p className="text-body text-neutral-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            View detailed guide
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
