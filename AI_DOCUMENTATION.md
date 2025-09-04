# AI Assistant Documentation - OTM Education Website

This document provides comprehensive guidance for AI assistants working on the OTM Education website project.

## 🎯 Project Overview

**OTM Education** is a French international education consulting company. The website serves as their primary digital presence, showcasing services, destinations, and student testimonials.

### Core Business
- **Services**: Visa assistance, university applications, interview preparation, post-admission support
- **Target Audience**: French students seeking international education
- **Destinations**: France, UK, USA, Germany, Switzerland, and 20+ other countries
- **Language**: All content in French

## 🏗 Architecture & Design Philosophy

### Design Principles
1. **Modern & Professional**: Clean, contemporary design that builds trust
2. **User-Centric**: Intuitive navigation and clear call-to-actions
3. **Performance-First**: Optimized images, minimal dependencies, fast loading
4. **Mobile-Responsive**: Mobile-first approach with seamless desktop experience
5. **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

### Visual Style
- **Color Scheme**: Blue primary (#1e40af), professional grays, accent yellow
- **Typography**: Poppins font family for modern, readable text
- **Layout**: Card-based design with subtle shadows and rounded corners
- **Animations**: Smooth, purposeful transitions using AOS library
- **Imagery**: High-quality student photos, professional hero images

## 📁 File Structure & Organization

### Critical Files
```
app.js                 # Main Express server (PORT 3001)
routes.js              # All route definitions
public/assets/styles.css # Single CSS file (1475 lines)
views/partials/head.ejs # Global head with CDN links
```

### Image Organization
```
/images/
├── heroes/           # Page background images
├── students/         # Country/destination photos  
├── testimonials/     # Student profile photos
└── gallery/          # General gallery images
```

**Important**: All images are WebP format for performance. Never use PNG/JPEG.

## 🎨 Design Patterns & Components

### Hero Sections
```css
.hero {
    height: 100vh;
    background: linear-gradient + image overlay;
    display: flex;
    align-items: center;
    justify-content: center;
}
```
- **Full viewport height** (100vh)
- **Gradient overlays** for text readability
- **Centered content** with call-to-action buttons
- **Page-specific images** in `/images/heroes/`

### Service Cards
```css
.service-highlight {
    background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}
```
- **Glass-morphism effect** with subtle gradients
- **Compact padding** (1rem) for screen fitting
- **Gradient badges** for service categories
- **Hover animations** with scale and lift effects

### Interactive Elements
- **Destinations**: Hover overlays with country information
- **Testimonials**: Modern cards with verified badges
- **Buttons**: Primary (blue), outline (white), accent (yellow)
- **Animations**: AOS library for scroll-triggered effects

## 🛠 Technical Implementation

### CSS Architecture
- **Single stylesheet**: `styles.css` contains all custom styles
- **Tailwind CDN**: Used for utility classes, not local build
- **CSS Variables**: For consistent theming
- **Component-based**: Organized by sections with clear naming

### JavaScript
- **Minimal JS**: Only AOS animations and form handling
- **No frameworks**: Vanilla JavaScript for simplicity
- **Performance**: No heavy libraries or build processes

### Image Optimization
- **WebP format**: All images converted for 92% size reduction
- **Organized structure**: Logical directory organization
- **Lazy loading**: Images load on demand
- **Responsive**: Different sizes for different breakpoints

## 📄 Content Structure

### Home Page Sections
1. **Hero**: Main value proposition with CTAs
2. **Services Carousel**: Auto-scrolling marquee of 6 services
3. **Destinations**: Interactive country cards (5 countries)
4. **Statistics**: Animated counters with infographic
5. **Testimonials**: 3 student success stories
6. **Gallery**: Enhanced grid with hover effects
7. **CTA**: Final conversion section

### Services Page Structure
1. **Hero**: Service-focused messaging
2. **Sub-navigation**: Chips for section jumping
3. **Service Highlights**: Creative cards with features
4. **Process Steps**: 4-step visual process
5. **Pricing**: Three-tier structure
6. **Testimonials**: Service-specific success stories

## 🎯 User Experience Guidelines

### Navigation
- **French routes**: `/nos-services`, `/pourquoi-otm-education`, `/inscription`
- **Consistent header**: Same across all pages
- **Footer links**: Updated to match new routes
- **Breadcrumbs**: Not implemented (keep simple)

### Content Strategy
- **French language**: All content must be in French
- **Professional tone**: Trust-building, expert positioning
- **Student-focused**: Benefits and outcomes emphasized
- **Clear CTAs**: "Contactez-nous", "Demander un devis", "Inscription gratuite"

### Performance Standards
- **Fast loading**: <3 seconds on mobile
- **Optimized images**: WebP format, appropriate sizes
- **Minimal dependencies**: Only essential libraries
- **Clean code**: No dead code or unused files

## 🔧 Development Guidelines

### Code Quality
- **Consistent naming**: kebab-case for files, camelCase for variables
- **Clean structure**: Logical file organization
- **Documentation**: Clear comments for complex sections
- **Error handling**: Graceful fallbacks for missing content

### Responsive Design
- **Mobile-first**: Design for mobile, enhance for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Adequate button sizes and spacing

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Progressive enhancement**: Works without JavaScript
- **Fallbacks**: Graceful degradation for older browsers

## 🚨 Common Issues & Solutions

### Image Problems
- **Wrong format**: Always use WebP, never PNG/JPEG
- **Wrong path**: Use organized directory structure
- **Missing images**: Check file exists in correct directory
- **Size issues**: Optimize for web, use appropriate dimensions

### CSS Issues
- **Conflicting styles**: Check for duplicate selectors
- **Responsive problems**: Test on multiple screen sizes
- **Animation issues**: Ensure AOS library is loaded
- **Performance**: Avoid heavy animations or large files

### Route Problems
- **404 errors**: Check routes.js for correct paths
- **Missing pages**: Ensure EJS files exist in views/pages/
- **Navigation**: Update header/footer links when adding routes

## 📊 Performance Metrics

### Current Optimizations
- **File size**: 92% reduction with WebP images
- **Dependencies**: Minimal package.json (only essentials)
- **CSS**: Single stylesheet, no unused code
- **JavaScript**: Minimal, no heavy frameworks

### Monitoring
- **Page speed**: Test with Google PageSpeed Insights
- **Mobile performance**: Ensure mobile-first approach
- **Image optimization**: Regular compression checks
- **Code quality**: Regular cleanup of unused files

## 🎨 Design System Rules

### Colors
```css
--primary-color: #1e40af;    /* Blue - main brand */
--secondary-color: #64748b;  /* Gray - text */
--accent-color: #f59e0b;     /* Yellow - highlights */
--success-color: #10b981;    /* Green - success states */
```

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Sizes**: Responsive scaling with Tailwind classes

### Spacing
- **Consistent**: Use Tailwind spacing scale
- **Mobile**: Smaller padding/margins on mobile
- **Desktop**: Generous whitespace for readability

## 🔄 Maintenance Guidelines

### Regular Tasks
- **Image optimization**: Convert new images to WebP
- **Code cleanup**: Remove unused CSS/JS
- **Dependency updates**: Keep packages current
- **Performance monitoring**: Regular speed tests

### Adding New Features
1. **Plan structure**: Where does it fit in existing design?
2. **Follow patterns**: Use existing component styles
3. **Test responsive**: Ensure mobile compatibility
4. **Optimize images**: Convert to WebP format
5. **Update documentation**: Keep this guide current

## 🎯 Success Criteria

### User Experience
- **Fast loading**: <3 seconds on mobile
- **Intuitive navigation**: Clear user journey
- **Professional appearance**: Builds trust and credibility
- **Mobile-friendly**: Seamless mobile experience

### Technical
- **Clean codebase**: No dead code or unused files
- **Optimized performance**: Minimal file sizes
- **Maintainable structure**: Easy for developers to work with
- **Scalable architecture**: Easy to add new features

---

**Remember**: This is a professional education consulting website. Every design decision should prioritize trust, clarity, and user experience. When in doubt, choose simplicity and performance over complexity.

*Last updated: September 2024*
