import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

/**
 * Button component matching Flowline design system
 *
 * Variants:
 * - primary: Gradient background with glow effect
 * - secondary: Transparent with border, fills on hover
 * - ghost: Transparent, subtle background on hover
 * - outline: Border only, no fill
 *
 * Sizes:
 * - sm: Smaller padding, text-sm
 * - md: Default size
 * - lg: Larger padding, text-lg
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-pill font-semibold',
          'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2',

          // Variant styles
          {
            // Primary: Gradient with glow
            'bg-gradient-to-r from-primary-700 to-accent-lavender text-white shadow-glow hover:shadow-xl hover:scale-105 active:scale-95':
              variant === 'primary',

            // Secondary: Border that fills on hover
            'bg-transparent border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white':
              variant === 'secondary',

            // Ghost: Subtle hover effect
            'bg-transparent text-primary-700 hover:bg-primary-100':
              variant === 'ghost',

            // Outline: Border only
            'bg-transparent border border-neutral-lightGray text-neutral-dark hover:border-primary-700 hover:text-primary-700':
              variant === 'outline',
          },

          // Size styles
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
