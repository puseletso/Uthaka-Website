import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'dark' | 'glass' | 'bordered'
  hoverable?: boolean
  children: React.ReactNode
}

/**
 * Card component matching Flowline design system
 *
 * Variants:
 * - default: White background with shadow
 * - dark: Dark background with light text
 * - glass: Glassmorphism effect with backdrop blur
 * - bordered: Transparent with border only
 *
 * Features:
 * - hoverable: Adds lift effect on hover
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          // Base styles
          'rounded-card p-6',

          // Variant styles
          {
            'bg-white shadow-card': variant === 'default',
            'bg-neutral-dark text-white shadow-card': variant === 'dark',
            'glass': variant === 'glass',
            'bg-transparent border-2 border-neutral-lightGray': variant === 'bordered',
          },

          // Hoverable effect
          {
            'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1':
              hoverable,
          },

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
