'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// This would typically come from your backend/CMS
const sampleBlogs = [
  {
    id: 1,
    title: 'The Future of Architectural Visualization',
    excerpt: 'Exploring how virtual reality and real-time rendering are transforming architectural visualization.',
    author: 'John Doe',
    date: '2024-03-15',
    category: 'Technology',
    imageUrl: '/blog/architecture-viz.jpg',
  },
  {
    id: 2,
    title: 'Sustainable Design Practices',
    excerpt: 'How modern architectural visualization tools are promoting sustainable building practices.',
    author: 'Jane Smith',
    date: '2024-03-10',
    category: 'Sustainability',
    imageUrl: '/blog/sustainable-design.jpg',
  },
  // Add more sample blogs as needed
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Sustainability', 'Design', 'Industry News'];

  const filteredBlogs = sampleBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600">
            Latest insights, updates, and stories from our team
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"/>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-blue-600">{blog.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {blog.author}</span>
                  <Link 
                    href={`/blog/${blog.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 