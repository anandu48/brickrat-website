# BrickRat - Architectural Visualization Website

A modern, responsive website for BrickRat, a revolutionary architectural visualization service. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design
- Smooth animations and transitions
- Interactive components
- Multi-page layout
- Contact form
- Project showcase
- Testimonials
- Pricing plans
- Google Maps integration

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18.x or later
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brickrat-website.git
   cd brickrat-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
brickrat-website/
├── public/
│   ├── images/
│   ├── videos/
│   ├── team/
│   ├── projects/
│   ├── testimonials/
│   └── services/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── testimonials/
│   │   ├── pricing/
│   │   └── contact/
│   ├── components/
│   └── styles/
└── package.json
```

## Pages

- **Home**: Landing page with hero section and featured content
- **About**: Company information, mission, and team
- **Services**: Detailed service offerings and process
- **Projects**: Portfolio showcase with filtering
- **Testimonials**: Client testimonials and success stories
- **Pricing**: Pricing plans and features
- **Contact**: Contact form and information

## Customization

1. **Images**: Replace images in the `public` directory with your own
2. **Content**: Update text content in respective page components
3. **Styling**: Modify Tailwind classes or extend the theme in `tailwind.config.js`
4. **Animations**: Adjust Framer Motion animations in components

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import your project in Vercel
3. Add your environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/brickrat-website](https://github.com/yourusername/brickrat-website)
