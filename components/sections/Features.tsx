'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Workflow, BarChart3, Plug } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FeaturesProps {
  className?: string
}

/**
 * Features section matching Flowline original design
 *
 * Features:
 * - 3 alternating feature blocks
 * - Illustrations on alternating sides
 * - Label + Heading + Description + CTA
 * - Workflow diagram, Analytics dashboard, Integration logos
 */
export default function Features({ className }: FeaturesProps) {
  const features = [
    {
      label: 'Automate Workflows',
      heading: 'Save 4+ hours every day',
      description:
        'Let our intelligent automation tools handle repetitive tasks, so you can reclaim your time and focus on strategic initiatives.',
      icon: Workflow,
      imageSide: 'right',
      illustration: 'workflow',
    },
    {
      label: 'Real-Time Analytics',
      heading: 'Make informed decisions instantly',
      description:
        'Gain instant insights into your operations with dynamic dashboards and reports, empowering you to act on data the moment it matters.',
      icon: BarChart3,
      imageSide: 'left',
      illustration: 'analytics',
    },
    {
      label: 'Seamless Integrations',
      heading: 'Connect to all your tools',
      description:
        'Integrate your favorite apps effortlessly, ensuring a smooth flow of information and reducing friction across your tech stack.',
      icon: Plug,
      imageSide: 'right',
      illustration: 'integrations',
    },
  ]

  return (
    <section id="features" className={cn('section bg-white py-24', className)}>
      <div className="container-custom">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={cn(
                'grid md:grid-cols-2 gap-12 lg:gap-16 items-center',
                feature.imageSide === 'left' && 'md:grid-flow-dense'
              )}
            >
              {/* Text Content */}
              <div className={cn(feature.imageSide === 'left' && 'md:col-start-2')}>
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <feature.icon className="w-4 h-4 text-accent-purple mr-2" />
                  <span className="text-sm font-bold text-neutral-dark uppercase tracking-wide">
                    {feature.label}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6 leading-tight">
                  {feature.heading}
                </h2>

                <p className="text-lg text-neutral-charcoal mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <a
                  href="#demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-lavender text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  Get Started for Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Illustration */}
              <div className={cn(feature.imageSide === 'left' && 'md:col-start-1 md:row-start-1')}>
                <div className="relative aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 shadow-xl border border-primary-200/50">
                  {/* Workflow Illustration */}
                  {feature.illustration === 'workflow' && (
                    <div className="space-y-4 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                        <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-accent-purple rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-neutral-lightGray rounded w-3/4 mb-2" />
                          <div className="h-2 bg-neutral-lightGray rounded w-1/2" />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-px h-8 bg-accent-purple/30" />
                      </div>
                      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                        <div className="w-10 h-10 bg-accent-lavender/20 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-accent-lavender rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-neutral-lightGray rounded w-3/4 mb-2" />
                          <div className="h-2 bg-neutral-lightGray rounded w-1/2" />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-px h-8 bg-accent-purple/30" />
                      </div>
                      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                        <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-accent-purple rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-neutral-lightGray rounded w-3/4 mb-2" />
                          <div className="h-2 bg-neutral-lightGray rounded w-1/2" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Analytics Illustration */}
                  {feature.illustration === 'analytics' && (
                    <div className="h-full flex flex-col justify-center space-y-4">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-3 bg-neutral-lightGray rounded w-32" />
                          <div className="h-3 bg-accent-purple/20 rounded w-16 font-bold text-xs flex items-center justify-center text-accent-purple">
                            98%
                          </div>
                        </div>
                        <div className="flex items-end gap-2 h-32">
                          <div className="flex-1 bg-gradient-to-t from-accent-purple to-accent-purple/60 rounded-t-lg h-20" />
                          <div className="flex-1 bg-gradient-to-t from-accent-lavender to-accent-lavender/60 rounded-t-lg h-28" />
                          <div className="flex-1 bg-gradient-to-t from-accent-purple to-accent-purple/60 rounded-t-lg h-16" />
                          <div className="flex-1 bg-gradient-to-t from-accent-lavender to-accent-lavender/60 rounded-t-lg h-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Integrations Illustration */}
                  {feature.illustration === 'integrations' && (
                    <div className="h-full flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-lavender rounded-lg opacity-60" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
