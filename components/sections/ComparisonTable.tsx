'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ComparisonTableProps {
  className?: string
}

interface ComparisonRow {
  feature: string
  flowline: boolean
  competitors: boolean
}

/**
 * Comparison Table section
 *
 * Features:
 * - 2-column comparison (Flowline vs Competitors)
 * - Check/X marks for feature availability
 * - Gradient header
 * - Responsive design
 * - Animated entrance
 */
export default function ComparisonTable({ className }: ComparisonTableProps) {
  const features: ComparisonRow[] = [
    { feature: 'Unlimited Projects', flowline: true, competitors: false },
    { feature: 'Real-time Collaboration', flowline: true, competitors: true },
    { feature: 'Advanced Analytics', flowline: true, competitors: false },
    { feature: '24/7 Customer Support', flowline: true, competitors: false },
    { feature: 'Custom Integrations', flowline: true, competitors: true },
    { feature: 'Enterprise Security', flowline: true, competitors: true },
    { feature: 'Free Trial (No Credit Card)', flowline: true, competitors: false },
    { feature: 'Mobile Apps (iOS/Android)', flowline: true, competitors: true },
    { feature: 'API Access', flowline: true, competitors: false },
    { feature: 'Dedicated Account Manager', flowline: true, competitors: false },
  ]

  return (
    <section className={cn('section bg-white', className)}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-neutral-dark mb-4 font-onest">
            Why Choose <span className="text-gradient">Flowline?</span>
          </h2>
          <p className="text-body text-neutral-gray max-w-2xl mx-auto">
            See how Flowline stacks up against the competition. We offer more features,
            better support, and unbeatable value.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-card shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-primary-700 to-accent-lavender text-white">
              <div className="text-left font-semibold font-onest">Feature</div>
              <div className="text-center font-semibold font-onest">Flowline</div>
              <div className="text-center font-semibold font-onest">Others</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-neutral-lightGray">
              {features.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-primary-50 transition-colors"
                >
                  <div className="text-left text-neutral-dark font-medium">
                    {row.feature}
                  </div>
                  <div className="flex justify-center">
                    {row.flowline ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.competitors ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-neutral-gray opacity-30" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-body text-neutral-gray mb-6">
            Ready to experience the difference?
          </p>
          <button className="btn-primary px-8 py-4 text-lg">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  )
}
