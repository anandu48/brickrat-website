'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// This would typically come from your backend/CMS
const getBlogPost = (id: string) => {
  // This is sample data - in a real application, you would fetch this from your backend
  const sampleBlogs = {
    '1': {
      title: 'The Future of Architectural Visualization',
      content: `
        Virtual reality and real-time rendering are revolutionizing the way architects and designers present their work. 
        This transformation is not just about creating prettier pictures – it&apos;s about fundamentally changing how we interact 
        with and understand architectural spaces before they&apos;re built.

        The Impact of Real-Time Rendering
        Real-time rendering has become a game-changer in architectural visualization. It allows clients to explore designs 
        interactively, making immediate changes and seeing the results instantly. This technology has several key benefits:
        
        • Improved client communication
        • Faster design iterations
        • More accurate final results
        • Enhanced spatial understanding
        
        The Role of Virtual Reality
        VR technology takes architectural visualization to the next level by allowing clients to literally step inside their 
        future spaces. This immersive experience provides:
        
        • True-to-scale spatial perception
        • Intuitive design review process
        • Emotional connection to the space
        • Better decision-making capability
      `,
      author: 'John Doe',
      date: '2024-03-15',
      category: 'Technology',
      imageUrl: '/blog/architecture-viz.jpg',
      authorRole: 'Senior Architectural Visualizer',
      readTime: '5 min read',
    },
    '2': {
      title: 'Sustainable Design Practices',
      content: `
        Modern architectural visualization tools are playing a crucial role in promoting sustainable building practices. 
        By providing detailed, accurate representations of building performance and environmental impact, these tools help 
        architects and clients make informed decisions about sustainable design choices.

        Key Benefits of Sustainable Visualization
        • Energy efficiency analysis
        • Environmental impact assessment
        • Material optimization
        • Natural light simulation
        
        The visualization process helps stakeholders understand the long-term benefits of sustainable choices, making it 
        easier to justify initial investments in green building technologies.
      `,
      author: 'Jane Smith',
      date: '2024-03-10',
      category: 'Sustainability',
      imageUrl: '/blog/sustainable-design.jpg',
      authorRole: 'Sustainability Consultant',
      readTime: '4 min read',
    },
  };

  return sampleBlogs[id as keyof typeof sampleBlogs];
};

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.id as string);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-blue-600 font-medium">{post.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <h3 className="font-medium text-gray-900">{post.author}</h3>
            <p className="text-gray-600 text-sm">{post.authorRole}</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm p-8">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            ← Back to Blog
          </Link>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              Share
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Bookmark
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 