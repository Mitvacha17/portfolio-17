# Deployment Guide

This guide covers multiple deployment options for your Single Page Portfolio.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Automatic Deployment

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Manual Deployment

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
\`\`\`

## 🐳 Docker Deployment

### Build and Run Locally

\`\`\`bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
\`\`\`

### Docker Compose

Create `docker-compose.yml`:

\`\`\`yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
\`\`\`

Run with:
\`\`\`bash
docker-compose up -d
\`\`\`

## 🌐 Static Hosting (Netlify, GitHub Pages)

### Build Static Files

\`\`\`bash
npm run build
\`\`\`

The static files will be in the `dist` folder.

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://netlify.com/drop)

Or connect your GitHub repository for automatic deployments.

### GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Set up GitHub Actions workflow (already included in `.github/workflows/`)
3. Push to main branch to trigger deployment

## ☁️ Cloud Platforms

### AWS S3 + CloudFront

1. Build static files: `npm run build`
2. Upload `dist` folder contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

### Google Cloud Platform

1. Build static files: `npm run build`
2. Upload to Google Cloud Storage
3. Configure Cloud CDN
4. Set up custom domain (optional)

## 🔧 Environment Variables

For production deployments, set these environment variables:

\`\`\`bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## 📊 Performance Optimization

### Before Deployment

1. Optimize images in the `public` folder
2. Run `npm run build` to check for any build errors
3. Test the production build locally: `npm run start`
4. Run Lighthouse audit for performance metrics

### After Deployment

1. Set up monitoring (Vercel Analytics, Google Analytics)
2. Configure CDN for static assets
3. Enable compression (gzip/brotli)
4. Set up proper caching headers

## 🔒 Security Considerations

1. Remove any sensitive information from the code
2. Set up proper CORS headers if needed
3. Use HTTPS for production
4. Keep dependencies updated

## 📈 Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- Provides Core Web Vitals metrics

### Google Analytics
Add to `app/layout.tsx`:

\`\`\`tsx
import Script from 'next/script'

// Add in the <head> section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
\`\`\`

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript errors and fix them
2. **Image Optimization**: Ensure images are properly optimized
3. **Environment Variables**: Make sure all required env vars are set
4. **Routing Issues**: Verify all internal links use proper paths

### Debug Commands

\`\`\`bash
# Check for TypeScript errors
npx tsc --noEmit

# Analyze bundle size
npm run build && npx @next/bundle-analyzer

# Test production build locally
npm run build && npm run start
\`\`\`

## 📞 Support

If you encounter any deployment issues:

1. Check the deployment logs
2. Verify all dependencies are installed
3. Ensure environment variables are set correctly
4. Test the build locally first

For platform-specific issues, refer to their documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Docker Docs](https://docs.docker.com)
