'use client'

import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FooterProps {
  className?: string
}

/**
 * Footer component matching Flowline design system
 *
 * Features:
 * - 3-column layout (desktop)
 * - Social media links
 * - Navigation links
 * - Copyright notice
 * - Fully responsive
 */
export default function Footer({ className }: FooterProps) {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className={cn('bg-neutral-dark text-white', className)}>
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="text-2xl font-bold text-gradient mb-4 inline-block font-onest">
              Flowline
            </a>
            <p className="text-neutral-lightGray text-sm mb-6">
              Streamline your workflow and boost team productivity with our all-in-one
              collaboration platform.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-charcoal flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-onest">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-lightGray text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-onest">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-lightGray text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-onest">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-lightGray text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-charcoal">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-lightGray text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Flowline. All rights reserved.
            </p>
            <p className="text-neutral-lightGray text-sm">
              Made with ❤️ by Uthaka Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
