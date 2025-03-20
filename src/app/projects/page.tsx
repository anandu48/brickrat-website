'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our portfolio of successful architectural visualization projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-500 text-white'
                    : 'bg-teal-50 text-navy-900 hover:bg-teal-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group border border-teal-200"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-teal-600">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-navy-900/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-teal-600">
                      {project.category}
                    </span>
                    <span className="text-sm text-navy-900/60">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Let&apos;s create something extraordinary together. Contact us today to discuss your vision.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const categories = ['all', 'residential', 'commercial', 'interior', 'landscape'];

const projects = [
  {
    title: 'Modern Luxury Villa',
    description: 'A stunning 3D visualization of a contemporary luxury villa with expansive glass walls and minimalist design.',
    image: '/projects/villa.jpg',
    category: 'residential',
    year: '2024',
  },
  {
    title: 'Corporate Office Complex',
    description: 'Interactive walkthrough of a state-of-the-art office complex featuring sustainable design elements.',
    image: '/projects/office.jpg',
    category: 'commercial',
    year: '2024',
  },
  {
    title: 'Minimalist Apartment',
    description: 'Photorealistic rendering of a modern apartment interior with clean lines and natural materials.',
    image: '/projects/apartment.jpg',
    category: 'interior',
    year: '2023',
  },
  {
    title: 'Urban Park Design',
    description: '3D visualization of a sustainable urban park with integrated water features and native landscaping.',
    image: '/projects/park.jpg',
    category: 'landscape',
    year: '2023',
  },
  {
    title: 'Beachfront Residence',
    description: 'Immersive VR experience of a luxury beachfront home with panoramic ocean views.',
    image: '/projects/beach-house.jpg',
    category: 'residential',
    year: '2023',
  },
  {
    title: 'Shopping Mall Renovation',
    description: 'Before and after visualization of a major shopping mall renovation project.',
    image: '/projects/mall.jpg',
    category: 'commercial',
    year: '2024',
  },
]; 