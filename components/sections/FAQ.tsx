'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FAQProps {
  className?: string
}

interface FAQItem {
  question: string
  answer: string
}

/**
 * FAQ Accordion section matching Flowline design system
 *
 * Features:
 * - Accordion with expand/collapse
 * - Smooth animations
 * - Only one item open at a time
 * - Accessible keyboard navigation
 * - Responsive design
 */
export default function FAQ({ className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'How does the free trial work?',
      answer:
        'Our 14-day free trial gives you full access to all features with no credit card required. You can invite your team, create unlimited projects, and explore everything Flowline has to offer. If you decide to continue after the trial, simply choose a plan that works for you.',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits based on your billing cycle. There are no long-term contracts or commitments.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For annual plans, we also offer invoice billing for teams of 10 or more. All payments are processed securely through industry-standard encryption.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we take security very seriously. All data is encrypted in transit and at rest using bank-level AES-256 encryption. We\'re SOC 2 Type II certified, GDPR compliant, and undergo regular security audits. Your data is backed up daily across multiple secure locations.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'We offer 24/7 email support for all plans, with priority support for Pro and Enterprise customers. Enterprise plans also include dedicated account management and phone support. Our average response time is under 2 hours, and we maintain a comprehensive help center with guides and tutorials.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={cn('section bg-white', className)}>
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-body text-neutral-gray max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking
            for, feel free to contact our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  'w-full text-left p-6 rounded-card bg-primary-50 border-2 border-transparent',
                  'transition-all duration-300 hover:border-primary-200',
                  openIndex === index && 'border-primary-300 bg-white shadow-card'
                )}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-neutral-dark pr-8 font-onest">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'w-6 h-6 text-primary-700 flex-shrink-0 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-body text-neutral-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-body text-neutral-gray mb-4">
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            Contact our support team
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
