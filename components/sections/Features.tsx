'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from '@/components/ui/Card'

export interface FeaturesProps {
  className?: string
}

/**
 * Features section matching Flowline design system
 *
 * Features:
 * - 3 feature cards with icons
 * - Alternating layouts for visual interest
 * - Animated entrance with Framer Motion
 * - Hover effects on cards
 * - Fully responsive
 */
export default function Features({ className }: FeaturesProps) {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description:
        'Experience blazing fast load times and seamless interactions. Our optimized infrastructure ensures your team can work without delays, boosting productivity across the board.',
      color: 'text-yellow-500',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'Your data is protected with bank-level encryption and advanced security protocols. Stay compliant with industry standards while maintaining complete control over your information.',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description:
        'Work together in real-time with your team, no matter where they are. Share files, communicate instantly, and keep everyone aligned on project goals and deliverables.',
      color: 'text-blue-500',
    },
  ]

  return (
    <section id="features" className={cn('section bg-white', className)}>
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
            Powerful Features for{' '}
            <span className="text-gradient">Modern Teams</span>
          </h2>
          <p className="text-body text-neutral-gray max-w-2xl mx-auto">
            Everything you need to streamline your workflow, collaborate effectively,
            and deliver exceptional results.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-button flex items-center justify-center mb-6',
                    'bg-gradient-to-br from-primary-100 to-primary-200'
                  )}
                >
                  <feature.icon className={cn('w-6 h-6', feature.color)} />
                </div>

                {/* Content */}
                <h3 className="text-h4 font-semibold text-neutral-dark mb-3 font-onest">
                  {feature.title}
                </h3>
                <p className="text-body text-neutral-gray leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
