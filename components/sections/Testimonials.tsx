'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TestimonialsProps {
  className?: string
}

interface Testimonial {
  name: string
  title: string
  company: string
  content: string
  rating: number
  avatar: string
}

/**
 * Testimonials section matching Flowline original design
 *
 * Features:
 * - 6 testimonial cards
 * - 2-column grid layout
 * - Star ratings
 * - Author info with avatars
 * - Staggered animations
 * - Quote icon decoration
 */
export default function Testimonials({ className }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      title: 'Operations Director',
      company: 'TechFlow Inc',
      content:
        'Flowline saved our team 15+ hours every week. Tasks that used to take days now complete instantly. The ROI was immediate and the AI keeps getting smarter.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Chen',
      title: 'Founder & CEO',
      company: 'StartupHub',
      content:
        'We went from spending $8K/month on manual processes to nearly zero with Flowline. The automation is flawless and setup took literally 7 minutes. Best tool we use.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Emma Rodriguez',
      title: 'VP of Customer Success',
      company: 'CloudScale',
      content:
        'Our customer response time dropped from hours to seconds. Flowline handles all the repetitive support tasks while we focus on strategy. Game changer for our team.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'David Park',
      title: 'Head of Engineering',
      company: 'DataSync Solutions',
      content:
        'Integration with our existing tools was seamless. One-click setup for Slack, HubSpot, and our internal APIs. Zero downtime, zero headaches. Highly recommend.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Lisa Anderson',
      title: 'Marketing Lead',
      company: 'GrowthLabs',
      content:
        'Flowline automated our entire lead nurturing workflow. What used to require 3 team members now runs perfectly on autopilot. We scaled 5x without hiring.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'James Wilson',
      title: 'Product Manager',
      company: 'InnovateCo',
      content:
        'The AI learns our patterns and suggests optimizations we never thought of. Error rate dropped to near-zero and our team can finally focus on creative work instead of data entry.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ]

  return (
    <section id="testimonials" className={cn('section bg-primary-100 py-24', className)}>
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
            Trusted by teams who value their time
          </h2>
          <p className="text-lg text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            See how Flowline is helping thousands of teams automate the boring stuff and focus on what actually matters.
          </p>
        </motion.div>

        {/* Testimonials Grid (2-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                'bg-white rounded-card p-6 shadow-card hover:shadow-card-hover',
                'transition-all duration-300 hover:-translate-y-1'
              )}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary-700 opacity-30" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-body text-neutral-gray mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-lightGray">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-lavender flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark text-sm font-onest">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-gray">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
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
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-lavender text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            See Flowline in Action
          </a>
        </motion.div>
      </div>
    </section>
  )
}
