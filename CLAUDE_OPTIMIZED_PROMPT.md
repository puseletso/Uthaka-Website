# Claude Optimized Prompt - Website Cloning

**Purpose**: Optimized prompt for Claude to efficiently clone and recreate websites
**Project**: Uthaka Website
**Created**: November 11, 2025

---

## 🎯 Master Prompt Template

```
I need to clone and recreate this website exactly: [WEBSITE_URL]

PROJECT CONTEXT:
- Project: Uthaka Website
- Repository: https://github.com/puseletso/Uthaka-Website.git
- Local: /Users/puseletsomaraba/Documents/Uthaka Project/
- Auto-save: Active (5-minute cycles)
- Quality target: 95+ Performance, 100 Accessibility, WCAG 2.1 AA

ANALYSIS REQUIREMENTS:
1. Use Playwright MCP to:
   - Navigate to the website
   - Take full-page screenshots
   - Capture accessibility tree snapshot
   - Extract all visible text
   - Identify all interactive elements
   - Document navigation structure

2. Extract design system:
   - Color palette (all colors used)
   - Typography (fonts, sizes, weights, line-heights)
   - Spacing patterns (margins, padding)
   - Border radius values
   - Shadow styles
   - Animation/transition patterns

3. Document structure:
   - Page layout (header, main, footer)
   - Section breakdown
   - Component inventory
   - Grid/flexbox patterns
   - Responsive breakpoints

4. Identify technology:
   - Framework used (React, Vue, vanilla JS?)
   - CSS approach (Tailwind, SASS, CSS-in-JS?)
   - Build tools visible
   - Third-party libraries
   - API endpoints (if any)

TECH STACK RECOMMENDATION:
Based on analysis, recommend the optimal stack considering:
- Site complexity (simple vs. complex)
- Dynamic features (static vs. interactive)
- SEO requirements
- Performance needs
- Hosting constraints (Vercel + cPanel)
- Maintenance ease

IMPLEMENTATION PLAN:
Create detailed phase-by-phase plan:
- Phase 1: Setup & Configuration
- Phase 2: Design System Implementation
- Phase 3: Component Library
- Phase 4: Page Development
- Phase 5: Functionality Implementation
- Phase 6: QA & Optimization
- Phase 7: Deployment (Vercel staging)
- Phase 8: Production Deployment (cPanel)

DEPLOYMENT STRATEGY:
- Development: Vercel (automatic deployments)
- Production: truehost.co.za via cPanel
- Include deployment instructions for both

QUALITY STANDARDS:
Follow ByteFusion Solution Pipeline:
- WCAG 2.1 Level AA accessibility
- Lighthouse scores: 95+ Performance, 100 Accessibility
- Mobile-first responsive design
- Cross-browser compatibility
- SEO optimization

Please start by analyzing the website and providing:
1. Complete design system extraction
2. Component inventory with descriptions
3. Recommended tech stack with justification
4. Detailed implementation timeline
5. Step-by-step development plan
```

---

## 🔍 Phase-Specific Prompts

### Phase 1: Website Analysis

```
Analyze this website comprehensively: [URL]

Use Playwright MCP to:
1. Navigate to the site and take screenshots
2. Capture the accessibility tree
3. Extract all text content
4. Identify all interactive elements
5. Document the navigation structure

Then create:
1. DESIGN_SYSTEM.md - All colors, fonts, spacing, shadows
2. COMPONENTS.md - Every component with description
3. STRUCTURE.md - Page layout and sections
4. TECH_ANALYSIS.md - Framework/tools identified
5. SCREENSHOTS/ - Full page and section screenshots

Be thorough - I need pixel-perfect accuracy.
```

---

### Phase 2: Tech Stack Selection

```
Based on the website analysis, recommend the optimal tech stack.

Consider:
- Site type: [Static/Dynamic/E-commerce/Blog/etc.]
- Complexity: [Simple/Medium/Complex]
- Features needed: [List from analysis]
- Hosting: Vercel (dev) + truehost.co.za cPanel (prod)
- Performance target: 95+ Lighthouse
- SEO importance: [High/Medium/Low]

Provide:
1. Recommended stack with detailed justification
2. Alternative options with pros/cons
3. Dependencies and packages needed
4. Build configuration requirements
5. Deployment considerations for both platforms

Format as decision matrix with scoring.
```

---

### Phase 3: Implementation Planning

```
Create detailed implementation plan for cloning [WEBSITE_URL]

Using tech stack: [CHOSEN_STACK]

Break down into:
1. Daily milestones (realistic timeline)
2. Component development order (dependencies first)
3. Testing checkpoints
4. Quality gate validations
5. Deployment steps

Include:
- Estimated hours per task
- Risk areas and mitigation
- Testing strategy
- Rollback plans

Use TodoWrite to track all tasks.
```

---

### Phase 4: Component Development

```
Implement [COMPONENT_NAME] component from the analyzed website.

Requirements:
- Pixel-perfect match to original
- Responsive (mobile, tablet, desktop)
- Accessible (WCAG 2.1 AA)
- Semantic HTML5
- BEM naming convention (or chosen methodology)
- All states (default, hover, active, focus, disabled)

Include:
- HTML structure
- CSS styling
- JavaScript functionality (if needed)
- Tests (if applicable)
- Documentation

Reference: [SCREENSHOT_PATH] or [DESIGN_SPECS]
```

---

### Phase 5: Page Assembly

```
Build [PAGE_NAME] page using developed components.

Requirements:
- Match original layout exactly
- Use component library
- Implement responsive behavior
- Add SEO meta tags
- Optimize images
- Ensure accessibility

Checklist:
- [ ] HTML structure semantic
- [ ] All components integrated
- [ ] Responsive at all breakpoints
- [ ] Images optimized (WebP, lazy loading)
- [ ] Meta tags complete
- [ ] Lighthouse score 95+
- [ ] Cross-browser tested

Provide complete page code.
```

---

### Phase 6: Quality Assurance

```
Run comprehensive QA on the cloned website.

Tests needed:
1. Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
2. Cross-browser testing (Chrome, Firefox, Safari, Edge)
3. Mobile responsive testing (320px to 2560px)
4. Accessibility audit (WCAG 2.1 Level AA)
5. Visual regression (compare to original)
6. Functionality testing (all interactions)
7. Form validation testing
8. Load time testing

Document:
- Issues found
- Fixes implemented
- Before/after metrics
- Remaining items (if any)

Use Playwright for automated testing where possible.
```

---

### Phase 7: Deployment (Vercel Staging)

```
Deploy the cloned website to Vercel for staging.

Steps:
1. Create vercel.json configuration
2. Set up environment variables (if needed)
3. Configure build commands
4. Set up preview deployments
5. Deploy to staging URL
6. Test staging deployment
7. Document deployment URL

Include:
- Deployment configuration
- Build logs
- Performance metrics from Vercel
- Any issues encountered
- Staging URL for review
```

---

### Phase 8: Production Deployment (cPanel)

```
Deploy to truehost.co.za production via cPanel.

Requirements:
- Build production-optimized version
- Create deployment package
- FTP upload instructions
- cPanel configuration steps
- SSL setup (Let's Encrypt)
- .htaccess configuration (caching, redirects)
- Final testing on production

Provide:
1. Step-by-step deployment guide
2. cPanel configuration checklist
3. Backup procedure
4. Rollback instructions
5. Post-deployment verification steps
6. Performance optimization tips
```

---

## 💡 Context-Aware Prompts

### When Stuck on Design Details

```
I need to extract exact design specifications for [ELEMENT].

From the original website [URL]:
1. Take close-up screenshot of [ELEMENT]
2. Identify exact colors (hex codes)
3. Measure spacing (margins, padding)
4. Font details (family, size, weight, line-height)
5. Border/shadow specifications
6. Hover/active state styling

Use browser DevTools via Playwright if possible.
```

---

### When Functionality is Complex

```
The [FEATURE] on the original site is complex.

Help me:
1. Understand how it works (user flow)
2. Identify the technology used
3. Break it down into smaller pieces
4. Create step-by-step implementation plan
5. Identify any third-party libraries needed
6. Provide code examples

Original site: [URL]
Feature location: [DESCRIBE]
```

---

### When Performance Issues

```
The cloned site has performance issues.

Current Lighthouse score: [SCORE]
Target: 95+

Analyze and optimize:
1. Image loading and formats
2. JavaScript bundle size
3. CSS delivery
4. Render-blocking resources
5. Caching strategy
6. Third-party scripts

Provide specific optimizations with code examples.
```

---

### When Accessibility Issues

```
Accessibility audit found issues.

Current score: [SCORE]
Target: 100/100 (WCAG 2.1 Level AA)

Fix:
1. Color contrast issues
2. Missing ARIA labels
3. Keyboard navigation problems
4. Focus indicators
5. Alt text on images
6. Form label associations

Provide fixes with explanations.
```

---

## 🎯 One-Shot Comprehensive Prompt

Use this for end-to-end implementation:

```
COMPREHENSIVE WEBSITE CLONE PROJECT

TARGET WEBSITE: [URL]
PROJECT: Uthaka Website
LOCATION: /Users/puseletsomaraba/Documents/Uthaka Project/
REPOSITORY: https://github.com/puseletso/Uthaka-Website.git

MISSION: Clone the website exactly with pixel-perfect accuracy.

PHASE 1 - ANALYSIS (Use Playwright MCP):
✓ Navigate to [URL]
✓ Take full-page screenshots
✓ Capture accessibility tree
✓ Extract design system (colors, fonts, spacing, shadows)
✓ Document all components
✓ Identify tech stack
✓ Map all pages and sections
✓ List all interactive features
✓ Note third-party integrations

PHASE 2 - TECH STACK:
✓ Recommend optimal stack for:
  - Development speed
  - Performance (95+ Lighthouse)
  - Hosting compatibility (Vercel + cPanel)
  - Maintenance ease
✓ List all dependencies
✓ Create package.json
✓ Set up build configuration

PHASE 3 - IMPLEMENTATION:
✓ Set up development environment
✓ Start auto-save system
✓ Create design system (CSS variables)
✓ Build component library
✓ Develop pages in order
✓ Implement functionality
✓ Add animations/transitions
✓ Optimize images

PHASE 4 - QUALITY ASSURANCE:
✓ Lighthouse audit (95+ target)
✓ Accessibility audit (100/100 target)
✓ Cross-browser testing
✓ Mobile responsive testing
✓ Visual comparison to original
✓ Performance optimization
✓ SEO implementation

PHASE 5 - DEPLOYMENT:
✓ Deploy to Vercel (staging)
✓ Final review and approval
✓ Build production version
✓ Deploy to cPanel (production)
✓ Configure DNS/SSL
✓ Post-deployment verification

QUALITY STANDARDS:
- WCAG 2.1 Level AA compliance
- 95+ Performance score
- 100 Accessibility score
- Mobile-first responsive
- Cross-browser compatible
- SEO optimized
- Semantic HTML5
- Clean, commented code

DELIVERABLES:
1. Complete source code
2. Design system documentation
3. Component documentation
4. Deployment guides (Vercel + cPanel)
5. Testing reports
6. Performance metrics

Use TodoWrite to track progress through all phases.
Use Explore/Plan agents for complex analysis.
Use Playwright for testing and screenshots.
Reference ByteFusion project for quality standards.

START WITH PHASE 1 - WEBSITE ANALYSIS.
```

---

## 📊 Success Criteria

The clone is successful when:

✅ **Visual Accuracy**
- Pixel-perfect match to original (< 5% variance)
- All colors exact
- Typography identical
- Spacing consistent

✅ **Functionality**
- All features working
- Forms validate properly
- Animations smooth
- Mobile menu functional

✅ **Performance**
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Load time: < 3 seconds
- Core Web Vitals: All "Good"

✅ **Quality**
- WCAG 2.1 Level AA compliant
- Cross-browser compatible
- Mobile responsive
- SEO optimized

✅ **Deployment**
- Vercel staging live
- cPanel production live
- SSL configured
- DNS working

---

## 🚀 Quick Start Commands

```bash
# Navigate to project
cd "/Users/puseletsomaraba/Documents/Uthaka Project"

# Start auto-save
./auto-save-control.sh start

# Start development server (after setup)
npm run dev
# OR
python3 -m http.server 8000

# Run tests
npm test

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Check Lighthouse score
lighthouse [URL] --view
```

---

**Ready to clone the website - provide the URL and I'll start with Phase 1 analysis!**
