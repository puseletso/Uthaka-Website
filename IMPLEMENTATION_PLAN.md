# Flowline Clone - Implementation Plan

**Project**: Uthaka Website (Flowline Clone)
**Tech Stack**: Next.js + Tailwind CSS + Framer Motion
**Timeline**: 7 days (following ByteFusion Solution Pipeline)
**Quality Target**: 95+ Performance, 100 Accessibility

---

## 📅 Project Timeline Overview

```
Day 1: Setup & Design System
Day 2-3: Component Development
Day 4-5: Page Assembly & Functionality
Day 6: QA & Optimization
Day 7: Deployment (Vercel + cPanel)
```

**Total Duration**: 7 days
**Estimated Hours**: 40-50 hours (full-time equivalent)

---

## Phase 1: Project Setup (Day 1 - Morning)

### ⏱️ Duration: 2-3 hours

### Tasks:

#### 1.1 Initialize Next.js Project
```bash
cd "/Users/puseletsomaraba/Documents/Uthaka Project"

# Create Next.js app with TypeScript
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false

# Answer prompts:
# ✓ TypeScript? Yes
# ✓ ESLint? Yes
# ✓ Tailwind CSS? Yes
# ✓ `src/` directory? No
# ✓ App Router? Yes
# ✓ Import alias? Yes (@/*)
```

#### 1.2 Install Dependencies
```bash
# Core dependencies
npm install framer-motion lucide-react clsx tailwind-merge

# Form handling
npm install react-hook-form zod @hookform/resolvers

# Dev dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D prettier prettier-plugin-tailwindcss
npm install -D @tailwindcss/forms @tailwindcss/typography
```

#### 1.3 Configure Project Files

**tailwind.config.js**:
```javascript
// Copy from TECH_STACK_RECOMMENDATION.md
```

**next.config.js**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export to cPanel
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
}

module.exports = nextConfig
```

**.prettierrc**:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

#### 1.4 Set Up Fonts

Download and add to `public/fonts/`:
- Onest (400, 500, 600, 700)
- Inter (400, 600, 700)
- Satoshi (400, 500, 700)

**app/fonts.ts**:
```typescript
import localFont from 'next/font/local';

export const onest = localFont({
  src: [
    { path: '../public/fonts/Onest-Regular.woff2', weight: '400' },
    { path: '../public/fonts/Onest-Medium.woff2', weight: '500' },
    { path: '../public/fonts/Onest-SemiBold.woff2', weight: '600' },
    { path: '../public/fonts/Onest-Bold.woff2', weight: '700' },
  ],
  variable: '--font-onest',
});

export const inter = localFont({
  src: [
    { path: '../public/fonts/Inter-Regular.woff2', weight: '400' },
    { path: '../public/fonts/Inter-SemiBold.woff2', weight: '600' },
    { path: '../public/fonts/Inter-Bold.woff2', weight: '700' },
  ],
  variable: '--font-inter',
});

export const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700' },
  ],
  variable: '--font-satoshi',
});
```

#### 1.5 Start Auto-Save System
```bash
./auto-save-control.sh start
```

#### 1.6 Initial Git Commit
```bash
git add .
git commit -m "chore: Initialize Next.js project with Tailwind and TypeScript

- Set up Next.js 14 with App Router
- Configure Tailwind CSS with Flowline theme
- Install Framer Motion for animations
- Add React Hook Form + Zod for forms
- Configure fonts (Onest, Inter, Satoshi)
- Set up project structure

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin main
```

**Quality Gate**: ✅ Project builds successfully (`npm run build`)

---

## Phase 2: Design System & Component Library (Day 1 - Afternoon)

### ⏱️ Duration: 4-5 hours

### Tasks:

#### 2.1 Create Design Tokens

**app/globals.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-primary-50: 251 245 255;
    --color-primary-700: 125 95 146; /* Main brand */
    --color-primary-950: 39 31 54; /* Dark */

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    --spacing-2xl: 6rem;
    --spacing-3xl: 10rem;

    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.25rem;
    --radius-pill: 100px;

    /* Shadows */
    --shadow-glow: 0 4px 12px 12px rgba(180, 156, 197, 0.278);
    --shadow-glow-sm: 0px 4px 6px 4px rgba(180, 156, 197, 0.078);
  }

  body {
    @apply font-onest text-gray-900 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-satoshi font-bold;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/10 backdrop-blur-sm border border-white/20;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
  }
}
```

#### 2.2 Build Base Components

Create in `components/ui/`:

1. **Button.tsx** (4 variants: primary, secondary, ghost, outline)
2. **Card.tsx** (glassmorphic styling)
3. **Input.tsx** (form input with error states)
4. **Textarea.tsx**
5. **Select.tsx** (dropdown with country flags for phone)
6. **Checkbox.tsx**
7. **Badge.tsx** (trust badges, feature badges)
8. **Accordion.tsx** (FAQ component)

**Example - Button.tsx**:
```typescript
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'rounded-pill font-medium transition-all duration-200',
          'hover:scale-105 active:scale-95',
          {
            'bg-gradient-to-r from-primary-600 to-primary-400 text-white shadow-glow':
              variant === 'primary',
            'bg-transparent border-2 border-primary-700 text-primary-700':
              variant === 'outline',
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
    );
  }
);

Button.displayName = 'Button';
export default Button;
```

#### 2.3 Create Utility Functions

**lib/utils.ts**:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**lib/constants.ts**:
```typescript
export const TESTIMONIALS = [
  {
    name: 'Hannah Ward',
    title: 'Freelance Product Marketer',
    quote: 'Slick, simple, and easy to make ours.',
  },
  // ... (all 12 testimonials)
];

export const FAQ_ITEMS = [
  {
    question: 'How secure is Flowline?',
    answer: 'We use industry-leading security protocols...',
  },
  // ... (all 5 FAQ items)
];

export const FEATURES = [
  {
    badge: 'Automate Workflows',
    heading: 'Save 4+ hours every day',
    description: 'Let our intelligent automation tools...',
  },
  // ... (all 3 features)
];
```

**Quality Gate**: ✅ All UI components render correctly in Storybook or test page

---

## Phase 3: Section Components (Day 2 - Full Day)

### ⏱️ Duration: 6-8 hours

### Tasks:

#### 3.1 Navigation Component
- Fixed position with blur backdrop
- Logo + CTA button
- Mobile menu (hamburger)
- Smooth scroll to sections

**components/Navigation.tsx**

#### 3.2 Hero Section
- Large heading with gradient background
- Subheading
- 2 CTA buttons
- Trust badges ("Trusted by 2,500+ teams")
- Company logos (5)
- Badge pills ("7 min setup", "gdpr compliant", "iso27001")

**components/sections/Hero.tsx**

#### 3.3 Features Section (3 feature blocks)
- Feature 1: Automate Workflows (left content, right visual)
- Feature 2: Real-Time Analytics (left visual, right content)
- Feature 3: Seamless Integrations (left content, right visual)
- Each with badge, heading, description, CTA

**components/sections/Features.tsx**

**Quality Gate**: ✅ Hero + Features sections match design exactly

---

## Phase 4: Complex Sections (Day 3 - Full Day)

### ⏱️ Duration: 6-8 hours

### Tasks:

#### 4.1 Comparison Table Section
- Dark background
- 2-column table (Others vs. Flowline)
- 10 comparison rows
- Animated checkmarks
- Bottom CTA

**components/sections/ComparisonTable.tsx**

#### 4.2 How It Works Section
- 3 step cards (horizontal layout)
- Icon + heading + description
- Centered layout

**components/sections/HowItWorks.tsx**

#### 4.3 Testimonials Section
- 12 testimonial cards
- Masonry grid (2 columns desktop, 1 column mobile)
- Profile info + quote

**components/sections/Testimonials.tsx**

**Quality Gate**: ✅ Comparison table + Testimonials responsive and animated

---

## Phase 5: Forms & Interactive Elements (Day 4 - Morning)

### ⏱️ Duration: 4-5 hours

### Tasks:

#### 5.1 Demo/Contact Form
- 10 form fields (as per analysis)
- React Hook Form + Zod validation
- Phone number with country selector
- Team size slider
- Checkboxes for interests
- Submit button with loading state
- Success/error messages

**components/sections/DemoForm.tsx**

**Validation Schema (Zod)**:
```typescript
import { z } from 'zod';

export const demoFormSchema = z.object({
  firstName: z.string().min(2, 'First name required'),
  lastName: z.string().min(2, 'Last name required'),
  email: z.string().email('Valid email required'),
  teamSize: z.number().min(1).max(100),
  phoneNumber: z.string().optional(),
  companyName: z.string().min(2, 'Company name required'),
  availability: z.string().optional(),
  interests: z.array(z.string()).min(1, 'Select at least one interest'),
  message: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
```

#### 5.2 FAQ Accordion
- 5 FAQ items
- Expand/collapse animation
- Only one open at a time
- Smooth transitions

**components/sections/FAQ.tsx**

**Quality Gate**: ✅ Form validates correctly, FAQ accordion works smoothly

---

## Phase 6: Footer & Final Sections (Day 4 - Afternoon)

### ⏱️ Duration: 3-4 hours

### Tasks:

#### 6.1 Pre-Footer CTA Section
- Centered content
- Large CTA button
- Social proof elements

**components/sections/PreFooterCTA.tsx**

#### 6.2 Footer
- 3-column layout
- Logo + tagline + CTA
- Links (5 links)
- Copyright + attribution
- Dark background

**components/Footer.tsx**

#### 6.3 Sticky Bottom CTA
- Fixed position bottom center
- "Free Template $666 USD" text
- Icon + text
- Always visible

**components/StickyCTA.tsx**

**Quality Gate**: ✅ Footer layout correct, sticky CTA visible on all pages

---

## Phase 7: Animations & Polish (Day 5 - Morning)

### ⏱️ Duration: 4-5 hours

### Tasks:

#### 7.1 Scroll Animations
- Fade in on scroll (all sections)
- Slide up on scroll (cards)
- Stagger animations (testimonials, features)

**Using Framer Motion**:
```typescript
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
  variants={fadeInVariants}
>
  Content
</motion.div>
```

#### 7.2 Hover Effects
- Button scale on hover
- Card lift on hover
- Shadow intensity increase

#### 7.3 Gradient Backgrounds
- Animated gradients (hero section)
- Glassmorphism effects
- Blur backdrops

#### 7.4 Mobile Menu
- Hamburger icon animation
- Slide-in menu
- Smooth transitions
- Close on link click

**Quality Gate**: ✅ All animations smooth (60fps), no jank

---

## Phase 8: Content & Assets (Day 5 - Afternoon)

### ⏱️ Duration: 3-4 hours

### Tasks:

#### 8.1 Source Images
- Company logos (5 for "Trusted by" section)
- Workflow diagram (Feature 1)
- Dashboard preview (Feature 2)
- Integration logos (Feature 3)
- Step icons (How It Works)

**Options**:
- Unsplash (free stock photos)
- SVG icons from Lucide React
- Create mockups in Figma
- Use placeholder images initially

#### 8.2 Write Content
- Update copy to match Uthaka brand (if different from Flowline)
- Customize testimonials (or keep as-is)
- Update company names/links
- Customize FAQ answers

#### 8.3 SEO Optimization
- Meta titles
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

**app/layout.tsx (metadata)**:
```typescript
export const metadata = {
  title: 'Uthaka - Boring work made simple with AI',
  description: 'Flowline plugs into your existing workflows...',
  openGraph: {
    title: 'Uthaka - Boring work made simple with AI',
    description: 'Flowline plugs into your existing workflows...',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uthaka - Boring work made simple with AI',
    description: 'Flowline plugs into your existing workflows...',
    images: ['/og-image.jpg'],
  },
};
```

**Quality Gate**: ✅ All images optimized, content finalized, SEO complete

---

## Phase 9: Quality Assurance (Day 6 - Full Day)

### ⏱️ Duration: 6-8 hours

### Tasks:

#### 9.1 Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view

# Target scores:
# Performance: 95+
# Accessibility: 100
# Best Practices: 95+
# SEO: 100
```

**Fix Issues**:
- Image optimization
- Contrast ratios
- ARIA labels
- Meta tags

#### 9.2 Cross-Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Test**:
- Layout rendering
- Animations
- Form submission
- Navigation
- Mobile menu

#### 9.3 Responsive Testing
- Mobile: 375px, 414px, 390px (iPhone sizes)
- Tablet: 768px, 834px, 1024px (iPad sizes)
- Desktop: 1280px, 1440px, 1920px
- Large: 2560px

**Check**:
- No horizontal scroll
- Touch targets 44px minimum
- Text readable (16px minimum)
- Images scale properly
- Navigation usable

#### 9.4 Accessibility Audit (WCAG 2.1 Level AA)
- Keyboard navigation (Tab, Enter, Esc)
- Screen reader testing (NVDA, VoiceOver)
- Color contrast (4.5:1 minimum)
- ARIA labels
- Form labels
- Focus indicators
- Alt text on images

**Tools**:
- axe DevTools
- WAVE
- Lighthouse Accessibility

#### 9.5 Performance Optimization
- Code splitting
- Image lazy loading
- Font preloading
- Minification
- Gzip compression
- Caching headers

**Quality Gate**: ✅ Lighthouse scores 95+, WCAG AA compliant, cross-browser tested

---

## Phase 10: Deployment (Day 7 - Full Day)

### ⏱️ Duration: 6-8 hours

### Tasks:

#### 10.1 Vercel Deployment (Staging)

**Steps**:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to staging
vercel

# Test staging URL
# Review with stakeholders

# Deploy to production
vercel --prod
```

**Configure**:
- Environment variables (if any)
- Custom domain (if needed)
- Analytics enabled
- Preview deployments for branches

**Vercel Dashboard**:
- Project settings
- Deployment logs
- Performance monitoring
- Analytics

**Quality Gate**: ✅ Vercel deployment successful, staging URL live

---

#### 10.2 cPanel Deployment (Production)

**Steps**:

1. **Build Static Export**:
```bash
# Build production version
npm run build

# Export to static HTML
npx next export

# Output in out/ directory
```

2. **Prepare Files**:
```bash
# Navigate to output
cd out

# Create zip file
zip -r uthaka-website.zip .

# OR: Use FTP client (FileZilla, Cyberduck)
```

3. **Upload to cPanel**:
   - Login to cPanel at truehost.co.za
   - Navigate to File Manager
   - Go to public_html/ (or domain folder)
   - Upload uthaka-website.zip
   - Extract archive
   - Delete zip file

4. **Configure .htaccess**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Handle clean URLs
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

5. **Set Up SSL**:
   - cPanel → SSL/TLS Status
   - Run AutoSSL (Let's Encrypt)
   - Verify HTTPS working

6. **Test Production Site**:
   - Visit domain
   - Test all functionality
   - Check forms
   - Verify mobile responsiveness
   - Run Lighthouse audit

**Quality Gate**: ✅ cPanel deployment successful, production site live with HTTPS

---

#### 10.3 Post-Deployment Checklist

**Technical**:
- [ ] Site loads correctly
- [ ] HTTPS working (green padlock)
- [ ] All images loading
- [ ] Forms submitting (test mode)
- [ ] Navigation working
- [ ] Mobile menu functional
- [ ] Animations smooth
- [ ] No console errors
- [ ] Lighthouse scores 95+

**Content**:
- [ ] All text correct
- [ ] Links working
- [ ] Email addresses correct
- [ ] Phone numbers correct
- [ ] Social media links working
- [ ] Copyright year correct

**SEO**:
- [ ] Meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Google Search Console set up
- [ ] Analytics tracking (if needed)

**Performance**:
- [ ] Page load < 3 seconds
- [ ] Core Web Vitals "Good"
- [ ] No layout shifts
- [ ] Images optimized
- [ ] Caching working

**Quality Gate**: ✅ All checklist items verified

---

## 📊 Milestone Summary

### Deliverables

1. ✅ **Source Code**
   - Complete Next.js project
   - All components built
   - TypeScript throughout
   - Clean, documented code

2. ✅ **Documentation**
   - README.md (setup instructions)
   - Component documentation
   - Deployment guides
   - Maintenance notes

3. ✅ **Deployments**
   - Vercel staging: [URL]
   - Vercel production: [URL]
   - cPanel production: [URL]

4. ✅ **Testing Reports**
   - Lighthouse scores
   - Accessibility audit
   - Cross-browser tests
   - Performance metrics

5. ✅ **Assets**
   - All images optimized
   - Icons (SVG)
   - Fonts (local)

---

## 🎯 Success Criteria

### Visual Accuracy
- ✅ 95%+ match to original design
- ✅ All colors exact
- ✅ Typography identical
- ✅ Spacing consistent

### Performance
- ✅ Lighthouse Performance: 95+
- ✅ Load time: < 3 seconds
- ✅ Core Web Vitals: All "Good"
- ✅ No layout shifts (CLS < 0.1)

### Accessibility
- ✅ Lighthouse Accessibility: 100
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigable
- ✅ Screen reader compatible

### Functionality
- ✅ All features working
- ✅ Forms validate properly
- ✅ Animations smooth (60fps)
- ✅ Mobile menu functional
- ✅ No console errors

### Deployment
- ✅ Vercel staging live
- ✅ Vercel production live
- ✅ cPanel production live
- ✅ HTTPS configured
- ✅ DNS working

---

## 🚀 Quick Start Commands

```bash
# Navigate to project
cd "/Users/puseletsomaraba/Documents/Uthaka Project"

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Deploy to Vercel
vercel --prod

# Run Lighthouse audit
lighthouse http://localhost:3000 --view

# Format code
npm run format

# Lint code
npm run lint
```

---

## 📝 Daily Checklist Template

Use this checklist each day:

**Start of Day**:
- [ ] Pull latest code (`git pull`)
- [ ] Review today's tasks
- [ ] Start auto-save (`./auto-save-control.sh start`)
- [ ] Update TodoWrite list

**During Development**:
- [ ] Test each component as built
- [ ] Commit after each feature (`git commit`)
- [ ] Take screenshots for comparison
- [ ] Update documentation

**End of Day**:
- [ ] Run Lighthouse audit
- [ ] Check Playwright screenshots
- [ ] Commit all changes
- [ ] Push to remote (`git push`)
- [ ] Update PROGRESS.md
- [ ] Mark todos as complete

---

**Implementation Plan Status**: ✅ **READY TO EXECUTE**

**Next Action**: Initialize Next.js project (Phase 1, Task 1.1)

---

**Last Updated**: November 11, 2025
