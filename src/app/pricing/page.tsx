'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your architectural visualization needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
              {isAnnual && (
                <span className="ml-2 text-sm text-green-600 font-normal">
                  Save 20%
                </span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.featured ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.featured && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-gray-600 mb-8">
                    {plan.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose your plan and start transforming your architectural visualization needs today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>
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