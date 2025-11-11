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
      question: 'How fast can I get started with Flowline?',
      answer:
        'Setup takes just 7 minutes. No credit card required. Simply create an account, connect your tools with one-click integrations, and our AI will start suggesting automations immediately. Most teams are up and running within the first session.',
    },
    {
      question: 'What kind of tasks can Flowline automate?',
      answer:
        'Flowline automates repetitive workflows like data entry, report generation, email responses, task routing, file organization, and much more. Our AI learns your patterns and suggests new automations as it discovers opportunities to save you time.',
    },
    {
      question: 'Is it really free?',
      answer:
        'Yes! Flowline is free to start with unlimited automations for small teams. As you scale, we offer affordable plans starting at $29/month for larger teams. No hidden fees, no credit card required to start. You only pay when you need advanced features.',
    },
    {
      question: 'How secure is my data with Flowline?',
      answer:
        'Your data security is our top priority. We\'re ISO27001 certified and GDPR compliant. All data is encrypted in transit and at rest using bank-level AES-256 encryption. We never sell your data and undergo regular third-party security audits.',
    },
    {
      question: 'What if I need help setting up automations?',
      answer:
        'We offer 24/7 live chat support to help you set up and optimize your workflows. Our AI also provides step-by-step guidance as you build automations. Plus, we have a comprehensive library of pre-built templates to get you started instantly.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Absolutely! There are no long-term contracts. You can cancel your plan at any time with one click. Your data remains accessible for 30 days after cancellation, and you can export everything before closing your account.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={cn('section bg-primary-100 py-24', className)}>
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
            Common questions answered
          </h2>
          <p className="text-lg text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Flowline. Can't find the answer you're looking for? Our support team is here to help 24/7.
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
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-charcoal mb-6">
            Still have questions?
          </p>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-lavender text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Chat with our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
