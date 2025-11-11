'use client'

import { motion } from 'framer-motion'
import { Check, X, Shield, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ComparisonTableProps {
  className?: string
}

interface ComparisonRow {
  metric: string
  others: string
  flowline: string
}

/**
 * Comparison Table matching Flowline original design
 *
 * Features:
 * - Dark navy background
 * - "Your competitors are automating for a reason!" heading
 * - Metrics comparison (Others vs Flowline)
 * - 10 comparison rows
 * - Trust badges (GDPR, ISO27001)
 */
export default function ComparisonTable({ className }: ComparisonTableProps) {
  const comparisons: ComparisonRow[] = [
    { metric: 'Task Completion', others: 'Several days', flowline: 'Instantly' },
    { metric: 'Error Rate', others: 'Frequently', flowline: 'Near-zero mistakes' },
    { metric: 'Setup Time', others: '2-4 weeks', flowline: '7 minutes' },
    { metric: 'Training Required', others: 'Extensive', flowline: 'None - AI learns' },
    { metric: 'Cost per Month', others: '$2,500+', flowline: 'Free to start' },
    { metric: 'Integration Complexity', others: 'Complex APIs', flowline: 'One-click connect' },
    { metric: 'Data Security', others: 'Varies', flowline: 'ISO27001 + GDPR' },
    { metric: 'Customer Support', others: 'Business hours', flowline: '24/7 live chat' },
    { metric: 'Automation Updates', others: 'Manual', flowline: 'Automatic AI' },
    { metric: 'Scalability', others: 'Limited', flowline: 'Unlimited workflows' },
  ]

  return (
    <section className={cn('section bg-dark-bg py-24', className)}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-onest leading-tight">
            Your competitors are automating for a reason!
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            While others are still doing things manually, smart teams are using Flowline to work 10x faster. See the difference for yourself.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-dark-navy rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-6 p-8 bg-gradient-to-r from-accent-purple/20 to-accent-lavender/20 border-b border-white/10">
              <div className="text-left font-bold text-white text-lg font-onest">Metric</div>
              <div className="text-center font-bold text-white/60 text-lg font-onest">Others</div>
              <div className="text-center font-bold text-white text-lg font-onest flex items-center justify-center gap-2">
                <span className="text-accent-lavender">Flowline</span>
                <div className="w-2 h-2 bg-accent-lavender rounded-full animate-pulse" />
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/5">
              {comparisons.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-6 p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="text-left text-white font-semibold">
                    {row.metric}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <X className="w-5 h-5 text-red-400/80 flex-shrink-0" />
                    <span className="text-white/50 text-center">{row.others}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium text-center">{row.flowline}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="uppercase tracking-wide font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase tracking-wide font-medium">ISO27001 Certified</span>
            </div>
          </div>

          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-lavender text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Join the Smart Teams
          </a>
        </motion.div>
      </div>
    </section>
  )
}
