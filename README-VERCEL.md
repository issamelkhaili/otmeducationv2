# Vercel Deployment Guide - OTM Education Website

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on every push

## 📁 Files Added for Vercel

- `vercel.json` - Vercel configuration
- `.env.example` - Environment variables template
- `.vercelignore` - Files to ignore during deployment

## ⚙️ Environment Variables

Set these in your Vercel dashboard:

```
PORT=3001
NODE_ENV=production
JWT_SECRET=your-secret-key-here
JWT_EXPIRY=1d
ALLOWED_ORIGIN=https://your-domain.vercel.app
```

## 🔧 Configuration Details

### vercel.json
- Uses `@vercel/node` runtime
- Routes static assets correctly
- Sets production environment

### Package.json
- Added `build` script (no build step required)
- Keeps existing `start` script

## 🌐 After Deployment

Your site will be available at:
- `https://your-project-name.vercel.app`

## 📝 Notes

- No build process required (static EJS templates)
- All dependencies are included
- Images are served from `/public/assets/images/`
- CSS is served from `/public/assets/styles.css`
