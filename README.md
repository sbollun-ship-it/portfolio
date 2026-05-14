# My Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful dark theme with accent colors
- 📱 Mobile-optimized navigation
- ⌨️ Smooth scrolling and animations
- 📧 Contact form
- 🚀 Fast performance with Next.js

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Your Information

Edit the following components to add your personal information:

- **Header**: `components/Header.tsx` - Update navigation
- **Hero**: `components/Hero.tsx` - Update your name and title
- **About**: `components/About.tsx` - Update bio and skills
- **Projects**: `components/Projects.tsx` - Add your projects
- **Contact**: `components/Contact.tsx` - Update contact info and social links
- **Footer**: `components/Footer.tsx` - Update copyright info

### Styling

All styling uses Tailwind CSS with custom color scheme:
- `primary`: #0f172a
- `secondary`: #1e293b
- `accent`: #3b82f6

Customize these colors in `tailwind.config.js`.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your repository
4. Vercel will automatically deploy on every push

### Deploy on GitHub Pages

1. Update `next.config.js` with your repository name if needed
2. Run `npm run build`
3. The static site will be in the `out` folder
4. Deploy using GitHub Pages

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help, feel free to reach out!
