'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Price Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the cost of your interactive architectural visualization project
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Total Area Input */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Total Area (m²)
              </label>
              <input
                type="range"
                min="300"
                max="10000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">300 m²</span>
                <span className="text-sm text-gray-600">10000 m²</span>
              </div>
            </div>

            {/* Building Types */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Types of Buildings
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="private">Private sector (residential buildings up to 3000 m²)</option>
                <option value="low-rise">Low-rise residential complex (from 3000 m² total)</option>
                <option value="apartment">Apartment residential building (from 3000 m²)</option>
                <option value="commercial">Commercial real estate</option>
                <option value="cultural">Cultural and recreational facilities</option>
              </select>
            </div>

            {/* Basic Functionality */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Functionality</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" checked disabled />
                  <span className="ml-2 text-gray-700">Professional camera</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" checked disabled />
                  <span className="ml-2 text-gray-700">Weather and time settings (LITE ver.)</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" checked disabled />
                  <span className="ml-2 text-gray-700">"DRONE" Presentation mode</span>
                </div>
              </div>
            </div>

            {/* Additional Functions */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Functions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">Configurator</span>
                  </div>
                  <span className="text-gray-600">+$1000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">Weather and time settings (PRO ver.)</span>
                  </div>
                  <span className="text-gray-600">+$500</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">TOUCH PRESENTATION mode</span>
                  </div>
                  <span className="text-gray-600">+$1000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">3RD PERSON mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">AUTO mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-700">1ST PERSON mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
              </div>
            </div>

            {/* Source Data */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Source Data</h3>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="none">NONE</option>
                <option value="model">Ready-made 3D model (-30%)</option>
                <option value="design">Architectural design and static visualizations (-5%)</option>
              </select>
            </div>

            {/* Total Price */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">TOTAL PRICE</span>
                <span className="text-3xl font-bold text-blue-600">$0</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and individual architects',
    monthlyPrice: 99,
    annualPrice: 950,
    features: [
      'Up to 5 projects per month',
      'Basic 3D visualization',
      'Standard resolution renders',
      'Email support',
      'Basic walkthrough features'
    ],
  },
  {
    name: 'Professional',
    description: 'Ideal for design firms and growing businesses',
    monthlyPrice: 199,
    annualPrice: 1910,
    featured: true,
    features: [
      'Unlimited projects',
      'Advanced 3D visualization',
      'High-resolution renders',
      'Priority support',
      'Interactive walkthroughs',
      'VR experience support',
      'Custom branding'
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    monthlyPrice: 499,
    annualPrice: 4790,
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      'Advanced analytics',
      'Training sessions',
      'SLA guarantees'
    ],
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we provide custom enterprise solutions tailored to your specific needs. Contact our sales team for more information.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.',
  },
]; 