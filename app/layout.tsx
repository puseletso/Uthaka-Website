import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flowline Clone - Uthaka Project',
  description: 'Pixel-perfect recreation of the Flowline website',
  keywords: ['flowline', 'web design', 'modern website'],
  authors: [{ name: 'Uthaka Team' }],
  openGraph: {
    title: 'Flowline Clone - Uthaka Project',
    description: 'Pixel-perfect recreation of the Flowline website',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
