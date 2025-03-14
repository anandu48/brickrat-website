'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience with BrickRat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {testimonial.rating}/5
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonial Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve helped our clients achieve their goals
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6">
                    <Image
                      src={carouselTestimonials[activeTestimonial].image}
                      alt={carouselTestimonials[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {carouselTestimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {carouselTestimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {carouselTestimonials[activeTestimonial].content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {carouselTestimonials[activeTestimonial].rating}/5
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev === 0 ? carouselTestimonials.length - 1 : prev - 1))}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev === carouselTestimonials.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing list of satisfied clients and transform your architectural visualization needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Architect, Johnson & Associates',
    content: 'BrickRat has transformed how we present our designs to clients. The interactive walkthroughs have significantly improved client engagement and understanding.',
    image: '/testimonials/sarah.jpg',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager, Urban Developments',
    content: 'The level of detail and realism in their visualizations is outstanding. It has helped us secure multiple projects and exceed client expectations.',
    image: '/testimonials/michael.jpg',
    rating: 5,
  },
];

const carouselTestimonials = [
  {
    name: 'David Thompson',
    role: 'CEO, Thompson Properties',
    content: 'Working with BrickRat has been a game-changer for our real estate development projects. Their VR experiences have helped us close deals faster than ever before.',
    image: '/testimonials/david.jpg',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Interior Designer, Design Studio',
    content: 'The attention to detail and ability to capture the essence of our designs is remarkable. BrickRat has become an essential part of our design process.',
    image: '/testimonials/emma.jpg',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Construction Manager, Wilson Builders',
    content: 'The 3D visualizations have helped us identify potential issues before construction begins, saving us time and resources. Highly recommended!',
    image: '/testimonials/james.jpg',
    rating: 5,
  },
]; 