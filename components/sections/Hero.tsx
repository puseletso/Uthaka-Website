'use client'

import { motion } from 'framer-motion'
import { Star, Clock, Shield, CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface HeroProps {
  className?: string
}

/**
 * Hero section matching Flowline original design
 *
 * Features:
 * - Star rating badge
 * - "Boring work made simple with AI" heading
 * - Two gradient buttons
 * - Trust badges (7 MIN SETUP, GDPR, ISO27001)
 * - Dashboard preview illustration
 */
export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        'bg-primary-100 pt-32 pb-20',
        className
      )}
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          {/* Star Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-neutral-gray font-medium">
              Trusted by 2,500+ teams
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6 font-onest leading-tight tracking-tight"
          >
            Boring work made simple with AI
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-charcoal mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Flowline plugs into your existing workflows, so you can ditch the
            boring stuff and focus on growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-lavender text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-dark font-semibold rounded-full border border-neutral-lightGray hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              Learn how
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-16 text-sm text-neutral-gray"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="uppercase tracking-wide font-medium">7 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="uppercase tracking-wide font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase tracking-wide font-medium">ISO27001</span>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative aspect-[16/10] bg-white rounded-3xl shadow-2xl p-6 border border-neutral-lightGray overflow-hidden">
              {/* Dashboard Preview Illustration Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-50 via-white to-accent-lightPurple/30 rounded-2xl flex items-center justify-center relative">
                {/* Placeholder Content */}
                <div className="text-neutral-gray opacity-50">Dashboard Preview</div>

                {/* Mock UI Elements */}
                <div className="absolute top-4 left-4 w-32 h-8 bg-white rounded-lg shadow-sm" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm" />
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-32 bg-white/80 rounded-xl shadow-md" />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-100 via-transparent to-transparent rounded-3xl opacity-60 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Trusted by Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-12 left-0 right-0 text-center"
      >
        <p className="text-sm text-neutral-gray font-medium">
          Trusted to do the boring stuff for high-performing teams worldwide
        </p>
      </motion.div>
    </section>
  )
}
