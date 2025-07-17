# Two Brothers Powerwashing Website

A modern, responsive website for Two Brothers Powerwashing built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with blue and white color scheme
- **Service Showcase**: Detailed services section with icons and descriptions
- **Gallery**: Before/after photo gallery with modal view
- **Contact Form**: Functional contact form for quote requests
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel**: Deployment platform

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with one click

## Customization

### Logo
Replace the placeholder logo in the header component with your actual logo image.

### Images
- Add your before/after photos to the `public` folder
- Update the image paths in the Gallery component
- Replace placeholder images with actual photos

### Contact Information
Update the contact details in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`

### Services
Modify the services array in `src/components/Services.tsx` to match your exact offerings.

## Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Services.tsx
```

## License

Private project for Two Brothers Powerwashing.
