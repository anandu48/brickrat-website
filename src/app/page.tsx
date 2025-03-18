'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-900/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            brickat
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white">
            Your trusted partner in construction and renovation
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-teal-500 px-6 py-3 text-white transition-colors hover:bg-teal-600"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-lg bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-navy-900">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-teal-700 p-6 shadow-lg transition-transform hover:scale-105 border border-navy-100"
              >
                <div className="mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/90">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-navy-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-teal-500/20"
              >
                <div className="mb-4 text-pink-500">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Contact us today for a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-navy-900 px-8 py-3 text-white transition-colors hover:bg-navy-800 font-semibold tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Immersive 3D Visualization',
    description: 'Experience your designs in stunning 3D with photorealistic rendering and interactive elements.',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Interactive Walkthroughs',
    description: 'Navigate through your designs with our intuitive and responsive walkthrough system.',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Virtual Reality Experience',
    description: 'Step into your designs with our cutting-edge VR technology for an unparalleled experience.',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const services = [
  {
    title: '3D Modeling',
    description: 'Create accurate 3D models of your project using the latest technology.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Virtual Reality Walkthroughs',
    description: 'Experience your project in virtual reality with interactive walkthroughs.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'VR Experience',
    description: 'Step into your project with our cutting-edge VR technology.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];