# Development Guide - OTM Education Website

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation
```bash
git clone [repository-url]
cd website_refactor
npm install
npm run dev
```

### Development Server
- **URL**: http://localhost:3001
- **Hot Reload**: Yes (with nodemon)
- **Port**: Configurable via PORT environment variable

## 🏗 Project Architecture

### Backend (Express.js)
```
app.js              # Main server file
├── Middleware      # Compression, CORS, JSON parsing
├── Static Files    # /assets route for public files
├── View Engine     # EJS templating
├── Routes          # Modular route handling
└── Error Handling  # 404 and 500 pages
```

### Frontend (EJS + CSS)
```
views/
├── pages/          # Individual page templates
├── partials/       # Reusable components (head, header, footer)
└── layouts/        # Base templates (if needed)

public/assets/
├── styles.css      # All custom CSS (1475 lines)
└── images/         # Organized image directories
```

## 🎨 Styling Guidelines

### CSS Architecture
- **Single File**: All styles in `public/assets/styles.css`
- **Tailwind CDN**: Utility classes via CDN (no build process)
- **Custom Components**: Service cards, hero sections, testimonials
- **Responsive**: Mobile-first approach

### CSS Organization
```css
/* 1. CSS Variables */
:root { --primary-color: #1e40af; }

/* 2. Base Styles */
body, html { /* reset and base styles */ }

/* 3. Layout Components */
.hero, .section, .container { /* layout styles */ }

/* 4. UI Components */
.btn, .card, .service-highlight { /* component styles */ }

/* 5. Page-specific Styles */
.hero-home, .hero-services { /* page-specific overrides */ }

/* 6. Responsive Styles */
@media (max-width: 768px) { /* mobile styles */ }
```

### Component Patterns

#### Hero Sections
```css
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero::before {
    content: '';
    position: absolute;
    background: url('/assets/images/heroes/home-hero.webp') center/cover;
    opacity: 0.6;
    z-index: 1;
}
```

#### Service Cards
```css
.service-highlight {
    background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0.5rem 0;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
}
```

## 📄 Page Development

### Creating New Pages

1. **Add Route** in `routes.js`:
```javascript
router.get('/new-page', (req, res) => {
    res.render('pages/new-page', {
        title: 'New Page | OTM Education',
        description: 'Page description for SEO'
    });
});
```

2. **Create Template** in `views/pages/new-page.ejs`:
```html
<%- include('../partials/head') %>
<%- include('../partials/header') %>

<!-- Page Content -->
<section class="hero hero-new-page">
    <div class="container mx-auto px-4">
        <div class="hero-content text-center">
            <h1 class="text-5xl font-bold mb-6">Page Title</h1>
            <p class="text-xl mb-8">Page description</p>
        </div>
    </div>
</section>

<%- include('../partials/footer') %>
```

3. **Add Hero Image** in `public/assets/images/heroes/new-page-hero.webp`

4. **Add CSS** in `styles.css`:
```css
.hero-new-page::before {
    background: url('/assets/images/heroes/new-page-hero.webp') center/cover;
}
```

### Page Structure Template
```html
<%- include('../partials/head') %>
<%- include('../partials/header') %>

<!-- Hero Section -->
<section class="hero hero-[page-name]">
    <!-- Hero content -->
</section>

<!-- Main Content -->
<section class="section">
    <div class="container mx-auto px-4">
        <!-- Page content -->
    </div>
</section>

<%- include('../partials/footer') %>
```

## 🖼 Image Management

### Adding New Images

1. **Choose Directory**:
   - `heroes/` - Page background images
   - `students/` - Country/destination photos
   - `testimonials/` - Student profile photos
   - `gallery/` - General gallery images
   - Root - Service images, maps, etc.

2. **Convert to WebP**:
```bash
convert image.png image.webp
```

3. **Optimize Size**:
```bash
# Resize if needed
convert image.webp -resize 1200x800 image.webp
```

4. **Update References**:
```html
<img src="/assets/images/[directory]/image.webp" alt="Description">
```

### Image Naming Convention
- **Heroes**: `{page}-hero.webp`
- **Students**: `students-{country}.webp`
- **Testimonials**: `testimonial-{name}.webp`
- **Services**: `{service-name}.webp`

## 🎯 Component Development

### Creating Reusable Components

#### 1. Service Card Component
```html
<!-- In EJS template -->
<div class="service-highlight grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
        <span class="service-badge">Category</span>
        <h3 class="gradient-title">Service Title</h3>
        <p class="text-lg mb-6">Service description</p>
        <ul class="feature-list">
            <li class="feature-item">Feature 1</li>
            <li class="feature-item">Feature 2</li>
        </ul>
        <a href="/contact" class="btn btn-primary">Call to Action</a>
    </div>
    <div class="relative">
        <div class="blob blob-1"></div>
        <img src="/assets/images/service-image.webp" alt="Service" class="relative rounded-2xl shadow-2xl">
    </div>
</div>
```

#### 2. Testimonial Component
```html
<div class="testimonial-modern">
    <div class="tm-quote">"</div>
    <p>Testimonial text</p>
    <div class="tm-footer">
        <img src="/assets/images/testimonials/student.webp" alt="Student" class="tm-avatar">
        <div>
            <h4>Student Name</h4>
            <span>Program • University</span>
        </div>
        <div class="tm-verified" title="Avis vérifié">✓</div>
    </div>
</div>
```

## 🔧 Development Workflow

### Daily Development
1. **Start Server**: `npm run dev`
2. **Make Changes**: Edit files in `views/` or `public/assets/`
3. **Test Locally**: Check http://localhost:3001
4. **Test Responsive**: Use browser dev tools
5. **Commit Changes**: Git commit with descriptive messages

### Adding Features
1. **Plan Structure**: Where does it fit in existing design?
2. **Create Components**: Reusable, consistent styling
3. **Test Responsive**: Mobile, tablet, desktop
4. **Optimize Images**: Convert to WebP, appropriate sizes
5. **Update Documentation**: Keep README and AI docs current

### Code Quality
- **Consistent Naming**: kebab-case for files, camelCase for variables
- **Clean CSS**: No unused styles, organized sections
- **Semantic HTML**: Proper heading hierarchy, alt text
- **Performance**: Optimize images, minimize HTTP requests

## 🐛 Debugging

### Common Issues

#### Images Not Loading
```bash
# Check file exists
ls -la public/assets/images/[directory]/

# Check file permissions
chmod 644 public/assets/images/[directory]/image.webp

# Verify path in code
<img src="/assets/images/[directory]/image.webp">
```

#### CSS Not Applying
```bash
# Check CSS file exists
ls -la public/assets/styles.css

# Verify CSS is loaded in head.ejs
<link rel="stylesheet" href="/assets/styles.css">

# Check for syntax errors
# Validate CSS syntax
```

#### Routes Not Working
```bash
# Check route exists in routes.js
router.get('/route-name', (req, res) => { ... });

# Verify EJS file exists
ls -la views/pages/route-name.ejs

# Check server logs for errors
npm run dev
```

### Performance Issues
- **Large Images**: Convert to WebP, resize appropriately
- **Slow Loading**: Check network tab in dev tools
- **CSS Issues**: Remove unused styles, optimize selectors
- **JavaScript Errors**: Check console for errors

## 📱 Responsive Testing

### Breakpoints
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

### Testing Checklist
- [ ] Mobile navigation works
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are touch-friendly
- [ ] Forms are usable
- [ ] Animations work smoothly

### Browser Testing
- **Chrome**: Primary development browser
- **Firefox**: Cross-browser compatibility
- **Safari**: iOS compatibility
- **Edge**: Windows compatibility

## 🚀 Deployment

### Production Checklist
- [ ] All images converted to WebP
- [ ] CSS optimized (no unused styles)
- [ ] JavaScript minified (if applicable)
- [ ] Error pages working (404, 500)
- [ ] All routes tested
- [ ] Mobile responsive verified
- [ ] Performance optimized

### Environment Variables
```bash
PORT=3001                    # Server port
NODE_ENV=production          # Environment
```

## 📊 Performance Monitoring

### Key Metrics
- **Page Load Time**: <3 seconds
- **Image Optimization**: WebP format, appropriate sizes
- **CSS Size**: Single file, no unused styles
- **JavaScript**: Minimal, no heavy libraries

### Tools
- **Google PageSpeed Insights**: Performance testing
- **Chrome DevTools**: Network and performance analysis
- **Lighthouse**: Comprehensive performance audit

---

*This guide should be updated as the project evolves. Keep it current with new patterns and best practices.*
