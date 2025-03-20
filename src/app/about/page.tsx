'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
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
              About BrickRat
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Revolutionizing architectural visualization through cutting-edge technology and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-teal-200"
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-navy-900/80 mb-6">
                At BrickRat, we are on a mission to transform the way people experience and understand architectural designs. We believe that everyone should be able to step into their future spaces before they&apos;re built, making informed decisions with confidence.
              </p>
              <p className="text-lg text-navy-900/80">
                Our innovative approach combines cutting-edge 3D visualization technology with intuitive user interfaces to create immersive experiences that bridge the gap between imagination and reality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden border border-teal-200"
            >
              <Image
                src="/mission-image.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do at BrickRat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-teal-200/20"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind BrickRat&apos;s success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {member.name}
                </h3>
                <p className="text-lg text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-lg">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what&apos;s possible in architectural visualization.',
    icon: (
      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in every project we undertake.',
    icon: (
      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to bring their vision to life.',
    icon: (
      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Minhaj Falaki',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in architectural visualization, John leads BrickRat with a vision to revolutionize the industry.',
    image: '/team/john-doe.jpg',
  },
  {
    name: 'Indrajith',
    role: 'Technical Director',
    bio: 'Jane brings expertise in 3D modeling and virtual reality, driving our technical innovation forward.',
    image: '/team/jane-smith.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Creative Director',
    bio: 'Mike ensures that every project meets the highest standards of visual quality and user experience.',
    image: '/team/mike-johnson.jpg',
  },
  {
    name: 'Sarah Wilson',
    role: 'Head of Operations',
    bio: 'Sarah oversees day-to-day operations and ensures smooth project delivery to our valued clients.',
    image: '/team/sarah-wilson.jpg',
  },
];