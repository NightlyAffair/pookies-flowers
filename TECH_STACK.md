# Pookie's Flowers - Tech Stack Documentation

## Project Overview
An interactive website to showcase flower arrangements and attract customers to subscribe to a flower subscription plan.

## Core Technologies

### Frontend Framework
- **Next.js 16** (React Framework)
  - Server-side rendering for better SEO
  - App Router for modern routing
  - Built-in optimization for images and assets
  - File-based routing system

### Language
- **TypeScript**
  - Type safety and better developer experience
  - Enhanced IDE autocomplete
  - Catch errors at compile time

### Styling
- **Tailwind CSS v4**
  - Utility-first CSS framework
  - Fast styling with pre-built classes
  - Responsive design made easy
  - Custom color variables for theming

## Animation Libraries

### Scroll-Based Animations
- **GSAP (GreenSock Animation Platform) v3**
  - Industry-standard animation library
  - High-performance animations
  - **ScrollTrigger Plugin** included
    - Trigger animations on scroll
    - Pin elements during scroll
    - Scrub animations (tie to scroll position)
    - Perfect for progressive loading effects

### Use Cases
- Flower expanding as user scrolls
- Text floating up with scroll
- Background color transitions
- Parallax effects

## 3D Graphics

### Three.js Ecosystem
- **Three.js v0.182**
  - WebGL-based 3D graphics library
  - Create interactive 3D scenes

- **React Three Fiber (@react-three/fiber)**
  - React renderer for Three.js
  - Declarative 3D components
  - Better integration with React ecosystem

- **React Three Drei (@react-three/drei)**
  - Helper components for R3F
  - Pre-built cameras, controls, loaders
  - Simplifies common 3D tasks

### Use Cases
- Interactive 3D flower models
- 360° product views
- Immersive gallery experiences

## Form Handling

### React Hook Form v7
- Performant form validation
- Easy integration with React
- Minimal re-renders
- Built-in error handling

### Use Cases
- Contact forms
- Newsletter subscription
- Customer inquiry forms
- Future: Subscription sign-up forms

## Project Structure

```
pookies-flowers/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/            # Reusable React components (create as needed)
├── public/                # Static assets (images, fonts, etc.)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Key Features to Implement

### Scroll Animations (GSAP + ScrollTrigger)
- Progressive image loading as user scrolls
- Flower expanding effect
- Text floating animations
- Background transitions
- Parallax scrolling

### 3D Interactions (Three.js)
- Interactive 3D flower models
- Rotate and zoom capabilities
- Smooth camera movements

### Forms (React Hook Form)
- Contact form
- Newsletter subscription
- Customer inquiry form

### Future Additions
- Stripe integration for payments
- CMS integration (Sanity/Contentful) for managing flower images
- Authentication (NextAuth.js) for user accounts
- Subscription management dashboard

## Why This Stack?

1. **Next.js** - SEO-friendly, great for business websites, excellent developer experience
2. **TypeScript** - Catch errors early, better tooling support
3. **Tailwind CSS** - Rapid styling, consistent design system
4. **GSAP** - Industry-standard animations, perfect for scroll effects
5. **Three.js + R3F** - Best-in-class 3D graphics for web
6. **React Hook Form** - Simple, performant form handling

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP ScrollTrigger Demos](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [React Three Fiber Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hook Form Guide](https://react-hook-form.com/get-started)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support required for 3D features
- Responsive design for mobile and desktop

---

**Last Updated:** January 2026
