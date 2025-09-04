# OTM Education Website

A modern, responsive website for OTM Education - an international education consulting company.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

The application runs on **http://localhost:3001**

## 📁 Project Structure

```
/root/website_refactor/
├── app.js                    # Main Express application
├── config.js                 # Configuration settings
├── routes.js                 # Route definitions
├── package.json              # Dependencies and scripts
├── public/
│   └── assets/
│       ├── styles.css        # Main stylesheet (all custom CSS)
│       └── images/           # Organized image directories
│           ├── heroes/       # Page hero images
│           ├── students/     # Student/destination images
│           ├── testimonials/ # Testimonial photos
│           └── gallery/      # Gallery images
└── views/
    ├── pages/                # Page templates
    │   ├── home.ejs
    │   ├── nos-services.ejs
    │   ├── pourquoi-otm-education.ejs
    │   ├── contact.ejs
    │   ├── inscription.ejs
    │   ├── faq.ejs
    │   ├── 404.ejs
    │   └── error.ejs
    └── partials/             # Reusable components
        ├── head.ejs          # HTML head section
        ├── header.ejs        # Navigation header
        └── footer.ejs        # Footer
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1e40af` (Blue)
- **Secondary**: `#64748b` (Gray)
- **Accent**: `#f59e0b` (Yellow/Orange)
- **Success**: `#10b981` (Green)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Hero Sections**: Full-height with background images
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (blue), Outline (white), Accent (yellow)
- **Animations**: AOS (Animate On Scroll) library

## 🛠 Technology Stack

### Backend
- **Node.js** with Express.js
- **EJS** templating engine
- **Compression** middleware for performance
- **CORS** enabled

### Frontend
- **Tailwind CSS** (via CDN)
- **Custom CSS** in `styles.css`
- **Font Awesome** icons
- **AOS** animations
- **Google Fonts** (Poppins)

### Images
- **WebP format** for optimal performance
- **Organized directories** by purpose
- **Optimized file sizes** (92% reduction from original)

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with hero, services, destinations, testimonials |
| `/nos-services` | Services | Detailed services page with pricing and testimonials |
| `/pourquoi-otm-education` | About | Company information and team |
| `/contact` | Contact | Contact form and location map |
| `/inscription` | Signup | Registration form |
| `/faq` | FAQ | Frequently asked questions |

## 🎯 Key Features

### Home Page
- **Hero Section**: Full-screen with call-to-action buttons
- **Services Carousel**: Auto-scrolling marquee with 6 services
- **Destinations**: Interactive hover effects on country cards
- **Statistics**: Animated counters with infographic
- **Testimonials**: Modern cards with verified badges
- **Gallery**: Enhanced grid with hover overlays

### Services Page
- **Sub-navigation**: Chips for quick section jumping
- **Service Highlights**: Creative cards with gradient badges
- **Steps Process**: 4-step visual process
- **Pricing**: Three-tier pricing structure
- **Testimonials**: Student success stories

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** with CSS Grid and Flexbox

## 🖼 Image Management

### Directory Structure
```
/images/
├── heroes/           # Page backgrounds
├── students/         # Country/destination images
├── testimonials/     # Student photos
├── gallery/          # General gallery images
└── [root]/           # Service images, maps, etc.
```

### Image Naming Convention
- **Heroes**: `{page}-hero.webp` (e.g., `home-hero.webp`)
- **Students**: `students-{country}.webp` (e.g., `students-france.webp`)
- **Testimonials**: `testimonial-{name}.webp` (e.g., `testimonial-sophie.webp`)

## 🎨 CSS Architecture

### Main Stylesheet (`styles.css`)
- **CSS Variables**: For consistent theming
- **Component-based**: Organized by sections
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

### Key CSS Classes
- `.hero`: Full-height hero sections
- `.section`: Standard page sections
- `.card`: Reusable card component
- `.btn`: Button variants (primary, outline, accent)
- `.service-highlight`: Creative service cards
- `.testimonial-modern`: Modern testimonial design

## 🔧 Development

### Scripts
```bash
npm start          # Production server
npm run dev        # Development with nodemon
npm install        # Install dependencies
```

### Environment
- **Port**: 3001 (configurable via PORT env var)
- **Node Version**: >=16.x
- **Static Files**: Served from `/public/assets`

### Dependencies
- **Production**: Express, EJS, Compression, CORS
- **Development**: Nodemon, Sharp (image processing)

## 🚀 Performance Optimizations

- **WebP Images**: 92% size reduction
- **Compression**: Gzip compression enabled
- **CDN Assets**: Tailwind, Font Awesome, Google Fonts
- **Optimized CSS**: Single stylesheet, no unused code
- **Lazy Loading**: Images load on demand

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, WebP images

## 🔒 Security

- **CORS**: Configured for cross-origin requests
- **Input Validation**: Express-validator for forms
- **Error Handling**: Custom 404 and 500 pages

## 📞 Contact & Support

For technical questions or issues:
- **Repository**: This codebase
- **Documentation**: This README and AI documentation
- **Environment**: Node.js 16+ required

---

*Last updated: September 2024*
