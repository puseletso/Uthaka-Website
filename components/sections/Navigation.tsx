'use client'

import { Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavigationProps {
  className?: string
}

/**
 * Navigation matching Flowline original design
 *
 * Features:
 * - Minimal design: Logo + CTA button only
 * - Fixed header
 * - Light background with subtle border
 * - No menu links
 */
export default function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-primary-100/80 backdrop-blur-md',
        'border-b border-primary-200/50',
        className
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-lavender rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-dark">
              Flowline
            </span>
          </a>

          {/* CTA Button */}
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-accent-purple/10 text-accent-purple hover:bg-accent-purple/20 font-semibold rounded-full transition-all duration-300 border border-accent-purple/20 hover:border-accent-purple/40 text-sm md:text-base"
          >
            Get Flowline - it's Free
          </a>
        </div>
      </div>
    </nav>
  )
}
