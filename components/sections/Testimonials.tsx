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
 * Testimonials section with masonry grid layout
 *
 * Features:
 * - 12 testimonial cards
 * - Masonry grid (responsive columns)
 * - Star ratings
 * - Author info with avatars
 * - Staggered animations
 * - Quote icon decoration
 */
export default function Testimonials({ className }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      title: 'Product Manager',
      company: 'TechCorp',
      content:
        'Flowline transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%. Highly recommend!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      title: 'CEO',
      company: 'StartupXYZ',
      content:
        'Best investment we made this year. The seamless integration with our existing tools saved us countless hours. Customer support is outstanding.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Emily Watson',
      title: 'Design Lead',
      company: 'Creative Studio',
      content:
        'As a designer, I appreciate the clean UI and thoughtful UX. Everything is exactly where you expect it to be. No learning curve at all.',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: 'James Park',
      title: 'Engineering Manager',
      company: 'DevOps Inc',
      content:
        'Flowline handles our complex workflows effortlessly. The performance is incredible even with large datasets. Worth every penny.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Lisa Anderson',
      title: 'Marketing Director',
      company: 'Growth Agency',
      content:
        'Our team was up and running in minutes. The onboarding process is smooth, and the templates saved us weeks of setup time.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'David Kim',
      title: 'CTO',
      company: 'FinTech Solutions',
      content:
        'Security and compliance were our top concerns. Flowline exceeded our expectations with SOC 2 certification and GDPR compliance built-in.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Rachel Green',
      title: 'Operations Manager',
      company: 'LogisticsHub',
      content:
        'Managing multiple projects across teams has never been easier. Real-time updates keep everyone on the same page. Game changer!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Alex Turner',
      title: 'Founder',
      company: 'SaaS Startup',
      content:
        'The free trial convinced us immediately. Migration from our old tool was painless, and the ROI was evident within weeks.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Sophia Martinez',
      title: 'Project Lead',
      company: 'Consulting Firm',
      content:
        'Client collaboration features are exceptional. Sharing progress and getting feedback is now seamless. Our clients love the transparency.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Tom Wilson',
      title: 'VP of Sales',
      company: 'Enterprise Corp',
      content:
        'Scaled from 10 to 200 users without any issues. The platform grows with you. Enterprise support team is incredibly responsive.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Nina Patel',
      title: 'HR Director',
      company: 'RemoteFirst',
      content:
        'Perfect for our distributed team. Time zone management and async communication features make remote work actually work.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Chris Johnson',
      title: 'Creative Director',
      company: 'Design Agency',
      content:
        'Beautiful interface, powerful features. Our design team loves the aesthetic, while developers appreciate the robust API. Win-win.',
      rating: 5,
      avatar: '👨‍🎨',
    },
  ]

  return (
    <section id="testimonials" className={cn('section bg-primary-50', className)}>
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
            Loved by <span className="text-gradient">Thousands</span> of Users
          </h2>
          <p className="text-body text-neutral-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say
            about their experience with Flowline.
          </p>
        </motion.div>

        {/* Testimonials Grid (Masonry-style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-body text-neutral-gray mb-4">
            Join thousands of satisfied customers
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            Start your free trial today
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
